"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  applyLearningModeAttr,
  isLearningMode,
  LEARNING_MODE_EVENT,
  readLocalMode,
  writeLocalMode,
  type LearningMode,
} from "@/lib/learning-mode";

type Ctx = {
  userId: string;
  mode: LearningMode | null;
  ready: boolean;
  setMode: (mode: LearningMode) => Promise<void>;
};

const LearningModeContext = createContext<Ctx | null>(null);

export function useLearningMode() {
  const ctx = useContext(LearningModeContext);
  if (!ctx) throw new Error("useLearningMode must be used within LearningModeProvider");
  return ctx;
}

export default function LearningModeProvider({
  userId,
  initialMode,
  children,
}: {
  userId: string;
  initialMode: LearningMode | null;
  children: React.ReactNode;
}) {
  const [mode, setModeState] = useState<LearningMode | null>(initialMode);
  const [ready, setReady] = useState(Boolean(initialMode));
  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    const local = readLocalMode(userId);
    const next = initialMode || local;
    setModeState(next);
    applyLearningModeAttr(next);
    setReady(true);
  }, [userId, initialMode]);

  useEffect(() => {
    applyLearningModeAttr(mode);
  }, [mode]);

  const setMode = useCallback(
    async (next: LearningMode) => {
      setModeState(next);
      applyLearningModeAttr(next);
      writeLocalMode(userId, next);
      const { error } = await supabase.from("profiles").update({ learning_mode: next }).eq("id", userId);
      if (error) {
        await supabase.from("activity_events").insert({
          user_id: userId,
          event_type: LEARNING_MODE_EVENT,
          metadata: { mode: next },
        });
      }
    },
    [supabase, userId]
  );

  const value = useMemo(
    () => ({ userId, mode, ready, setMode }),
    [userId, mode, ready, setMode]
  );

  return <LearningModeContext.Provider value={value}>{children}</LearningModeContext.Provider>;
}

export function parseInitialMode(value: unknown): LearningMode | null {
  return isLearningMode(value) ? value : null;
}

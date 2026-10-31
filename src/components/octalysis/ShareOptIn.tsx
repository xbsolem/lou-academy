"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ShareOptIn({
  userBadgeId,
  initiallyShared,
}: {
  userBadgeId: string;
  initiallyShared: boolean;
}) {
  const [shared, setShared] = useState(initiallyShared);
  const [busy, setBusy] = useState(false);
  const supabase = createClient();

  const toggle = async () => {
    setBusy(true);
    const next = !shared;
    const { error } = await supabase.from("user_badges").update({ shared: next }).eq("id", userBadgeId);
    setBusy(false);
    if (!error) setShared(next);
  };

  return (
    <button type="button" className="share-optin" onClick={toggle} disabled={busy}>
      {shared ? "Ne plus partager cette réalisation" : "Partager cette réalisation (optionnel)"}
    </button>
  );
}

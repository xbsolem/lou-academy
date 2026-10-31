"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function RevisionToggle({
  userId,
  initial,
}: {
  userId: string;
  initial: boolean;
}) {
  const [on, setOn] = useState(initial);
  const [busy, setBusy] = useState(false);
  const supabase = createClient();

  const toggle = async () => {
    setBusy(true);
    const next = !on;
    const { error } = await supabase.from("profiles").update({ revision_reminders: next }).eq("id", userId);
    setBusy(false);
    if (!error) setOn(next);
  };

  return (
    <div className="revision-toggle">
      <h3>Rappels de révision</h3>
      <p>
        Si vous activez cette option, l&apos;accueil pourra vous proposer de revoir une étape où le score était
        plus faible. Aucune série à conserver, aucun message de culpabilité.
      </p>
      <button type="button" onClick={toggle} disabled={busy} className={on ? "primary-btn" : "secondary-btn"}>
        {on ? "Rappels activés" : "Activer les rappels (facultatif)"}
      </button>
    </div>
  );
}

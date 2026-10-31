import Link from "next/link";
import type { BadgeRow, SkillRow } from "@/lib/octalysis/load-learner";
import SkillList from "./SkillList";
import ShareOptIn from "./ShareOptIn";

export default function PortfolioSection({
  skills,
  badges,
  cases,
  courses,
  targetRole,
  suggestionsHref = "/suggestions",
}: {
  skills: SkillRow[];
  badges: BadgeRow[];
  cases: { title: string; href: string; detail: string }[];
  courses: { id: string; title: string; status: string; progress: number }[];
  targetRole: string;
  suggestionsHref?: string;
}) {
  return (
    <section className="portfolio-section">
      <h2>Portefeuille de compétences</h2>
      <p className="muted" style={{ marginBottom: 20 }}>
        Construction progressive : compétences validées, réalisations, cas terminés et formations.
        Les notes et fiches de révision pourront s&apos;y ajouter lorsqu&apos;elles seront disponibles.
      </p>

      {targetRole && (
        <p className="portfolio-reco">
          Poste visé déclaré : <strong>{targetRole}</strong>.{" "}
          <Link href={suggestionsHref} className="inline-link">
            Voir les suggestions de formation
          </Link>
          . Ce n&apos;est pas une garantie d&apos;embauche.
        </p>
      )}

      <div className="fluid-grid">
        <div className="journey-block">
          <h3>Compétences validées</h3>
          <SkillList skills={skills} />
        </div>
        <div className="journey-block">
          <h3>Réalisations</h3>
          {badges.length === 0 ? (
            <p className="muted">Aucune réalisation pour l&apos;instant.</p>
          ) : (
            <ul className="realization-list">
              {badges.map((b) => (
                <li key={b.userBadgeId}>
                  <i className={`fas ${b.icon}`} aria-hidden="true" />
                  <div>
                    <strong>{b.title}</strong>
                    <p className="muted">{b.description}</p>
                    <ShareOptIn userBadgeId={b.userBadgeId} initiallyShared={b.shared} />
                  </div>
                </li>
              ))}
            </ul>
          )}
          <p className="muted" style={{ marginTop: 12 }}>
            Le partage est volontaire et porte uniquement sur la réalisation choisie. Il n&apos;existe pas de classement public.
          </p>
        </div>
        <div className="journey-block">
          <h3>Cas et livrables</h3>
          {cases.length === 0 ? (
            <p className="muted">Les cas terminés apparaîtront ici (quiz, exercices, projets de parcours).</p>
          ) : (
            <ul className="challenge-list">
              {cases.map((c) => (
                <li key={`${c.href}-${c.title}`}>
                  <Link href={c.href}>{c.title}</Link>
                  <p className="muted">{c.detail}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="journey-block">
          <h3>Formations</h3>
          {courses.length === 0 ? (
            <p className="muted">Aucune formation inscrite.</p>
          ) : (
            <ul className="challenge-list">
              {courses.map((c) => (
                <li key={c.id}>
                  <Link href={`/player/${c.id}`}>{c.title}</Link>
                  <p className="muted">
                    {c.status === "completed" ? "Terminée" : "En cours"} · {Math.round(c.progress)} %
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="journey-block">
          <h3>Fiches de révision</h3>
          <p className="muted">
            Aucune fiche pour l&apos;instant. Cet espace est prêt à les accueillir sans bloquer le reste du portefeuille.
          </p>
        </div>
        <div className="journey-block">
          <h3>Notes personnelles</h3>
          <p className="muted">
            Aucune note pour l&apos;instant. Les notes pourront être rattachées ici plus tard.
          </p>
        </div>
      </div>
    </section>
  );
}

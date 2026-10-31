import Link from "next/link";
import type { LearnerJourney } from "@/lib/octalysis/load-learner";
import MissionCard from "./MissionCard";
import SkillList from "./SkillList";

export default function LearnerDashboard({
  firstName,
  journey,
  revisionOn,
}: {
  firstName: string;
  journey: LearnerJourney;
  revisionOn: boolean;
}) {
  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>
        Bonjour{firstName ? ` ${firstName}` : ""}
      </h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        Où vous en êtes, ce que vous savez déjà faire, et la prochaine étape professionnelle.
      </p>

      <div className="stats-grid" style={{ marginBottom: 28 }}>
        <div style={statCard}>
          <strong style={{ fontSize: "1.5rem" }}>{journey.inProgress.length}</strong>
          <span className="muted">Formations en cours</span>
        </div>
        <div style={statCard}>
          <strong style={{ fontSize: "1.5rem" }}>{journey.doneCount}</strong>
          <span className="muted">Accompli</span>
        </div>
        <div style={statCard}>
          <strong style={{ fontSize: "1.5rem" }}>{journey.skillCount}</strong>
          <span className="muted">Ce que vous savez faire</span>
        </div>
        <div style={statCard}>
          <strong style={{ fontSize: "1.5rem" }}>{journey.globalPercent} %</strong>
          <span className="muted">Avancement d&apos;ensemble</span>
        </div>
      </div>

      <div className="action-row" style={{ marginBottom: 28 }}>
        <Link href="/catalogue" style={primaryBtn}>
          <i className="fas fa-book-open" /> Catalogue
        </Link>
        <Link href="/mes-formations" style={secondaryBtn}>
          <i className="fas fa-play-circle" /> Mes formations
        </Link>
        <Link href="/espace" style={secondaryBtn}>
          <i className="fas fa-user-circle" /> Mon espace
        </Link>
        <Link href="/mes-revisions" style={secondaryBtn}>
          <i className="fas fa-book" /> Mes révisions
        </Link>
        <Link href="/suggestions" style={secondaryBtn}>
          <i className="fas fa-lightbulb" /> Suggestions
        </Link>
      </div>

      <div className="fluid-grid journey-grid">
        <section className="journey-block">
          <h2>Ma prochaine mission</h2>
          {journey.nextMission ? (
            <>
              <MissionCard mission={journey.nextMission} compact />
              <Link href={`/player/${journey.nextMission.courseId}`} className="inline-link">
                Ouvrir {journey.nextMission.courseTitle}
              </Link>
            </>
          ) : (
            <p className="muted">
              Aucune mission en cours.{" "}
              <Link href="/catalogue" className="inline-link">
                Parcourir le catalogue
              </Link>
            </p>
          )}
        </section>

        <section className="journey-block">
          <h2>Reprendre</h2>
          {journey.resume ? (
            <>
              <p>
                <strong>{journey.resume.courseTitle}</strong>
                {journey.resume.lessonTitle ? ` — ${journey.resume.lessonTitle}` : ""}
              </p>
              <Link href={`/player/${journey.resume.courseId}`} style={primaryBtn}>
                <i className="fas fa-play" /> Continuer
              </Link>
            </>
          ) : (
            <p className="muted">Aucune leçon récente.</p>
          )}
          <p className="mode-engaged journey-nudge">Vous pouvez reprendre exactement là où vous vous êtes arrêté.</p>
        </section>

        <section className="journey-block">
          <h2>Mes compétences</h2>
          <SkillList skills={journey.skills.slice(0, 6)} />
          {journey.skillsToGrow.length > 0 && (
            <>
              <h3 className="journey-sub">Compétences à développer</h3>
              <SkillList
                skills={journey.skillsToGrow}
                empty="Toutes les compétences ouvertes sont déjà au plus haut niveau constaté."
              />
            </>
          )}
        </section>

        <section className="journey-block">
          <h2>Mes réalisations</h2>
          {journey.badges.length === 0 ? (
            <p className="muted">Les réalisations apparaissent après un quiz, un exercice ou une formation terminée.</p>
          ) : (
            <ul className="realization-list">
              {journey.badges.slice(0, 5).map((b) => (
                <li key={b.userBadgeId}>
                  <i className={`fas ${b.icon}`} aria-hidden="true" />
                  <div>
                    <strong>{b.title}</strong>
                    <p className="muted">{b.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <Link href="/espace" className="inline-link">
            Voir le portefeuille
          </Link>
        </section>

        <section className="journey-block">
          <h2>Défis disponibles</h2>
          {journey.challenges.length === 0 ? (
            <p className="muted">Les défis reprennent les quiz et exercices déjà présents dans vos parcours.</p>
          ) : (
            <ul className="challenge-list">
              {journey.challenges.map((ch) => (
                <li key={ch.id}>
                  <Link href={ch.lessonId ? `/player/${ch.courseId}` : `/player/${ch.courseId}`}>
                    {ch.title}
                  </Link>
                  <p className="muted">{ch.workplace_context}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="journey-block">
          <h2>Livrables</h2>
          {journey.deliverables.length === 0 ? (
            <p className="muted">Les livrables (cas terminés, attestations, réalisations) s&apos;ajoutent ici au fil du parcours.</p>
          ) : (
            <ul className="challenge-list">
              {journey.deliverables.map((d) => (
                <li key={`${d.href}-${d.title}`}>
                  <Link href={d.href}>{d.title}</Link>
                  <p className="muted">{d.detail}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {revisionOn && journey.reviews.length > 0 && (
        <section className="journey-block" style={{ marginTop: 24 }}>
          <h2>Révisions proposées</h2>
          <p className="muted" style={{ marginBottom: 12 }}>
            Suggestions facultatives, à partir de scores plus faibles. Vous n&apos;êtes pas en retard.
          </p>
          <ul className="challenge-list">
            {journey.reviews.map((r) => (
              <li key={r.courseId}>
                <Link href={`/player/${r.courseId}`}>{r.courseTitle}</Link>
                <p className="muted">{r.message}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="journey-block" style={{ marginTop: 24 }}>
        <h2>Mon parcours</h2>
        {journey.inProgress.length === 0 && journey.completed.length === 0 ? (
          <p className="muted">
            Aucune formation commencée.{" "}
            <Link href="/catalogue" className="inline-link">
              Parcourir le catalogue
            </Link>
          </p>
        ) : (
          <div className="cards-grid">
            {journey.inProgress.map((e) => (
              <Link key={e.course.id} href={`/player/${e.course.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "var(--shadow)" }}>
                  <div style={{ height: 88, background: e.course.gradient || "linear-gradient(135deg, #4f46e5, #06b6d4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className={`fas ${e.course.icon || "fa-book"}`} style={{ fontSize: "2rem", color: "rgba(255,255,255,0.35)" }} />
                  </div>
                  <div style={{ padding: 16 }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: 10 }}>{e.course.title}</h3>
                    <div style={{ height: 8, background: "var(--border)", borderRadius: 10, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${e.progress}%`, background: "var(--primary)", borderRadius: 10 }} />
                    </div>
                    <p className="muted" style={{ marginTop: 8 }}>{Math.round(e.progress)} %</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

const statCard: React.CSSProperties = {
  background: "var(--bg-card)",
  borderRadius: "var(--radius)",
  padding: 24,
  boxShadow: "var(--shadow)",
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

const primaryBtn: React.CSSProperties = {
  padding: "10px 20px",
  borderRadius: "var(--radius-sm)",
  background: "var(--primary)",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "0.9rem",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  marginTop: 12,
};

const secondaryBtn: React.CSSProperties = {
  ...primaryBtn,
  background: "var(--bg-card)",
  color: "var(--text)",
  border: "1px solid var(--border)",
  marginTop: 0,
};

import { masteryLabel } from "@/lib/octalysis/mastery";

export type SkillListItem = {
  id: string;
  title: string;
  mastery: number;
  workplace_application?: string;
  courseTitle?: string;
};

export default function SkillList({
  skills,
  empty = "Aucune compétence validée pour l'instant. Un quiz réussi, un exercice SQL ou un défi explicite est nécessaire — ouvrir une leçon ne suffit pas.",
}: {
  skills: SkillListItem[];
  empty?: string;
}) {
  if (skills.length === 0) {
    return <p className="muted">{empty}</p>;
  }
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <li key={skill.id} className="skill-chip">
          <span className="skill-chip-title">{skill.title}</span>
          <span className="skill-chip-level">{masteryLabel(skill.mastery)}</span>
          {skill.courseTitle && <span className="skill-chip-meta">{skill.courseTitle}</span>}
          {skill.workplace_application && (
            <span className="skill-chip-meta">{skill.workplace_application}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

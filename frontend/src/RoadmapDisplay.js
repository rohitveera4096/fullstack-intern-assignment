import React from "react";

export default function RoadmapDisplay({ roadmap }) {
  if (!roadmap || roadmap.length === 0) {
    return <p className="muted">No roadmap available.</p>;
  }
//making roadmap display
  return (
    <div>
      {roadmap.map((phase) => (
        <div key={phase.phase} className="phase">
          <h3>Phase {phase.phase}: {phase.title}</h3>
          <ul>
            {phase.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

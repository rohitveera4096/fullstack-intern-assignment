import React, { useState } from 'react';
import SkillGapForm from './SkillGapForm';
import RoadmapDisplay from './RoadmapDisplay';
import NewsList from './NewsList';
import './App.css';

export default function App() {
  const [skillResult, setSkillResult] = useState(null);
  const [roadmap, setRoadmap] = useState(null);

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>Dashboard</h1>
          <p className="muted">Provide your role and skills to get the skill gap, roadmap, and news.</p>
        </div>
      </header>

      <main className="dashboard">
        <section className="left card">
          <h2>Skill Gap</h2>
          <SkillGapForm setSkillResult={setSkillResult} setRoadmap={setRoadmap} /> 
          <div className="result-box">
            <h3>Result</h3>
            {skillResult ? (
              <pre className="json-output">{JSON.stringify(skillResult, null, 2)}</pre>
            ) : (
              <div className="muted">No result yet — submit the form above.</div>
            )}
          </div>
        </section>

        <aside className="right">
          <div className="card">
            <h2>Career Roadmap</h2>
            <RoadmapDisplay roadmap={roadmap} />
          </div>
        </aside>

        <section className="bottom card">
          <h2>Latest Tech News</h2>
          <NewsList />
        </section>
      </main>
    </div>
  );
}

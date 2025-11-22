import React, { useState } from 'react';

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000";

export default function SkillGapForm({ setSkillResult, setRoadmap }) {
  const [role, setRole] = useState('');
  const [skills, setSkills] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (!role.trim()) {
      setError('Please enter a target role.');
      return;
    }

    const currentSkills = skills
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    setLoading(true);

    try {
      // Skill Gap API
      const res1 = await fetch(`${API_BASE}/api/skill-gap`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetRole: role, currentSkills })
      });
      if (!res1.ok) throw new Error("Skill-gap API failed");

      const data1 = await res1.json();
      setSkillResult(data1);

      // Roadmap API
      const res2 = await fetch(`${API_BASE}/api/roadmap`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role })
      });
      const data2 = await res2.json();
      setRoadmap(data2.roadmap || []);

    } catch (err) {
      console.error(err);
      setError("Failed to fetch backend API");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form" aria-live="polite">

      <div className="col">
        <input
          type="text"
          placeholder="Target Role (e.g. Frontend Developer)"
          value={role}
          onChange={e => setRole(e.target.value)}
        />
      </div>

      <div className="col">
        <input
          type="text"
          placeholder="Your Skills (comma separated)"
          value={skills}
          onChange={e => setSkills(e.target.value)}
        />
      </div>

      <div className="actions">
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {error && (
        <div style={{ color: "#b91c1c", marginTop: "8px" }}>{error}</div>
      )}
    </form>
  );
}

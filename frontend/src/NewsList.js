import React, { useEffect, useState } from "react";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000";

// Helper to format time ago
function timeAgo(unixSeconds) {
  if (!unixSeconds) return 'N/A';
  const secs = Math.floor(Date.now() / 1000) - unixSeconds;
  if (secs < 60) return `${secs}s ago`;
  if (secs < 3600) return `${Math.floor(secs / 60)}m ago`;
  if (secs < 86400) return `${Math.floor(secs / 3600)}h ago`;
  return `${Math.floor(secs / 86400)}d ago`;
}

export default function NewsList() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchNews() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/api/news`); // backend route
        const json = await res.json();
        if (mounted) setStories(json.stories || []);
      } catch (err) {
        console.error("Failed to fetch news:", err);
        if (mounted) setStories([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchNews();
    return () => { mounted = false; };
  }, []);

  if (loading) return <div className="muted">Loading news...</div>;
  if (!stories.length) return <div className="muted">No news available.</div>;

  return (
    <div className="news-wrapper">
      <ul className="news-list">
        {stories.map(s => (
          <li key={s.id} className="news-item card-sm">
            <a className="news-title" href={s.url || '#'} target="_blank" rel="noreferrer">
              {s.title || 'Untitled'}
            </a>

            <div className="news-meta"> 
              <div><strong>URL:</strong> {s.url ? <a href={s.url} target="_blank" rel="noreferrer">{s.url}</a> : <span className="muted">N/A</span>}</div>
              <div><strong>Score:</strong> {s.score ?? 'N/A'}</div>
              <div><strong>Time:</strong> {s.time ? timeAgo(s.time) : 'N/A'}</div>
              <div><strong>Type:</strong> {s.type ?? 'N/A'}</div>
              <div><strong>By:</strong> {s.by ?? 'N/A'}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

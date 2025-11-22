const express = require('express');
const router = express.Router();
const axios = require('axios'); // for making HTTP requests

const HN_BASE = 'https://hacker-news.firebaseio.com/v0'; //

async function fetchStory(id) {
  const res = await axios.get(`${HN_BASE}/item/${id}.json`);
  return res.data;
}

router.get('/', async (req, res) => {
  try {
    const topRes = await axios.get(`${HN_BASE}/topstories.json`);
    const ids = topRes.data.slice(0, 10); // fetch 10 ids and then picking 5 valids
    const stories = [];
    for (const id of ids) {
      try {
        const s = await fetchStory(id);
        if (s && s.url) stories.push({ id: s.id, title: s.title, url: s.url, by: s.by, score: s.score, time: s.time, type: s.type });
        if (stories.length >= 5) break;
      } catch (e) {
        // skip the failed fetches
      }
    }
    res.json({ success: true, stories });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: "Failed to fetch Hacker News" });
  }
});

module.exports = router;

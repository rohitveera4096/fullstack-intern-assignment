const express = require('express');
const router = express.Router();

// Predefined role for roadmaps
const roadmaps = {
  "Frontend Developer": [
    { phase: 1, title: "Core HTML/CSS/JS", items: ["Semantic HTML","Responsive CSS","Vanilla JS"] },
    { phase: 2, title: "Frameworks & Tooling", items: ["React", "State Management", "Build Tools"] },
    { phase: 3, title: "Advanced & Interview Prep", items: ["Performance", "Testing", "System Design"] }
  ],
  "Backend Developer": [
    { phase: 1, title: "Node + Express", items: ["REST APIs","Middleware","Routing"] },
    { phase: 2, title: "Databases & Auth", items: ["SQL/NoSQL","JWT","OAuth"] },
    { phase: 3, title: "Scale & Security", items: ["Caching","Testing","Deployment"] }
  ],
  "frontend developer": [
    { phase: 1, title: "Core HTML/CSS/JS", items: ["Semantic HTML","Responsive CSS","Vanilla JS"] },
    { phase: 2, title: "Frameworks & Tooling", items: ["React", "State Management", "Build Tools"] },
    { phase: 3, title: "Advanced & Interview Prep", items: ["Performance", "Testing", "System Design"] }
  ],
  "backend developer": [
    { phase: 1, title: "Node + Express", items: ["REST APIs","Middleware","Routing"] },
    { phase: 2, title: "Databases & Auth", items: ["SQL/NoSQL","JWT","OAuth"] },
    { phase: 3, title: "Scale & Security", items: ["Caching","Testing","Deployment"] }
  ]
};

//checking purpose
router.get('/', (req, res) => {
  res.json({ message: "roadmap API working" });
});

router.post('/', (req, res) => {
  const { role } = req.body;
  if (!role) return res.status(400).json({ error: "role required" });
  const roadmap = roadmaps[role] || [
    { phase:1, title:"Basics", items:["Get fundamentals"] },// default roadmap if role not found
    { phase:2, title:"Intermediate", items:["Build projects"] },
    { phase:3, title:"Advanced", items:["Optimization & interviews"] }
  ];
  res.json({ role, roadmap });
});

module.exports = router;

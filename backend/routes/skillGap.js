const express = require('express');
const router = express.Router();

// Predefined role for required skills
const roles = {
  "Frontend Developer": ["HTML", "CSS", "JavaScript", "React", "Git"],
  "Backend Developer": ["Java", "Spring Boot", "SQL", "APIs", "Git"],
  "frontend developer": ["HTML", "CSS", "JavaScript", "React", "Git"],
  "backend developer": ["Java", "Spring Boot", "SQL", "APIs", "Git"]
};

//checking purpose
router.get('/', (req, res) => {
  res.json({ message: 'Skill Gap API working' });
});

router.post('/', (req, res) => {
  const { targetRole, currentSkills } = req.body || {};

  if (!targetRole) {
    return res.status(400).json({ error: 'targetRole is required' });
  }

  const required = roles[targetRole];
  if (!required) {
    return res.status(400).json({ error: 'Unknown role' });
  }

  const current = Array.isArray(currentSkills) ? currentSkills.map(s => s.toLowerCase()) : [];

  const requiredLower = required.map(s=> s.toLowerCase());

  // Case insenstive for matched and missing
// Matched skills
  const matchedSkills = required.filter((skill, i) =>
    current.includes(requiredLower[i])
  );
//  Missing skills
  const missingSkills = required.filter((skill, i) =>
    !current.includes(requiredLower[i])
  );

// Recommendations
  const recommendations = [missingSkills.length 
  ? `Start learning ${missingSkills.join(", ")} — you will become a master!` 
  : "You already mastered all required skills!"];

// Suggested learning order
  const suggestedLearningOrder = [...missingSkills];

  res.json({
    success: true,
    data: {
      targetRole,
      matchedSkills,
      missingSkills,
      recommendations,
      suggestedLearningOrder
    }
  });
});

module.exports = router;

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

//read json data from incoming requests
app.use(express.json());
app.use(cors());

// Routes
const skillGapRoute = require('./routes/skillGap');
app.use('/api/skill-gap', skillGapRoute);

const roadmapRoute = require('./routes/roadmap');
app.use('/api/roadmap', roadmapRoute);

const newsRouter = require('./routes/news');
app.use('/api/news', newsRouter);

app.get('/', (req, res) => {
  res.send("Backend Running");
});

// Starting the server

app.listen(PORT, () => console.log("Server running on " + PORT));
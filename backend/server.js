const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

//read json data from incoming requests
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://fullstack-intern-assignment-bice.vercel.app"
  ],
  methods: "GET,POST",
  credentials: true
}));

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

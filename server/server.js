require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Assignment Schema
const assignmentSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  team: String,
  shift: String,
  roles: [{
    roleName: String,
    assignedTo: String
  }]
});
const Assignment = mongoose.model('Assignment', assignmentSchema);

// API Endpoints
app.post('/api/assignments', async (req, res) => {
  try {
    const newAssignment = new Assignment(req.body);
    await newAssignment.save();
    res.status(201).json(newAssignment);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
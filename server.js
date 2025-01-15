import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/search', async (req, res) => {
  const { query } = req.body;
  try {
    const response = await fetch(`http://localhost:8777/search?query=${encodeURIComponent(query)}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error querying the Flask API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

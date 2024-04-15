import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser"
import cors from "cors"

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/bike-rental', { useNewUrlParser: true, useUnifiedTopology: true });
const Datetime = mongoose.model('Datetime', new mongoose.Schema({ 
  pdate: String,
  ptime: String,
  ddate: String,
  dtime: String,
}));

app.put('/api/datetime/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDatetime = await Datetime.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedDatetime);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update datetime.' });
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

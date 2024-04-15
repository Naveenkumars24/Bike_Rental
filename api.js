// const express = require('express');
import express from 'express';
// const mongoose = require('mongoose');  
import mongoose from 'mongoose';
const app = express();
const port = 3000;
// const cors = require('cors');
import cors from 'cors'
app.use(cors());

mongoose.connect('mongodb://localhost:27017/bike-rental');

const datetimeSchema = new mongoose.Schema({ 
  pdate: String,
  ptime: String,
  ddate: String,
  dtime: String,
});
const userDetailsSchema = new mongoose.Schema({ 
  name: String,
  mobile: String,
  email: String,
});

const datetime = mongoose.model('datetime', datetimeSchema);
const userdetails = mongoose.model('userdetails', userDetailsSchema);

app.use(express.json());
app.use(express.static('public'));

app.get('/api/datetime', async (req, res) => {
  const Datetime = await datetime.find();
  res.json(Datetime);
});

app.post('/api/userdetails', async (req, res) => {
  const newUser = new userdetails(req.body);
  await newUser.save();
  res.status(201).json(newUser);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// app.post('/api/expenses', async (req, res) => {
//   const newExpense = new Expense(req.body);
//   await newExpense.save();
//   res.status(201).json(newExpense);
// });


// app.delete('/api/expenses/:id', async (req, res) => {
//   const { id } = req.params;
//   await Expense.findByIdAndDelete(id);
//   res.sendStatus(204);
// });


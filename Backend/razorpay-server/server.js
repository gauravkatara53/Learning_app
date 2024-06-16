const express = require("express");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const razorpay = new Razorpay({
  key_id: "YOUR_KEY_ID",
  key_secret: "YOUR_KEY_SECRET",
});

app.post("/create-order", async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: `order_rcptid_${Math.floor(Math.random() * 1000)}`,
  };
  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Booking API is live 🚀");
});

app.post("/book", (req, res) => {
  const { name, service, datetime } = req.body;
  console.log("Booking received:", req.body);
  res.json({
    message: `✅ Appointment booked for ${name} for a ${service} on ${datetime}. See you soon!`
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require("express");
const cors = require("cors");
const app = express();
const { data } = require("./sampledata");

app.use(cors({ credentials: true, origin: true }));

app.get("/getData", async (req, res) => {
  res.json(data);
});

const port = 5000;
app.listen(port, () => console.log(`server started on ${port}`));

const express = require('express')
const app = express();
const port = 8000;
const cors = require('cors')

require("./db/connection");

app.use(express.json());
app.use(cors());

app.use("/api" , require("./routes/Service"));
app.use("/api" , require("./routes/Query"));

app.listen(port , () => {
    console.log(`Listening to port ${port}`);
})
const mongoose = require('mongoose')

// mongoose.connect("mongodb://127.0.0.1:27017/revitalPhysio").then(() => {
mongoose.connect("mongodb+srv://sachin03nic:sachin03nic@revitalphysio.7usockb.mongodb.net/?retryWrites=true&w=majority&appName=RevitalPhysio").then(() => {
    console.log("Connected to backend Successfully!!");
}).catch((err) => {
    console.log("Failed to connect");
})
const express = require("express");
const { connectToMongoDB } = require("./connect");
const path = require("path");


const app = express();
const PORT = 3000;


const userRoute = require("./routes/user");


//connection to DataBase
connectToMongoDB("mongodb://127.0.0.1:27017/Messenger")
.then(() => {
    console.log("MongoDb Connected");
})


//Ejs file
app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


//routes
app.use("/chat" , userRoute);




app.listen(PORT , () => {
    console.log(`Server Started at ${PORT}`);
})
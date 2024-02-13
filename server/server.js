import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Welcome'); 
})

app.use('/api/auth', authRoutes);
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is listening on http://localhost:${PORT}`)
});
import express from "express";
import { ENV } from "./config/env.js";

const app = express();
const PORT = ENV.PORT

app.get("/api/health", (req, res) => {
    res.status(200).json({ success: "ok" });
});

app.listen(5001, () => {
    console.log(`Server is running on port ${PORT}`);
})
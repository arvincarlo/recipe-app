import express from "express";
import { ENV } from "./config/env.js";
import {db} from "./config/db.js";
import { favoritesTable } from "./db/schema.js";

const app = express();
const PORT = ENV.PORT

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.status(200).json({ success: "ok" });
});

app.post("/api/favorites", async (req, res) => {
    try {
        const { userId, recipeId, title, image, cookTime, servings } = req.body;

        if (!userId || !recipeId || !title) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        const newFavorite = await db.insert(favoritesTable).values({
            userId,
            recipeId,
            title,
            image,
            cookTime,
            servings
        }).returning();

        res.status(201).json(newFavorite[0])
    } catch (error) {
        console.error("Error creating favorite:", error);
        res.status(500).json({ error: "Internal Server Error" });
        
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
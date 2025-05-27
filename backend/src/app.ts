import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import triviaRouter from "./routes/triviaRoute";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", triviaRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

import express from "express";
import cors from "cors";
import { user } from "./components";
import { prod } from "./components";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", user);
app.use("/products", prod);

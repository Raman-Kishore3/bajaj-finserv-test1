import express from "express";
import fetch from "node-fetch";
import bfhlHandeler from "../api/bfhl.js";

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.post("bfhl", bfhlHandeler);
app.listen(3000, () => console.log("Local server on https://localhost:3000"));

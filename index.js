import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 3000;

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log("New client connected");

    
    ws.send("HIIII!!");

    ws.on("message", (data) => {
        console.log('Data received from client:', data.toString());
        ws.send(`Server received: ${data}`);
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

import { httpServer } from "./src/http_server/index";
import { mouse } from "@nut-tree/nut-js";
import { WebSocketServer } from 'ws';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const WS_PORT = 8000;
const ws = new WebSocketServer({port: WS_PORT}, () => {`Start WS server on the ${HTTP_PORT} port!`});

ws.on('connection', async (ws, req) => {
    
});
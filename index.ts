import { httpServer } from "./src/http_server/index";
import { WebSocketServer } from 'ws';
import commandsHandler from './src/handler';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const WS_PORT = 8080;
const ws = new WebSocketServer({port: WS_PORT}, () => {console.log(`Start WS server on the ${WS_PORT} port!`)});

ws.on('connection', async (ws, req) => {
    await commandsHandler( ws );
});
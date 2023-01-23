import { mouseUp, mouseDown, mouseLeft, mouseRight, getMouseCoordinates } from "./websocket_commands/navigationOverXY";
import { createWebSocketStream } from "ws"
import { commandsList } from "./utils/consts";
import { drawCircle, drawRectangle, drawSquare } from "./websocket_commands/drawing";
import { printScreen } from "./websocket_commands/printScreen";

const commandsHandler = async ( ws ) => {
  const webSocketStream = createWebSocketStream( ws, 
  { 
    encoding:'utf8',
    decodeStrings: false,
  });

  webSocketStream.on( 'data', async ( message ) => {
    const [ cmd , ...args ] = message.split(' ');
    switch ( cmd ) {
      case commandsList.UP: {
        await mouseUp( args );  
        webSocketStream.write( cmd );
        break;
      } 
      case commandsList.DOWN: {
        await mouseDown( args );  
        webSocketStream.write( cmd );
        break;
      } 
      case commandsList.LEFT: {
        await mouseLeft( args );  
        webSocketStream.write( cmd );
        break;
      } 
      case commandsList.RIGHT: {
        await mouseRight( args );  
        webSocketStream.write( cmd );
        break;
      } 
      case commandsList.GET_POSITION: {
        const { x, y } = await getMouseCoordinates();  
        webSocketStream.write( `${cmd} ${x},${y}` );
        break;
      } 
      case commandsList.DRAW_CIRCLE: {
        await drawCircle( args );
        webSocketStream.write( cmd );
        break;
      }
      case commandsList.DRAW_SQUARE: {
        await drawSquare( args );
        webSocketStream.write( cmd );
        break;
      }
      case commandsList.DRAW_RECTANGLE: {
        await drawRectangle( args );
        webSocketStream.write( cmd );
        break;
      }
      case commandsList.PRINT_SCREEN: {
				const string = await printScreen();
				webSocketStream.write(`${cmd} ${string}`);
				break;
      }
    }
  });
}


export default commandsHandler;

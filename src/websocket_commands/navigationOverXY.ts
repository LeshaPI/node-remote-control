import { mouse, up, down, left, right } from '@nut-tree/nut-js';

export const mouseUp = async ( px ) => {
    await mouse.move(up( Number(px) ));
};

export const mouseDown = async ( px ) => {
    await mouse.move(down( Number(px) ));
};

export const mouseLeft = async ( px ) => {
    await mouse.move(left( Number(px) ));
};

export const mouseRight = async ( px ) => {
    await mouse.move(right( Number(px) ));
};

export const getMouseCoordinates = async () => {
    return await mouse.getPosition();
};

import { mouse, left, down, right, up } from "@nut-tree/nut-js"

export const drawCircle =  async( radius ) => {
    radius = Number(radius);
    const { x: posX, y: posY } = await mouse.getPosition();
    
    const circle = [];
    for(let i = 0; i < 360; i++) {
        const radians = i * Math.PI / 180;
		const x = radius * Math.cos(radians) + posX - radius;
		const y = radius * Math.sin(radians) + posY;

        circle.push({ x, y });
    }
    await mouse.drag( circle );
}

export const drawSquare = async ( px ) => {
    px = Number(px);
    await mouse.drag(left(px));
    await mouse.drag(down(px));
    await mouse.drag(right(px));
    await mouse.drag(up(px));
}
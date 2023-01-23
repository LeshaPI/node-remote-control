import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp/es';

export const printScreen = async () => {
	const { x, y } = await mouse.getPosition();
	const reg = new Region(x - 100, y - 100, 200, 200);
	await screen.highlight(reg);

	const bgr = await screen.grabRegion(reg);
	const rgb = await bgr.toRGB();
	const image = new Jimp({ 
        data: rgb.data, 
        width: rgb.width, 
        height: rgb.height
    });

	const base64String = await image.getBase64Async(Jimp.MIME_PNG);
	return base64String.replace('data:image/png;base64,', '');
};

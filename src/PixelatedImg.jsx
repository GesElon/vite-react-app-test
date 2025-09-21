import { useEffect, useRef, useState } from "react";
import { encode, decode } from "blurhash";
import { Blurhash } from "react-blurhash";

import myImage from "./assets/images/blueish-valley.jpg";

const BLUR_HASH_WIDTH = 32;
const BLUR_HASH_HEIGHT = 32;

function printImageBlurHash(imgSrc, newWidth, newHeight) {
    const canvas = document.createElement('canvas');
    canvas.width = newWidth;
    canvas.height = newHeight;

    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;

    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
        canvas.width = 32;
        canvas.height = 32;

        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        const blurHashString = encode(imageData.data, imageData.width, imageData.height, 4, 4)
        console.log(blurHashString)

        return blurHashString
    }
}

function PixelatedImg() {
    const canvasRef = useRef();
    
    useEffect(() => {
        const image = new Image();
        image.onload = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = false

            const imageWidth = image.width;
            const imageHeight = image.height;

            const maxImageDim = Math.min(imageWidth, imageHeight);
            canvas.width = 64;
            canvas.height = 64;

            const scaledWidth = Math.floor(imageWidth / maxImageDim * canvas.width);
            const scaledHeight = Math.floor(imageHeight / maxImageDim * canvas.height);

            console.log(scaledWidth, scaledHeight)

            const dimToAdjust = maxImageDim === imageWidth ? 'height' : 'width';
            if (dimToAdjust === 'height') {
                const heightOffset = -Math.floor((scaledHeight - scaledWidth) / 2);
                ctx.drawImage(image, 0, heightOffset, scaledWidth, scaledHeight);
            } else {
                const widthOffset = -Math.floor((scaledWidth - scaledHeight) / 2);
                ctx.drawImage(image, widthOffset, 0, scaledWidth, scaledHeight);
            }

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            console.log(encode(imageData.data, imageData.width, imageData.height, 4, 4))
        }
        image.src = myImage;
    }, []);

    return (<>
        <canvas style={{width: '400px', height: '400px'}} ref={canvasRef}></canvas>
    </>);
}

export default PixelatedImg
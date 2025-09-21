import { Blurhash } from "react-blurhash";
import { Suspense, lazy, useRef, useEffect, useState } from "react";

const BLUR_HASH_WIDTH = 32;
const BLUR_HASH_HEIGHT = 32;

function getImageUrl(name) {
    // Assuming images are in a folder like 'src/assets/images/'
    // Adjust the path according to your project structure
    return new URL(`./assets/images/${name}`, import.meta.url).href;
}

function LazyImage({ blurhash, src, width, height }) {
    const blurhashRef = useRef();
    const imageRef = useRef();

    useEffect(() => {
        const img = new Image();
        imageRef.current.ontransitionend = () => {
            blurhashRef.current.remove();
            imageRef.current.ontransitionend = null;
        }
        img.onload = () => {
            console.log('loaded')
            imageRef.current.classList.add("loaded");
            imageRef.current.src = img.src;
        }
        img.src = getImageUrl(src);
    }, []);

    return (
        <div className="lazy-image" style={{width: `${width}px`, height: `${height}px`}}>
            <div ref={blurhashRef}>
                <Blurhash
                    className="loading-gradient"
                    hash={blurhash}
                    width={width}
                    height={height}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>
            <img ref={imageRef} width={width} height={height} />
        </div>
    );
}

export default LazyImage;
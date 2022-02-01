import anime from "../../public/assets/pictures/anime.jpg";
import esacpe from "../../public/assets/pictures/escape.jpg";
import grad from "../../public/assets/pictures/grad.jpg";

import { RotateInterface } from "../rotating-images/RotatingImage";

export const allImages: RotateInterface[] = [
    {
        xRange: ["50%", "100%", "50%", "0%", "75%", "50%"],
        yRange: ["50%", "25%", "100%", "75%", "100%", "50%"],
        size: 150,
        time: 15,
        rotateRange: [0, 145, 35, 0],
        src: anime,
        className: `h-[300px] w-[300px] left-0 cursor-pointer`,
        key: "rot-1"
    },
    {
        xRange: ["50%", "100%", "50%", "0%", "75%", "50%"],
        yRange: ["50%", "25%", "100%", "75%", "100%", "50%"],
        size: 150,
        time: 15,
        rotateRange: [0, 145, 35, 0],
        src: grad,
        className: `h-[300px] w-[300px] left-50 cursor-pointer`,
        key: "rot-2",
    },
    {
        xRange: ["50%", "100%", "50%", "0%", "75%", "50%"],
        yRange: ["50%", "25%", "100%", "75%", "100%", "50%"],
        size: 150,
        time: 15,
        rotateRange: [0, 145, 35, 0],
        src: esacpe,
        className: `h-[300px] w-[300px] top-0 left-0 cursor-pointer`,
        key: "rot-3",
    },
];

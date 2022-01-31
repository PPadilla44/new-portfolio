import RotatingImage from "../rotating-images/RotatingImage"
import anime from "../../public/assets/pictures/anime.jpg"
import esacpe from "../../public/assets/pictures/escape.jpg"
import grad from "../../public/assets/pictures/grad.jpg"


export interface RotateIterface {
    time: number;
    xRange: string[];
    yRange: string[];
    rotateRange: number[];
    size: number;
    src: string | StaticImageData;
    className?: string | undefined
}

export const allIngredients = [
    {
        xRange: ["50%", "100%", "50%", "0%", "75%", "50%"],
        yRange: ["50%", "25%", "100%", "75%", "100%", "50%"],
        size: 150,
        time: 15,
        rotateRange: [0, 145, 35, 0],
        src: anime,
        className: `h-[300px] w-[300px] left-0 cursor-pointer`,
    },
    {
        xRange: ["50%", "100%", "50%", "0%", "75%", "50%"],
        yRange: ["50%", "25%", "100%", "75%", "100%", "50%"],
        size: 150,
        time: 15,
        rotateRange: [0, 145, 35, 0],
        src: grad,
        className: `h-[300px] w-[300px] left-50 cursor-pointer`
    },
    {
        xRange: ["50%", "100%", "50%", "0%", "75%", "50%"],
        yRange: ["50%", "25%", "100%", "75%", "100%", "50%"],
        size: 150,
        time: 15,
        rotateRange: [0, 145, 35, 0],
        src: esacpe,
        className: `h-[300px] w-[300px] top-0 left-0 cursor-pointer`
    },
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

export function getNextIngredient(
    ingredients: RotateIterface[]
): RotateIterface | undefined {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
}
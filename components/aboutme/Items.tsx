import anime from "../../public/assets/pictures/anime.jpg";
import esacpe from "../../public/assets/pictures/escape.jpg";
import grad from "../../public/assets/pictures/grad.jpg";
import ME from "../../public/assets/pictures/ME.jpg";
import marathon from "../../public/assets/pictures/marathon.jpg";
import snow from "../../public/assets/pictures/snow.jpg";


import { RotateInterface } from "./rotating-images/RotatingImage";

export interface AboutMeItem {
    description: { title: string, paragraph: string }
    componentInfo: RotateInterface;
}

export const allImages: AboutMeItem[] = [
    {
        description: {
            title: "This is me!!!",
            paragraph:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam nullam blandit sed platea at viverra a, dignissim. Velit nullam viverra erat eget lacus, diam. Orci urna sed leo etiam nibh etiam. Semper sed quis dui enim quisque ac varius venenatis bibendum."
        },
        componentInfo: {
            xRange: ["50%", "0%", "50%", "75%", "100%", "50%"],
            yRange: ["50%", "50%", "0%", "75%", "100%", "50%"],
            size: 150,
            time: 18,
            rotateRange: [0, -45, 135, 0],
            src: ME,
            className: `right-0 top-12 h-[300px] w-[300px]`,
            key: "rot-1"
        },
    },
    {
        description: {
            title: "Graduation",
            paragraph: "this is for grad it is amazin"
        },
        componentInfo: {
            xRange: ["50%", "10%", "42%", "20%", "45%", "50%"],
            yRange: ["50%", "0%", "30%", "75%", "0%", "50%"],
            size: 150,
            time: 15,
            rotateRange: [0, 15, 305, 0],
            src: grad,
            className: `left-0 bottom-0  h-[300px] w-[300px]`,
            key: "rot-2",
        }
    },
    {
        description: {
            title: "Escape",
            paragraph: "We are justtryinh yo escape@@"
        },
        componentInfo: {
            xRange: ["50%", "100%", "90%", "80%", "75%", "50%"],
            yRange: ["50%", "25%", "0%", "75%", "0%", "50%"],
            size: 150,
            time: 16,
            rotateRange: [0, -75, -55, 0],
            src: esacpe,
            className: `top-12 left-0 h-[300px] w-[300px]`,
            key: "rot-4",
        }
    },
    {
        description: {
            title: "Anime",
            paragraph: "Anime is greate.."
        },
        componentInfo: {
            xRange: ["50%", "100%", "50%", "0%", "75%", "50%"],
            yRange: ["50%", "25%", "100%", "75%", "100%", "50%"],
            size: 150,
            time: 24,
            rotateRange: [0, 145, 35, 0],
            src: anime,
            className: `left-0 h-[300px] w-[300px]`,
            key: "rot-5",
        },
    },
    {
        description: {
            title: "Half Marathon",
            paragraph: "I like to run who doesnt !"
        },
        componentInfo: {
            xRange: ["50%", "100%", "50%", "0%", "75%", "50%"],
            yRange: ["50%", "25%", "100%", "75%", "100%", "50%"],
            size: 150,
            time: 20,
            rotateRange: [0, -145, 35, 0],
            src: marathon,
            className: `bottom-0 right-0 h-[300px] w-[300px]`,
            key: "rot-6",
        }
    },
    {
        description: {
            title: "Snow",
            paragraph: "We nasddpihdnscps sSNO SNOW SNOW"
        },
        componentInfo: {
            xRange: ["50%", "50%", "60%", "40%", "75%", "50%"],
            yRange: ["50%", "5%", "0%", "45%", "70%", "50%"],
            size: 150,
            time: 15,
            rotateRange: [0, 145, 35, 0],
            src: snow,
            className: `right-0 h-[300px] w-[300px]`,
            key: "rot-7",
        }
    },
];

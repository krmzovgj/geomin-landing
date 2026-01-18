import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = 80; // adjust to your fixed header height in px
    const elementTop = section.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition = elementTop - headerHeight;

    window.scrollTo({
        top: scrollPosition,
        behavior: "smooth", // this gives smooth scrolling animation
    });
};

export const fadeUpBlur = {
    initial: {
        y: 80,
        opacity: 0,
        filter: "blur(20px)",
    },
    animate: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
    },
    transition: {
        type: "spring",
        duration: 0.5,
    },
};

export const fadeScaleBlur = {
    initial: {
        opacity: 0,
        scale: 0.9,
        filter: "blur(20px)",
    },
    animate: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
    },
    transition: {
        type: "spring",
        duration: 0.5,
    },
};

export const scaleIn = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
    },
    transition: {
        type: "spring",
        duration: 0.5,
    },
};

export const fadeUpBlurInView = {
    initial: {
        y: 80,
        opacity: 0,
        filter: "blur(20px) ",
    },
    whileInView: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
    },
    transition: {
        type: "spring",
        duration: 0.5,
    },
};

export const fadeScaleBlurInView = {
    initial: {
        opacity: 0,
        scale: 0.9,
        filter: "blur(20px)",
    },
    whileInView: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
    },
    transition: {
        type: "spring",
        duration: 0.5,
    },
};

export const scaleInView = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    whileInView: {
        scale: 1,
        opacity: 1,
    },
    transition: {
        type: "spring",
        duration: 0.5,
    },
};

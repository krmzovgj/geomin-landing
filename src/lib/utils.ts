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

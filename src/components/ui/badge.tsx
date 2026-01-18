import React from "react";

interface BadgeProps {
    title: string;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ title, className = "" }) => {
    const baseStyles =
        "bg-secondary text-foreground/70  flex justify-center items-center w-fit text-sm py-1 px-3 xl:font-bold rounded-full";

    return <div className={`${baseStyles} ${className}`}>{title}</div>;
};

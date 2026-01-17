import React from "react";

interface BadgeProps {
    title: string;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ title, className = "" }) => {
    const baseStyles =
        "bg-secondary text-foreground  flex justify-center items-center w-fit text-sm py-1 px-3 font-bold rounded-full";

    return <div className={`${baseStyles} ${className}`}>{title}</div>;
};

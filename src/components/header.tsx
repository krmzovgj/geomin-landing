import { AnimatePresence, motion } from "framer-motion";
import { Add, Call, HambergerMenu, Instagram } from "iconsax-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export const Header = () => {
    const [menuOpen, setmenuOpen] = useState(false);

    const toggleMenuOpen = () => setmenuOpen((prev) => !prev);
    const menuItems = [
        "Почетна",
        "Кој сме ние",
        "Проекти",
        "Услуги",
        "ИТ Сектор",
    ];

    const menuRef = useRef<HTMLDivElement>(null); // 1. Create a ref for the button
    const toggleBtnRef = useRef<HTMLDivElement>(null); // 1. Create a ref for the button

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                toggleBtnRef.current &&
                !toggleBtnRef.current.contains(event.target as Node) // 2. Check if the click is NOT the button
            ) {
                setmenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    useEffect(() => {
        if (menuOpen) {
            const originalStyle = window.getComputedStyle(
                document.body,
            ).overflow;
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [menuOpen]);
    return (
        <div className="z-50 fixed top-6 left-1/2 -translate-x-1/2 xl:w-2/3 w-[90%] flex flex-col items-center">
            {/* MAIN PILL - Always constant radius */}
            <div className="w-full pl-6 pr-3 py-3 md:pl-7 md:p-3 flex justify-between items-center bg-secondary/70 backdrop-blur-md border border-white/10 rounded-full z-60">
                <div className="flex flex-col justify-center">
                    <h3 className="md:text-3xl text-2xl tracking-tighter font-black">
                        <span className="text-[#66A786]">ГЕО</span>МИН
                    </h3>
                </div>

                {/* Desktop Nav */}
                <div className="md:flex hidden items-center gap-x-5">
                    {menuItems.map((item) => (
                        <p
                            key={item}
                            className="cursor-pointer hover:opacity-70 transition-opacity font-medium"
                        >
                            {item}
                        </p>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <Button className="md:flex hidden text-md px-8 bg-foreground text-background rounded-full">
                        Контактирај нѐ
                    </Button>

                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMenuOpen}
                        ref={toggleBtnRef}
                        className="flex md:hidden w-10 h-10 justify-center items-center rounded-full bg-foreground cursor-pointer"
                    >
                        <motion.div
                            key={menuOpen ? "close" : "open"}
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                            }}
                            transition={{ duration: 0.6, type: "spring" }}
                        >
                            {menuOpen ? (
                                <Add
                                    className="-rotate-45"
                                    size={30}
                                    color="#fff"
                                />
                            ) : (
                                <HambergerMenu size={22} color="#fff" />
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            filter: "blur(20px)",
                        }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                        transition={{
                            type: "spring",
                            duration: 0.4,
                        }}
                        className="fixed origin-center z-99 top-20 rounded-4xl place-self-center w-full bg-secondary/70 backdrop-blur-md border border-white/10 p-6  md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <motion.p
                                    key={item}
                                    className="text-2xl tracking-tight"
                                >
                                    {item}
                                </motion.p>
                            ))}

                            <div className="flex mt-5 flex-col gap-y-4">
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/geomin_pro/"
                                >
                                    <div className="flex items-center gap-x-2">
                                        <Instagram
                                            variant="Bold"
                                            size={20}
                                            color="#000"
                                        />
                                        <p className="text-foreground/60">
                                            @geomin_pro
                                        </p>
                                    </div>
                                </a>

                                <a target="_blank" href="tel:+389 75 203 522">
                                    <div className="flex items-center gap-x-2">
                                        <Call
                                            variant="Bold"
                                            size={20}
                                            color="#000"
                                        />
                                        <p className="text-foreground/60">
                                            +389 75 203 522
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

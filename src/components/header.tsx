import { homeTranslations } from "@/i18n/home";
import { fadeScaleBlur, scaleIn, scrollToSection } from "@/lib/utils";
import {
    InstagramLogoIcon,
    ListIcon,
    PhoneCallIcon,
    XIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export const Header = ({
    lang,
    setLang,
}: {
    lang: "mk" | "en";
    setLang: (l: "mk" | "en") => void;
}) => {
    const [menuOpen, setmenuOpen] = useState(false);

    const toggleMenuOpen = () => setmenuOpen((prev) => !prev);

    const menuRef = useRef<HTMLDivElement>(null);
    const toggleBtnRef = useRef<HTMLDivElement>(null);

    const t = homeTranslations[lang];

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
        <div className="z-50 fixed top-4 left-1/2 -translate-x-1/2 xl:w-2/3 w-[90%] flex flex-col items-center">
            {/* MAIN PILL - Always constant radius */}
            <div className="w-full pl-6 pr-3 py-3 md:pl-7 md:p-3 flex justify-between items-center bg-secondary/70 backdrop-blur-md border border-white/10 rounded-full z-60">
                <div className="flex flex-col justify-center">
                    <h3 className="md:text-3xl text-2xl tracking-tighter font-black">
                        <span className="text-[#66A786]">{t.geo}</span>
                        {t.min}
                    </h3>
                </div>

                {/* Desktop Nav */}
                <div className="md:flex hidden items-center gap-x-5">
                    {t.menuItems.map((item, i) => (
                        <p
                            onClick={() => scrollToSection(item.target)}
                            key={i}
                            className="cursor-pointer hover:opacity-70 transition-opacity font-medium"
                        >
                            {item.label}
                        </p>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        onClick={() => scrollToSection("contact")}
                        className="md:flex hidden text-md px-8 bg-foreground text-background rounded-full"
                    >
                        {t.contactUs}
                    </Button>

                    <Button
                        onClick={() => setLang(lang === "mk" ? "en" : "mk")}
                        className="lg:flex hidden pl-2 pr-4"
                        variant="ghost"
                        animate={false}
                    >
                        <AnimatePresence>
                            {lang === "en" ? (
                                <motion.img
                                    key="mk"
                                    src="/MK.svg"
                                    {...scaleIn}
                                    transition={{
                                        type: "spring",
                                        duration: 0.5,
                                    }}
                                    className="w-8 rounded-md"
                                    alt=""
                                />
                            ) : (
                                <motion.img
                                    key="gb"
                                    src="/GB.svg"
                                    {...scaleIn}
                                    transition={{
                                        type: "spring",
                                        duration: 0.5,
                                    }}
                                    className="w-8 rounded-md"
                                    alt=""
                                />
                            )}
                        </AnimatePresence>
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
                                <XIcon
                                    weight="regular"
                                    size={22}
                                    color="#fff"
                                />
                            ) : (
                                <ListIcon
                                    weight="regular"
                                    size={22}
                                    color="#fff"
                                />
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
                            scale: 0.6,
                            filter: "blur(20px)",
                        }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.6, filter: "blur(20px)" }}
                        transition={{
                            type: "spring",
                            duration: 0.4,
                        }}
                        className="fixed origin-center z-99 top-20 rounded-4xl place-self-center w-full bg-secondary/70 backdrop-blur-md border border-white/10 p-6  md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {t.menuItems.map((item, i) => (
                                <p
                                    onClick={() => {
                                        setmenuOpen(false);
                                        scrollToSection(item.target);
                                    }}
                                    key={i}
                                    className="text-2xl tracking-tight"
                                >
                                    {item.label}
                                </p>
                            ))}

                            <div className="w-fit">
                                <Button
                                    onClick={() => {
                                        setLang(lang === "mk" ? "en" : "mk");
                                        setmenuOpen(false);
                                    }}
                                    className="lg:hidden block place-self-start  p-0"
                                    variant="ghost"
                                    animate={false}
                                >
                                    <AnimatePresence>
                                        {lang === "en" ? (
                                            <motion.img
                                                key="mk"
                                                src="/MK.svg"
                                                {...fadeScaleBlur}
                                                transition={{
                                                    type: "spring",
                                                    duration: 0.5,
                                                }}
                                                className="w-8 rounded-md"
                                                alt=""
                                            />
                                        ) : (
                                            <motion.img
                                                key="gb"
                                                src="/GB.svg"
                                                {...fadeScaleBlur}
                                                transition={{
                                                    type: "spring",
                                                    duration: 0.5,
                                                }}
                                                className="w-8 rounded-md"
                                                alt=""
                                            />
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </div>

                            <div className="flex mt-5 flex-col gap-y-4">
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/geomin_pro/"
                                >
                                    <div className="flex items-center gap-x-2">
                                        <InstagramLogoIcon
                                            weight="duotone"
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
                                        <PhoneCallIcon
                                            weight="duotone"
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

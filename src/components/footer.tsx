import { scrollToSection } from "@/lib/utils";
import {
    AtIcon,
    InstagramLogoIcon,
    PhoneCallIcon,
} from "@phosphor-icons/react";

export const Footer = () => {
    return (
        <footer className="mt-20 lg:mt-32 ">
            <div className="mx-auto max-w-7xl py-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                {/* Left */}
                <div>
                    <h3 className="text-3xl mb-3 tracking-tighter font-black">
                        <span className="text-[#66A786]">ГЕО</span>МИН
                    </h3>
                    <div className="flex flex-col gap-1">
                        <p className=" font-medium text-foreground">
                            Геомин Про Консалтинг
                        </p>
                        <span className="text-sm text-foreground/60">
                            © {new Date().getFullYear()} Сите права се задржани
                        </span>
                    </div>
                </div>

                {/* Center */}
                <div>
                    <p className=" font-medium mb-3 text-foreground">
                        Брзи Линкови
                    </p>
                    <nav className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4  text-foreground/70">
                        <button
                            onClick={() => scrollToSection("whoweare")}
                            className="cursor-pointer hover:text-foreground transition"
                        >
                            Кој сме ние
                        </button>
                        <button
                            onClick={() => scrollToSection("services")}
                            className="cursor-pointer hover:text-foreground transition"
                        >
                            Услуги
                        </button>

                        <button
                            onClick={() => scrollToSection("itdep")}
                            className="cursor-pointer hover:text-foreground transition"
                        >
                            ИТ Сектор
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="cursor-pointer hover:text-foreground transition"
                        >
                            Контакт
                        </button>
                    </nav>
                </div>

                {/* Right */}
                <div>
                    <p className="mb-3 font-medium text-foreground">Контакт</p>
                    <div className="flex flex-col  items-start  gap-2  md:gap-4 text-sm">
                        <a
                            href="tel:+38978239880"
                            className="text-foreground/70 flex items-center gap-x-2  hover:text-foreground transition"
                        >
                            <PhoneCallIcon
                                weight="duotone"
                                size={20}
                                color="#000"
                            />
                            +389 78 239 880
                        </a>
                        <p className="text-foreground/70 flex items-center gap-x-1 hover:text-foreground transition">
                            <AtIcon weight="duotone" size={20} color="#000" />
                            geominpro@gmail.com
                        </p>

                        <a
                            target="_blank"
                            href="https://www.instagram.com/geomin_pro/"
                            className="text-foreground/70 flex items-center gap-x-1 hover:text-foreground transition"
                        >
                            <InstagramLogoIcon
                                weight="duotone"
                                size={20}
                                color="#000"
                            />
                            @geomin_pro
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

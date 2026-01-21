import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
    fadeScaleBlur,
    fadeScaleBlurInView,
    fadeUpBlur,
    fadeUpBlurInView,
    scaleInView,
    scrollToSection,
} from "@/lib/utils";
import {
    BrowsersIcon,
    CityIcon,
    DotsNineIcon,
    HardHatIcon,
    LightbulbIcon,
    PackageIcon,
    PhoneCallIcon,
    SealQuestionIcon,
    TreeStructureIcon,
    XCircleIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";

export const Home = () => {
    const services = [
        {
            icon: HardHatIcon,
            label: (
                <>
                    Дупчење и минирање во{" "}
                    <span className="block sm:inline">
                        рудници и каменоломи
                    </span>
                </>
            ),
            desc: "Ефикасно и безбедно минирање во усеци и масовно минирање при отварање на рудници и каменоломи.",
        },
        {
            icon: DotsNineIcon,
            label: "Инфраструктурни проекти",

            desc: "Дупчење и минирање при изградба на патишта, железници, брани, ветерници, нафтоводи, гасоводи и канално минирање.",
        },
        {
            icon: CityIcon,
            label: (
                <>
                    Специјално минирање во{" "}
                    <span className="block sm:inline">урбани средини</span>
                </>
            ),
            desc: "Прецизно и контролирано минирање со минимално влијание врз околината и инфраструктурата.",
        },
        {
            icon: LightbulbIcon,
            label: "Консултантски услуги и инженеринг",

            desc: "Стручни совети и поддршка од областа на рударството при планирање, проектирање и спроведување на рударски проекти и надзор во рударството.",
        },
    ];

    return (
        <div className="h-full">
            <div className="flex flex-col items-center">
                <Badge
                    className="text-[#66A786]"
                    title="ГЕОМИН ПРО КОНСАЛТИНГ"
                />

                <motion.h1
                    {...fadeUpBlur}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="lg:text-7xl mt-3 text-center text-4xl font-medium text-foreground"
                >
                    Mинирање, проектирање <br className="hidden lg:flex" />и
                    руднички надзор
                </motion.h1>
                <motion.p
                    {...fadeUpBlur}
                    transition={{
                        type: "spring",
                        duration: 0.5,
                        delay: 0.1,
                    }}
                    className="mx-5 lg:mx-0 text-foreground/60 mt-6 lg:mt-10 text-center lg:w-1/2"
                >
                    Нашиот тим има долгогодишно искуство во областа на дупчење,
                    минирање, <br className="hidden lg:flex" /> проектирање и
                    надзор во рударството
                </motion.p>

                <Button
                    variant="default"
                    onClick={() => scrollToSection("whoweare")}
                    className="mt-5"
                >
                    Дознај Повеќе
                </Button>

                <motion.div
                    {...fadeScaleBlur}
                    transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
                    className="mt-10 relative w-full p-2 rounded-4xl bg-secondary overflow-hidden"
                >
                    {/* Inner wrapper keeps the image inset */}
                    <motion.div className="shadow-sm overflow-hidden rounded-3xl w-full  lg:h-145">
                        <motion.img
                            src="/heroimg.avif"
                            loading="eager"
                            decoding="async"
                            className="w-full  rounded-3xl h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5, type: "spring" }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            <div
                id="whoweare"
                className="mt-10 lg:mt-40 pt-10 flex justify-start"
            >
                <div className="flex flex-col lg:flex-row items-start gap-x-20 justify-between">
                    <div className="">
                        <Badge className="text-[#66A786]" title="ГЕОМИН?" />
                        <motion.h1
                            {...fadeUpBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="flex items-center gap-x-3 lg:gap-x-5 lg:text-7xl mt-3 text-center text-4xl font-medium text-foreground"
                        >
                            Кои сме ние{" "}
                            <motion.span
                                {...scaleInView}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{
                                    type: "spring",
                                    duration: 0.5,
                                    delay: 0.1,
                                }}
                            >
                                <SealQuestionIcon
                                    className="flex lg:hidden rotate-12 size-10 lg:size-20"
                                    weight="duotone"
                                    color="#181818"
                                />
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            {...fadeUpBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className=" text-foreground/60 mt-6 lg:mt-10 "
                        >
                            Геомин Про Консалтинг е компанија која обезбедува
                            услуги за дупчење и минирање во рудници, каменоломи,
                            при изградба нa патишта, железници, брани,
                            ветерници, нафтоводи, гасоводи и канално минирање
                        </motion.p>

                        <motion.span
                            className="hidden lg:flex mt-10 w-fit"
                            {...scaleInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                            }}
                        >
                            <SealQuestionIcon
                                className="rotate-12 "
                                size={120}
                                weight="duotone"
                                color="#181818"
                            />
                        </motion.span>
                    </div>

                    <div className="mt-5 lg:mt-0 flex w-full relative flex-col gap-1">
                        <div className="z-20 w-3 h-14 rounded-full absolute flex justify-center left-15 top-1/3 -translate-y-1/2 bg-secondary/40 backdrop-blur-lg shadow-sm">
                            <XCircleIcon
                                weight="duotone"
                                size={16}
                                color="#FF8C00"
                                className="-top-0.5 relative"
                            />
                        </div>
                        <div className="z-20 w-3 h-14 rounded-full absolute flex justify-center right-15 top-1/3 -translate-y-1/2 bg-secondary/40 backdrop-blur-lg shadow-sm">
                            <XCircleIcon
                                weight="duotone"
                                size={16}
                                color="#FF8C00"
                                className="-top-0.5 relative"
                            />
                        </div>
                        <div className="z-20 w-3 h-14 rounded-full absolute flex justify-center left-15 top-2/3 -translate-y-1/2 bg-secondary/40 backdrop-blur-lg shadow-sm">
                            <XCircleIcon
                                weight="duotone"
                                size={16}
                                color="#FF8C00"
                                className="-top-0.5 relative"
                            />
                        </div>
                        <div className="z-20 w-3 h-14 rounded-full absolute flex justify-center right-15 top-2/3 -translate-y-1/2 bg-secondary/40 backdrop-blur-lg shadow-sm">
                            <XCircleIcon
                                weight="duotone"
                                size={16}
                                color="#FF8C00"
                                className="-top-0.5 relative"
                            />
                        </div>

                        <motion.div
                            {...fadeScaleBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 0.1,
                            }}
                            className="p-2 h-50  rounded-3xl bg-secondary"
                        >
                            <div className="w-full h-full shadow-sm bg-background overflow-hidden rounded-2xl">
                                <motion.img
                                    src="/about.avif"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full  rounded-2xl h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        duration: 0.5,
                                        type: "spring",
                                    }}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeScaleBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="p-2 h-50  rounded-3xl bg-secondary"
                        >
                            <div className="w-full h-full shadow-sm bg-background overflow-hidden rounded-2xl">
                                <motion.img
                                    src="/about2.avif"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full  rounded-2xl h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        duration: 0.5,
                                        type: "spring",
                                    }}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeScaleBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="p-2 h-50  rounded-3xl bg-secondary"
                        >
                            <div className="w-full h-full shadow-sm bg-background overflow-hidden rounded-2xl">
                                <motion.img
                                    src="/cta.avif"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full  rounded-2xl h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        duration: 0.5,
                                        type: "spring",
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div id="services" className="mt-10 lg:mt-40 pt-10">
                <Badge className="text-[#66A786]"  title="Како се разликуваме?" />

                <motion.h1
                    {...fadeUpBlurInView}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="mt-3 flex items-center gap-x-3 lg:gap-x-5 lg:text-7xl  text-center text-4xl font-medium text-foreground"
                >
                    Нашите услуги
                    <motion.span
                        {...fadeUpBlurInView}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                            type: "spring",
                            duration: 0.5,
                            delay: 0.1,
                        }}
                    >
                        <PackageIcon
                            className="rotate-12 size-10 lg:size-20"
                            weight="duotone"
                            color="#181818"
                        />
                    </motion.span>
                </motion.h1>

                <div className="mt-10 lg:mt-15 flex flex-col gap-8 lg:gap-20 lg:gap-y-15 lg:grid lg:grid-rows-2 lg:grid-cols-2 ">
                    {services.map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUpBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                            }}
                        >
                            <div className="flex items-center gap-x-4">
                                <div className="flex w-13 h-13 border-2 border-[#66A786] rounded-2xl bg-[#66A786]/10 justify-center items-center">
                                    <item.icon
                                        weight="duotone"
                                        color="#66A786"
                                        size={26}
                                    />
                                </div>
                                <h1 className="hidden lg:flex text-2xl text-foreground font-black">
                                    0{i + 1}
                                </h1>
                            </div>

                            <h1 className="mt-4 lg:mt-4 text-xl text-foreground">
                                {item.label}
                            </h1>
                            <p className="mt-1 md:w-3/4 text-foreground/60 ">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div
                id="itdep"
                className="mt-10 lg:mt-40 pt-10 flex flex-col justify-center items-center"
            >
                <Badge className="text-[#FF8C00]"  title="ИТ Сектор" />

                <motion.h1
                    {...fadeUpBlurInView}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="mt-3 flex items-center gap-x-3 lg:gap-x-5 lg:text-7xl  text-center text-4xl font-medium text-foreground"
                >
                    Дигитални Решенија
                </motion.h1>
                <motion.p
                    {...fadeUpBlurInView}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="text-center lg:w-2/3 text-foreground/60 mt-6 lg:mt-10 "
                >
                    Во нашиот ИТ сектор нудиме развој на практични{" "}
                    <br className="hidden md:flex" /> дигитални решенија
                </motion.p>

                <div className="mt-10 lg:mt-15 lg:gap-5 gap-4 flex flex-col">
                    <div className="flex-col lg:flex-row flex w-full justify-center items-center gap-4 lg:gap-5">
                        <motion.div
                            {...fadeScaleBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="lg:w-2/5 p-2 rounded-3xl bg-secondary"
                        >
                            <div className="rounded-2xl bg-background shadow-sm overflow-hidden relative p-6">
                                <h1 className="text-4xl font-black">01</h1>
                                <BrowsersIcon
                                    weight="duotone"
                                    size={120}
                                    color="#FF8C00"
                                    className="-top-8 -right-5 rotate-12 absolute"
                                />
                                <h2 className="text-xl mt-8">
                                    Развој на веб апликации
                                </h2>
                                <p className="mt-2 lg:w-4/4 text-foreground/60 text-sm">
                                    Веб апликации прилагодени на вашите потреби
                                    за интерно користење, платформи од различен
                                    тип, промотивни сајтови..
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeScaleBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="lg:w-2/5 p-2 rounded-3xl bg-secondary"
                        >
                            <div className="rounded-2xl bg-background shadow-sm overflow-hidden relative p-6">
                                <h1 className="text-4xl font-black">02</h1>
                                <TreeStructureIcon
                                    weight="duotone"
                                    size={120}
                                    color="#FF8C00"
                                    className="-top-8 -right-5 rotate-12 absolute"
                                />
                                <h2 className="text-xl mt-8">
                                    Системи за автоматизација
                                </h2>
                                <p className="mt-2 lg:w-3/4 text-foreground/60 text-sm">
                                    Автоматизација на секојдневни мануелни
                                    процеси со цел вие да се фокусирате на она
                                    што е важно.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div id="contact" className="mt-10 lg:mt-40 pt-10">
                <motion.div
                    {...fadeScaleBlurInView}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
                    className="relative w-full flex flex-col justify-center items-center"
                >
                    <Badge title="Стапи во контакт" />
                    <div className="flex items-center relative  overflow-visible gap-x-3 lg:gap-x-4">
                        {/* Icon on top */}

                        {/* Text below */}
                        <h1 className="z-0 mt-1 md:mt-10 lg:text-7xl text-4xl font-medium text-center text-foreground">
                            Контактирај нѐ
                        </h1>
                        <HardHatIcon
                            className="absolute  -right-6 -top-8 md:-right-10 md:-top-9   rotate-20 size-10 lg:size-20"
                            weight="duotone"
                            color="#66A786"
                        />
                    </div>

                    <p className="text-center text-foreground/60 mt-6 lg:mt-10">
                        Стапи во контакт преку телефонски број
                    </p>

                    <div className="flex items-start flex-col lg:flex-row xl:gap-20 gap-15 mt-15">
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-medium">Геомин</h3>
                            <h3 className="text-md text-foreground/70 font-medium">
                                Митко
                            </h3>
                            <div className="mt-4 flex items-center gap-x-2">
                                <PhoneCallIcon
                                    weight="duotone"
                                    color="#66A786"
                                    size={20}
                                />
                                <a href="tel:+389 75 203 522">
                                    +389 75 203 522
                                </a>
                            </div>
                        </div>

                        {/* <div className="lg:h-30 lg:w-1 w-full h-1 bg-foreground/10 rounded-lg"></div> */}

                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-medium">ИТ Сектор</h3>
                            <h3 className="text-md text-foreground/70 font-medium">
                                Ѓорги
                            </h3>

                            <div className="mt-4 flex items-center gap-x-2">
                                <PhoneCallIcon
                                    color="#FF8C00"
                                    weight="duotone"
                                    size={20}
                                />
                                <a href="tel:+389 78 239 880">
                                    +389 78 239 880
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

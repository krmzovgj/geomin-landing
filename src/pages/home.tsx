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
    ArrowRightIcon,
    BarricadeIcon,
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
            imgUrl: "/serv1.avif",
            desc: "Ефикасно и безбедно минирање во усеци и масовно минирање при отварање на рудници и каменоломи.",
        },
        {
            icon: DotsNineIcon,
            imgUrl: "/service2.avif",
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
            imgUrl: "/specijalno.avif",

            desc: "Прецизно и контролирано минирање со минимално влијание врз околината и инфраструктурата.",
        },
        {
            icon: LightbulbIcon,
            label: "Консултантски услуги и инженеринг",
            imgUrl: "/service4.avif",

            desc: "Стручни совети и поддршка од областа на рударството при планирање, проектирање, изработка на рударски проекти и надзор во рударството.",
        },
    ];

    const ourWork = [
        {
            imgUrl: "/serv1.avif",
            subLabel: "Масовно минирање",
        },
        {
            imgUrl: "/specijalno.avif",
            subLabel: "Специјално минирање",
        },
        {
            imgUrl: "/service4.avif",
            subLabel: "Консултантски услуги",
        },
    ];

    return (
        <div className="h-full w-screen lg:py-8 lg:px-0 px-6 place-self-center lg:w-2/3">
            <div className="flex flex-col items-center">
                <Badge
                    className="text-[#66A786]"
                    title="Геомин Про Консалтинг"
                />

                <motion.h1
                    {...fadeUpBlur}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="lg:text-7xl mt-3 text-center text-4xl font-medium text-foreground"
                >
                    Mинирање, проектирање <br className="hidden lg:flex" />и
                    рударски надзор
                </motion.h1>
                <motion.p
                    {...fadeUpBlur}
                    transition={{
                        type: "spring",
                        duration: 0.5,
                        delay: 0.1,
                    }}
                    className="mx-5 lg:mx-0 text-foreground/60 mt-6 text-center lg:w-1/2"
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
                    className="mt-10 relative w-full p-1 lg:p-2 rounded-4xl bg-secondary overflow-hidden"
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
                <div className="flex flex-col  items-start gap-x-20 justify-between">
                    <div className="flex justify-center lg:items-center flex-col">
                        <Badge className="text-[#66A786]" title="За нас" />
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
                                    className="flex rotate-12 size-10 lg:size-20"
                                    weight="duotone"
                                    color="#181818"
                                />
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            {...fadeUpBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="text-foreground/60  lg:text-center lg:w-1/2 mt-6 "
                        >
                            Геомин Про Консалтинг е компанија која обезбедува
                            услуги за дупчење и минирање во рудници, каменоломи,
                            при изградба нa патишта, железници, брани,
                            ветерници, нафтоводи, гасоводи и канално минирање
                        </motion.p>
                    </div>

                    <div className="mt-5 lg:mt-10 lg:place-self-center flex-col lg:flex-row flex w-full lg:w-3/4  relative gap-1">
                        <div className="z-20 w-3 lg:w-14 h-14 lg:h-3 rounded-full absolute flex justify-center left-15 lg:left-1/2 lg:-translate-x-1/2 top-1/2 -translate-y-1/2 lg:top-10 bg-secondary/40 backdrop-blur-lg shadow-sm">
                            <XCircleIcon
                                weight="fill"
                                size={16}
                                color="#fff"
                                className="-top-0.5 relative"
                            />
                        </div>
                        <div className="z-20 w-3 lg:w-14 h-14 lg:h-3 rounded-full absolute flex justify-center right-15 lg:left-1/2 lg:-translate-x-1/2 top-1/2 -translate-y-1/2 lg:top-auto lg:bottom-10 bg-secondary/40 backdrop-blur-lg shadow-sm">
                            <XCircleIcon
                                weight="fill"
                                size={16}
                                color="#fff"
                                className="-top-0.5 relative"
                            />
                        </div>

                        <motion.div
                            {...fadeScaleBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="p-1 lg:p-2 h-50 lg:h-70 lg:w-1/2  rounded-3xl bg-secondary"
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
                            className="p-1 lg:p-2 lg:w-1/2 h-50 lg:h-70  rounded-3xl bg-secondary"
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
                <Badge
                    className="text-[#66A786]"
                    title="Како се разликуваме?"
                />

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

                <motion.p
                    {...fadeUpBlurInView}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="lg:w-2/3 text-foreground/60 mt-6 "
                >
                    Нудиме сигурни и прецизни услуги за дупчење, минирање и
                    рударски инженеринг, <br className="hidden md:flex" /> со
                    фокус на безбедност и квалитет во секој проект.
                </motion.p>

                <div className="mt-10 lg:mt-15 flex flex-col gap-6 lg:gap-y-20 lg:grid lg:grid-rows-2 lg:grid-cols-2">
                    {services.map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUpBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                            }}
                            className="flex relative flex-col lg:flex-row  pr-20 "
                        >
                            <div className="flex flex-col justify-between">
                                <div>
                                    <item.icon
                                        weight="duotone"
                                        color="#66A786"
                                        size={44}
                                    />
                                    {/* <h1 className="hidden lg:flex text-2xl text-foreground font-black">
                                        0{i + 1}
                                    </h1> */}

                                    <h1 className="mt-3  text-xl text-foreground">
                                        {item.label}
                                    </h1>
                                </div>

                                <div>
                                    <p className="mt-6 text-foreground/60 ">
                                        {item.desc}
                                    </p>

                                    <a
                                        onClick={() =>
                                            scrollToSection("howitlooks")
                                        }
                                        className="cursor-pointer flex mt-4 items-center gap-x-2"
                                    >
                                        Види повеќе{" "}
                                        <ArrowRightIcon
                                            weight="duotone"
                                            size={20}
                                            color="#66A786"
                                        />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div id="howitlooks" className="mt-10 lg:mt-40 pt-10 w-full">
                <div className="flex items-center flex-col lg:flex-row lg:gap-x-10 justify-between">
                    <div className=" w-fit">
                        <motion.h1
                            {...fadeUpBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="flex relative lg:text-7xl text-4xl font-medium text-foreground"
                        >
                            Како изгледа <br /> нашата работа
                            <motion.span
                                {...fadeUpBlurInView}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{
                                    type: "spring",
                                    duration: 0.5,
                                    delay: 0.1,
                                }}
                            >
                                <BarricadeIcon
                                    className="rotate-45 absolute -right-14 lg:-right-12 -top-2 lg:-top-12 size-14 lg:size-20"
                                    weight="duotone"
                                    color="#181818"
                                />
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            {...fadeUpBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="text-foreground/60 mt-6"
                        >
                            Погледнете како нашите услуги за дупчење, минирање
                            <br className="hidden md:flex" /> изгледаат во
                            реалност, од рудници и каменоломи до инфраструктурни
                            и урбани проекти.
                        </motion.p>
                    </div>

                    <div
                        className="w-full mt-10 lg:mt-0 lg:p-2 p-1 bg-secondary lg:w-1/2 h-50 lg:h-60  rounded-3xl "
                        {...fadeScaleBlurInView}
                    >
                        <div className="w-full h-full relative shadow-sm bg-background overflow-hidden rounded-2xl">
                            <motion.img
                                {...fadeScaleBlurInView}
                                viewport={{ once: true, amount: 0.35 }}
                                src="/service2.avif"
                                className="w-full h-full object-cover overflow-hidden rounded-2xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    duration: 0.5,
                                    type: "spring",
                                }}
                            />

                            <div className="py-3 absolute bottom-0 w-full px-5 bg-foreground/20 backdrop-blur-lg">
                                <h3 className="text-background text-sm">
                                    Инфраструктурни проекти
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 lg:mt-10 w-full">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-3">
                        {ourWork.map((service, idx) => (
                            <div
                                key={idx}
                                className="w-full lg:p-2 p-1 bg-secondary lg:w-1/3 h-50 rounded-3xl "
                                {...fadeScaleBlurInView}
                            >
                                <div className="w-full h-full relative shadow-sm bg-background overflow-hidden rounded-2xl">
                                    <motion.img
                                        {...fadeScaleBlurInView}
                                        viewport={{
                                            once: true,
                                            amount: 0.35,
                                        }}
                                        src={service.imgUrl}
                                        className="w-full h-full object-cover rounded-2xl"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{
                                            duration: 0.5,
                                            type: "spring",
                                        }}
                                    />

                                    <div className="py-3 absolute bottom-0 w-full px-5 bg-foreground/20 backdrop-blur-lg">
                                        <h3 className="text-background text-sm">
                                            {service.subLabel}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div
                id="itdep"
                className="mt-10 lg:mt-40 pt-10 flex flex-col justify-center items-center"
            >
                <Badge className="text-[#FF8C00]" title="ИТ Сектор" />

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
                    className="text-center lg:w-2/3 text-foreground/60 mt-6 "
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
                            className="lg:w-2/5 p-1 lg:p-2 rounded-3xl bg-secondary"
                        >
                            <div className="rounded-2xl bg-background shadow-sm overflow-hidden relative p-6">
                                <h1 className="text-4xl font-medium">01</h1>
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
                            className="lg:w-2/5 p-1 lg:p-2 rounded-3xl bg-secondary"
                        >
                            <div className="rounded-2xl bg-background shadow-sm overflow-hidden relative p-6">
                                <h1 className="text-4xl font-medium">02</h1>
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

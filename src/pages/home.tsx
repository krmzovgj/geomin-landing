import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Buildings2,
    Code1,
    FormatSquare,
    HierarchySquare,
    I3DCubeScan,
    Image,
    LampCharge,
    MessageQuestion,
} from "iconsax-react";
import { Badge } from "../components/ui/badge";

export const Home = () => {
    const services = [
        {
            icon: Image,
            label: "Дупчење и минирање во рудници и каменоломи",
            desc: "Ефикасно и безбедно отворање и експлоатација на карпи и минерални ресурси.",
        },
        {
            icon: FormatSquare,
            label: "Инфраструктурни проекти",

            desc: "Дупчење и минирање за изградба на патишта, брани, нафтоводи и канали за далноводи.",
        },
        {
            icon: Buildings2,
            label: "Специјално минирање во урбани средини",

            desc: "Прецизно и контролирано минирање со минимално влијание врз околината и инфраструктурата.",
        },
        {
            icon: LampCharge,
            label: "Консултантски услуги и инженеринг",

            desc: "Стручни совети и поддршка при планирање и спроведување на сложени проекти.",
        },
    ];

    return (
        <div className="h-full">
            <div className="flex flex-col items-center">
                <Badge title="ГЕОМИН ПРО КОНСАЛТИНГ" />

                <motion.h1
                    initial={{ y: 80, opacity: 0, filter: "blur(20px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="lg:text-7xl mt-3 text-center text-4xl font-medium text-foreground"
                >
                    Минирање на патишта, <br className="hidden lg:flex" />
                    рудници <br className="flex lg:hidden" /> и каменоломи
                </motion.h1>
                <motion.p
                    initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
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

                <Button variant="default" className="mt-5">
                    Дознај Повеќе
                </Button>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
                    className="mt-10 relative w-full p-2 rounded-4xl bg-secondary overflow-hidden"
                >
                    {/* Inner wrapper keeps the image inset */}
                    <motion.div className="shadow-sm overflow-hidden rounded-3xl w-full  lg:h-145">
                        <motion.img
                            src="/heroimg.png"
                            alt=""
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
                        <Badge title="ГЕОМИН?" />
                        <motion.h1
                            initial={{
                                y: 80,
                                opacity: 0,
                                filter: "blur(20px)",
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="flex items-center gap-x-3 lg:gap-x-5 lg:text-7xl mt-3 text-center text-4xl font-medium text-foreground"
                        >
                            Кој сме ние{" "}
                            <motion.span
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    type: "spring",
                                    duration: 0.5,
                                    delay: 0.1,
                                }}
                            >
                                <MessageQuestion
                                    className="flex lg:hidden rotate-12 size-10 lg:size-20"
                                    variant="Bulk"
                                    color="#181818"
                                />
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{
                                y: 80,
                                opacity: 0,
                                filter: "blur(20px)",
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className=" text-foreground/60 mt-6 lg:mt-10 "
                        >
                            Геомин Про Консалтинг е компанија која обезбедува
                            услуги за дупчење и минирање во рудници, каменоломи,
                            при изградба нa патишта, брани, нафтоводи, канали за
                            далноводи и специјално минирање во урбани средини.
                        </motion.p>

                        <motion.span
                            className="hidden lg:flex mt-10 w-fit"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                            }}
                        >
                            <MessageQuestion
                                className="rotate-12 size-10 lg:size-20"
                                variant="Bulk"
                                color="#181818"
                            />
                        </motion.span>
                    </div>

                    <div className="mt-5 lg:mt-0 flex w-full relative flex-col gap-3">
                        <div className="z-20 w-3 h-14 rounded-full absolute place-self-center flex justify-center items-center top-1/2 -translate-y-1/2 bg-secondary/40 backdrop-blur-lg shadow-sm"></div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                filter: "blur(20px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 0.1,
                            }}
                            className="p-2 h-40  rounded-3xl bg-secondary"
                        >
                            <div className="w-full h-full shadow-sm bg-background rounded-2xl"></div>
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                filter: "blur(20px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="p-2 h-40  rounded-3xl bg-secondary"
                        >
                            <div className="w-full h-full shadow-sm bg-background rounded-2xl"></div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div id="services" className="mt-10 lg:mt-40 pt-10">
                <Badge title="Како се разликуваме?" />

                <motion.h1
                    initial={{ y: 80, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="mt-3 flex items-center gap-x-3 lg:gap-x-5 lg:text-7xl  text-center text-4xl font-medium text-foreground"
                >
                    Нашите услуги
                    <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            type: "spring",
                            duration: 0.5,
                            delay: 0.1,
                        }}
                    >
                        <I3DCubeScan
                            className="rotate-12 size-10 lg:size-20"
                            variant="Bulk"
                            // size={80}
                            color="#181818"
                        />
                    </motion.span>
                </motion.h1>

                <div className="mt-10 lg:mt-15 flex flex-col gap-8 lg:gap-20 lg:gap-y-15 lg:grid lg:grid-rows-2 lg:grid-cols-2 ">
                    {services.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                y: 80,
                                opacity: 0,
                                filter: "blur(20px)",
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                            }}
                        >
                            <div className="flex items-center gap-x-4">
                                <div className="flex w-13 h-13 border-2 border-[#66A786] rounded-2xl bg-[#66A786]/10 justify-center items-center">
                                    <item.icon
                                        variant="Bulk"
                                        size={26}
                                        color="#66A786"
                                    />
                                </div>
                                <h1 className="text-2xl text-foreground font-black">
                                    0{i + 1}
                                </h1>
                            </div>

                            <h1 className="mt-4 lg:mt-4 text-lg text-foreground font-semibold">
                                {item.label}
                            </h1>
                            <p className="mt-1 text-foreground/60 ">
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
                <Badge title="ИТ Сектор" />

                <motion.h1
                    initial={{ y: 80, opacity: 0, filter: "blur(20px)" }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="mt-3 flex items-center gap-x-3 lg:gap-x-5 lg:text-7xl  text-center text-4xl font-medium text-foreground"
                >
                    Дигитални Решенија
                </motion.h1>
                <motion.p
                    initial={{
                        y: 80,
                        opacity: 0,
                        filter: "blur(20px)",
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="text-center lg:w-2/3 text-foreground/60 mt-6 lg:mt-10 "
                >
                    Во нашиот ИТ сектор креираме практични дигитални решенија{" "}
                    <br className="hidden lg:flex" />
                    што помагаат вашата работа да биде полесна и побрза.
                </motion.p>

                <div className="mt-10 lg:mt-15 lg:gap-5 gap-4 flex flex-col">
                    <div className="flex-col lg:flex-row flex w-full justify-center items-center gap-4 lg:gap-5">
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                filter: "blur(20px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="md:w-2/5 p-2 rounded-3xl bg-secondary"
                        >
                            <div className="rounded-2xl bg-background shadow-sm overflow-hidden relative p-6">
                                <h1 className="text-4xl font-black">01</h1>
                                <Code1
                                    variant="Bulk"
                                    size={110}
                                    color="#000"
                                    className="-top-5 -right-5 rotate-12 absolute"
                                />
                                <h2 className="text-xl mt-8">
                                    Развој на веб апликации
                                </h2>
                                <p className="mt-2 lg:w-2/3 text-foreground/60 text-sm">
                                    Веб апликации кои се лесни за користење,
                                    стабилни и прилагодени на вашите потреби.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                filter: "blur(20px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                filter: "blur(0px)",
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="md:w-2/5 p-2 rounded-3xl bg-secondary"
                        >
                            <div className="rounded-2xl bg-background shadow-sm overflow-hidden relative p-6">
                                <h1 className="text-4xl font-black">02</h1>
                                <HierarchySquare
                                    variant="Bulk"
                                    size={110}
                                    color="#000"
                                    className="-top-5 -right-5 rotate-12 absolute"
                                />
                                <h2 className="text-xl mt-8">
                                    Системи за автоматизација
                                </h2>
                                <p className="mt-2 lg:w-2/3 text-foreground/60 text-sm">
                                    Автоматизација на секојдневни процеси со цел
                                    вие се фокусирате на она што е важно.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

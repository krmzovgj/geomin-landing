import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { homeTranslations } from "@/i18n/home";
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
    HardHatIcon,
    PackageIcon,
    PhoneCallIcon,
    SealQuestionIcon,
    TreeStructureIcon,
    XCircleIcon
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";

export const Home = ({lang}: {lang: "mk" | "en"}) => {

    const t = homeTranslations[lang];

    return (
        <div className="h-full w-screen lg:py-8 lg:px-0 px-6 place-self-center lg:w-2/3">
            <div className="flex flex-col items-center">
                <Badge className="text-[#66A786]" title={t.badgeCompany} />

                <motion.h1
                    {...fadeUpBlur}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="lg:text-7xl mt-3 text-center text-4xl font-medium text-foreground"
                >
                    {t.heroTitle}
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
                    {t.heroDesc}
                </motion.p>

                <Button
                    variant="default"
                    onClick={() => scrollToSection("whoweare")}
                    className="mt-5"
                >
                    {t.seeMore}
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
                        <Badge
                            className="text-[#66A786]"
                            title={t.aboutBadge}
                        />
                        <motion.h1
                            {...fadeUpBlurInView}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="flex items-center gap-x-3 lg:gap-x-5 lg:text-7xl mt-3 text-center text-4xl font-medium text-foreground"
                        >
                            {t.aboutTitle}{" "}
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
                            {t.aboutDesc}
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
                <Badge className="text-[#66A786]" title={t.servicesBadge} />

                <motion.h1
                    {...fadeUpBlurInView}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="mt-3 flex items-center gap-x-3 lg:gap-x-5 lg:text-7xl  text-center text-4xl font-medium text-foreground"
                >
                    {t.servicesTitle}
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
                    {t.servicesDesc}
                </motion.p>

                <div className="mt-10 lg:mt-15 flex flex-col gap-6 lg:gap-y-20 lg:grid lg:grid-rows-2 lg:grid-cols-2">
                    {t.services.map((item: any, i: number) => (
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
                                        {t.seeMore}{" "}
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
                            {t.howItLooksTitle}
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
                            {t.howItLooksDesc}
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
                                    {t.InfrastructureProjects}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 lg:mt-10 w-full">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-3">
                        {t.ourWork.map((service: any, idx: number) => (
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
                                            {service.label}
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
                <Badge className="text-[#FF8C00]" title={t.itBadge} />

                <motion.h1
                    {...fadeUpBlurInView}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="mt-3 flex items-center gap-x-3 lg:gap-x-5 lg:text-7xl  text-center text-4xl font-medium text-foreground"
                >
                    {t.itTitle}
                </motion.h1>
                <motion.p
                    {...fadeUpBlurInView}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="text-center lg:w-2/3 text-foreground/60 mt-6 "
                >
                    {t.itDesc}
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
                                <h2 className="text-xl mt-8">{t.webApps}</h2>
                                <p className="mt-2 lg:w-4/4 text-foreground/60 text-sm">
                                    {t.webAppsDesc}
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
                                <h2 className="text-xl mt-8">{t.automation}</h2>
                                <p className="mt-2 lg:w-3/4 text-foreground/60 text-sm">
                                    {t.automationDesc}
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
                    <Badge title={t.contactBadge} />
                    <div className="flex items-center relative  overflow-visible gap-x-3 lg:gap-x-4">
                        {/* Icon on top */}

                        {/* Text below */}
                        <h1 className="z-0 mt-1 md:mt-10 lg:text-7xl text-4xl font-medium text-center text-foreground">
                            {t.contactTitle}
                        </h1>
                        <HardHatIcon
                            className="absolute  -right-6 -top-8 md:-right-10 md:-top-9   rotate-20 size-10 lg:size-20"
                            weight="duotone"
                            color="#66A786"
                        />
                    </div>

                    <p className="text-center text-foreground/60 mt-6 lg:mt-10">
                        {t.contactDesc}
                    </p>

                    <div className="flex items-start flex-col lg:flex-row xl:gap-20 gap-15 mt-15">
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-medium">{t.geomin}</h3>
                            <h3 className="text-md text-foreground/70 font-medium">
                                {t.mitko}
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
                            <h3 className="text-2xl font-medium">
                                {t.itBadge}
                            </h3>
                            <h3 className="text-md text-foreground/70 font-medium">
                                {t.gjorgi}
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

            <Footer lang={lang} />
        </div>
    );
};

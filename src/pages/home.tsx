import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageQuestion } from "iconsax-react";
import { Badge } from "../components/ui/badge";

export const Home = () => {
    return (
        <div className="h-full">
            <div className="flex flex-col items-center">
                <Badge title="ГЕОМИН ПРО КОНСАЛТИНГ" />

                <motion.h1
                    initial={{ y: 80, opacity: 0, filter: "blur(20px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="md:text-7xl mt-3 text-center text-4xl font-medium text-foreground"
                >
                    Минирање на патишта, <br className="hidden md:flex" />
                    рудници <br className="flex md:hidden" /> и каменоломи
                </motion.h1>
                <motion.p
                    initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{
                        type: "spring",
                        duration: 0.5,
                        delay: 0.1,
                    }}
                    className="mx-5 md:mx-0 text-foreground/60 mt-6 md:mt-10 text-center xl:w-1/2"
                >
                    Нашиот тим има долгогодишно искуство во областа на дупчење,
                    минирање, <br className="hidden md:flex" /> проектирање и
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
                    <motion.div className="overflow-hidden rounded-3xl w-full  md:h-145">
                        <motion.img
                            src="/heroimg.png"
                            alt=""
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5, type: "spring" }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            <div className="mt-20 md:mt-50 flex justify-start">
                <div>
                    <motion.h1
                        initial={{ y: 80, opacity: 0, filter: "blur(20px)" }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="flex items-center gap-x-2 md:gap-x-5 md:text-7xl mt-3 text-center text-4xl font-medium text-foreground"
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
                                className="rotate-12 size-10 md:size-20"
                                variant="Bulk"
                                // size={80}
                                color="#181818"
                            />
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 80, opacity: 0, filter: "blur(20px)" }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="md:w-1/2 text-foreground/60 mt-6 md:mt-10 "
                    >
                        Геомин Про Консалтинг е компанија која обезбедува услуги
                        за дупчење и минирање во рудници, каменоломи, при
                        изградба нa патишта, брани, нафтоводи, канали за
                        далноводи и специјално минирање во урбани средини.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

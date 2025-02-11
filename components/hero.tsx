"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type HeroProps = {
  title: string;
  description: string;
  buttonLabel: string;
};

export default function Hero({ title, description, buttonLabel }: HeroProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background.webp')",
            backgroundPosition: "right",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 px-4 md:px-16 h-full flex flex-col pb-16 md:pb-24">
        <div className="mt-64 flex flex-col gap-16 items-start">
          <motion.div
            className="text-white space-y-4 flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl leading-tight w-fit">
              {title}
            </h1>
            <p className="text-white/90 md:text-2xl">{description}</p>
          </motion.div>
          <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 text-4xl font-bold py-8 px-12 transform hover:scale-105 mx-auto block relative overflow-hidden group"
            >
              <Link
                href="/questions"
                className="flex items-center gap-3 tracking-wide"
              >
                {buttonLabel}
                <span className="absolute inset-y-0 left-[-200%] w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

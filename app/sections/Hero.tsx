"use client";

import Button from "@/components/Button";
import Image from "next/image";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);
  interface EmailCaptureFormProps {
    className?: string;
  }
  return (
    <section
      className="py-24 overflow-x-clip"
      id="hero"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
    >
      <div className="relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-32 top-16 hidden xl:block"
        >
          <Image
            src={designExample1Image}
            alt="Design example 1 image"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          className="absolute left-56 top-96 hidden xl:block"
        >
          <Pointer name="Chibuike" />
        </motion.div>
        <motion.div
          className="absolute -right-64 -top-16 hidden xl:block"
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          drag
        >
          <Image
            src={designExample2Image}
            alt="design example 2"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="absolute right-80 -top-4 hidden xl:block"
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 100, x: 275 }}
        >
          <Pointer name="Tolani" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl md:max-w-2xl md:mx-auto xl:text-8xl xl:mx-auto xl:max-w-4xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn't slow you down, Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <EmailCaptureForm />
      </div>
    </section>
  );
}

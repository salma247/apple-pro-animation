import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import audioAirPod1 from "../assets/audio_airpod1.jpg";
import audioAirPod2 from "../assets/audio_airpod2.jpg";
import audioAirPod3 from "../assets/audio_airpod3.png";
import noiseReductionVideo from "../assets/noise_reduction.mp4";

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Part 1
  const scale1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0.7]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.2],
    [0, 1, 0],
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.15, 0.18, 0.2],
    ["120", "0%", "-200"],
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.25, 0.3],
    [0, 1, 0],
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.2, 0.25, 0.3],
    ["0", "0%", "-200"],
  );

  // Part 2
  const scale2 = useTransform(scrollYProgress, [0.35, 0.6, 0.7], [1, 1, 0.7]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0.35, 0.5, 0.6, 0.7],
    [0, 1, 1, 0],
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.6],
    [0, 1, 0],
  );

  const text3Y = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.6],
    ["0", "0%", "-200px"],
  );

  // Part 3
  const videoOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.65, 0.9],
    [0, 1, 0],
  );

  return (
    <motion.section ref={ref} className="h-[500vh] px-4">
      <div className="sticky top-0 grid h-[100vh] grid-rows-4 gap-4 md:top-[15vh] md:h-[70vh] md:grid-cols-3 md:grid-rows-1">
        <div className="md:max-w-80 md:justify-self-end">
          <motion.p
            style={{ opacity: text1Opacity, y: text1Y }}
            className="text-sm font-bold text-gray-400 md:text-[17px]"
          >
            The chip uses powerful{" "}
            <strong className="text-white">adapatation algorithms</strong> to
            process sound more quickly, turning audio at the precise moment you
            hear it. Ever detail is redered for your specific ear shape,
            immersing you in{" "}
            <strong className="text-green-500">higher-fidelity sound</strong>.
          </motion.p>

          <motion.p
            // style={{ opacity: text2Opacity, y: text2Y }}
            style={{ opacity: text2Opacity, y: text2Y }}
            className="text-sm font-bold text-gray-400 md:text-[17px]"
          >
            <strong className="text-white">An inward-facing microphone </strong>{" "}
            works with voice enhancment algorithms to recognize when you're
            speaking and articulate your voice, so your phone and video calls
            alyways{" "}
            <strong className="text-green-500">sound completely natural</strong>
            .
          </motion.p>
        </div>
        <motion.figure
          style={{ scale: scale1, opacity: opacity1 }}
          className="row-span-2 mx-auto flex w-[60%] items-center justify-center md:row-span-1 md:w-full"
        >
          <img src={audioAirPod1} alt="Audio AirPod" className="object-cover" />
        </motion.figure>
      </div>

      {/* Part 2 */}
      <div className="sticky top-[15vh] grid h-[70vh] grid-rows-4 items-center gap-4 md:grid-cols-3 md:grid-rows-1">
        <motion.figure
          style={{ scale: scale2, opacity: opacity2 }}
          className="order-2 row-span-2 mx-auto flex w-[60%] items-center justify-center md:order-1 md:col-start-2 md:row-span-1 md:w-full"
        >
          <img src={audioAirPod2} alt="Audio AirPod" className="object-cover" />
        </motion.figure>
        <motion.p
          className="md:max-w-80 order-1 text-sm text-gray-400 md:order-2 md:justify-self-end md:text-[17px]"
          style={{ opacity: text3Opacity, y: text3Y }}
        >
          The chip uses powerful{" "}
          <strong className="text-gray-300">adapatation algorithms</strong> to
          process sound more quickly, turning audio at the precise moment you
          hear it. Ever detail is redered for your specific ear shape, immersing
          you in{" "}
          <strong className="text-green-500">higher-fidelity sound</strong>.
        </motion.p>
      </div>

      {/* Part 3 */}
      <div className="sticky top-0 h-[100vh] items-center gap-4">
        <motion.figure
          style={{ opacity: videoOpacity }}
          className="relative flex h-full justify-center items-center"
        >
          <video
            src={noiseReductionVideo}
            autoPlay
            muted
            loop
            className="md-h-full h-[80%] md:w-full object-cover"
          />

          <img
            src={audioAirPod3}
            alt="Audio AirPod"
            className="absolute left-[50%] top-[50%] w-[60%] translate-x-[-50%] translate-y-[-50%] transform md:w-[30%]"
          />
        </motion.figure>
      </div>
    </motion.section>
  );
}

import React from "react";
import { SplitWords, SplitLetters, SplitLines } from "../lib/SplitText";
import { AnimatePresence, motion } from "framer-motion";

const AnimateItem = ({
  children,
  type,
  duration,
  offset,
  delay,
  isVisible,
}) => {
  //Split based on type
  const TextArray =
    type === "letter"
      ? SplitLetters(children)
      : type === "word"
      ? SplitWords(children)
      : SplitLines(children);

  //Calculate duration
  const AnimationTime = (parseInt(duration) / 1000).toFixed(2);

  //Animation variant
  const AnimationVariant = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  //Animation Item
  const AnimationItem = {
    initial: {
      opacity: 0,
      y: parseInt(offset),
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.4, 0.01, -0.05, 0.85],
        duration: AnimationTime,
        delay: parseInt(delay),
      },
      opacity: 1,
    },
    exit: {
      opacity: 0,
      y: -parseInt(offset),
      transition: {
        ease: "easeInOut",
        duration: (parseInt(AnimationTime) / 2).toFixed(2),
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={AnimationVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {TextArray.map((text, index) => (
            <motion.div variants={AnimationItem} key={index}>
              {text}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

AnimateItem.defaultProps = {
  type: "letter",
  duration: 900,
  offset: 150,
  delay: 0,
  isVisible: true,
};

export default AnimateItem;

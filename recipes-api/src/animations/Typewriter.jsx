import { motion } from "framer-motion";
const Motionh = motion.h1;
// Variants para controlar animaciones
const sentence = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03, // tiempo entre cada letra
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: { opacity: 1, y: `0em` },
};

export function Typewriter({ text="" }) {

  return (
    <Motionh
      variants={sentence}
      initial="hidden"
      animate="visible"
      className="text-white text-opacity-80 text-xl md:text-2xl mt-4 drop-shadow-2xl tracking-in-expand"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char}
        </motion.span>
      ))}
    </Motionh>
  );
}

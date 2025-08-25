export default function LetterForLetter({ text }) {
  return (
    <h1 className="text-4xl font-bold flex">
      {text.split("").map((char, index) => (
        <motion.div
          key={index}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {char}
        </motion.div>
      ))}
    </h1>
  );
}

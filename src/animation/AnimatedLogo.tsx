import { motion } from "framer-motion";

export function AnimatedLogo() {
  return (
    <motion.svg
      viewBox="0 0 450 450"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <motion.path
        d="M225 36.1755L321.955 420H416.91L179.465 127.143L225 36.1755ZM204.867 263.253L158.769 168.608L33.0897 420H128.055L204.867 263.253Z"
        strokeWidth={15}
        fill="rgba(20, 184, 166, 0)"
        stroke="teal"
        animate={{ fill: "#14b8a6" }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

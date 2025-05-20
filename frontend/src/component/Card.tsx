import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface IProp {
  title: string;
  icon: ReactNode;
  color: string;
}

const Card = ({ title, icon, color }: IProp) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`w-full cursor-pointer h-[180px] rounded-2xl shadow-md flex flex-col items-center justify-center text-white ${color}`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h2 className="text-center font-semibold text-lg px-2">{title}</h2>
    </motion.div>
  );
};

export default Card;

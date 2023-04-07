import { motion } from "framer-motion";
import { useRef } from "react";

interface Data {
  title: string;
  description: string;
  tag: string;
  color: string;
}

export default function Card({ title, description, tag, color }: Data) {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mx-2 my-2 rounded-md bg-white shadow-md"
    >
      <h1 className="px-2 py-2 text-base font-semibold">{title}</h1>
      <p className="px-2 text-gray-600">{description}</p>
      <button disabled className={`rounded-sm ${color} mx-2 my-2 items-center`}>
        <p className="px-2 text-gray-800">{tag}</p>
      </button>
    </motion.div>
  );
}

"use client";
import React, { ElementType } from "react";
import { motion } from "framer-motion";
// ===================================================
function SectionHeader({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 text-4xl font-bold"
    >
      {icon}
      {title}
    </motion.h2>
  );
}

export default SectionHeader;

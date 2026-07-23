import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function SectionHeader({
  icon: Icon,
  tag,
  title,
  gradientText,
  description,
}: {
  icon: LucideIcon;
  tag: string;
  title: string;
  gradientText: string;
  description: string;
}) {
  const parts = title.split(gradientText);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-3xl mx-auto"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ADEE]/10 border border-[#00ADEE]/20 text-sm font-medium text-[#020c66] mb-6">
        <Icon size={16} className="text-[#00ADEE]" />
        {tag}
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e1e1e] leading-tight">
        {parts[0]}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(90deg,#00ADEE,#020c66)" }}
        >
          {gradientText}
        </span>
        {parts[1]}
      </h2>
      <p className="mt-5 text-lg text-slate-600">{description}</p>
    </motion.div>
  );
}
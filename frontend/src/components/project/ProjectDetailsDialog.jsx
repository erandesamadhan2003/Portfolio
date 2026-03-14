import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { motion } from "framer-motion";
import { techIcon } from "./ProjectCard";
import {
    FaCheckCircle,
    FaCode,
    FaExternalLinkAlt,
    FaLayerGroup,
} from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const splitDescription = (text = "") =>
    text
        .split(".")
        .map((l) => l.trim())
        .filter(Boolean)
        .map((l) => `${l}.`);

// Derive accent from first tech with a non-default color
const accentFromTech = (techList = []) => {
    for (const t of techList) {
        const { color } = techIcon(t);
        if (color !== "#A78BFA") return color;
    }
    return "#9B51E0";
};

function ProjectDetailsDialog({ project, index, open, onOpenChange }) {
    if (!project) return null;
    const points = splitDescription(project.description);
    const accent = accentFromTech(project.tech || []);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[96vw] !max-w-[96vw] md:w-[88vw] md:!max-w-[88vw] xl:w-[1100px] xl:!max-w-[1100px] max-h-[88vh] overflow-y-auto border-0 bg-transparent text-[#EAEAEA] p-0 shadow-none">
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                    .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
                    @keyframes pdSlide {
                        from { opacity: 0; transform: translateY(20px) scale(0.98); }
                        to   { opacity: 1; transform: translateY(0)  scale(1); }
                    }
                    .pd-reveal { animation: pdSlide 0.55s cubic-bezier(0.22,1,0.36,1) forwards; opacity: 0; }
                `}</style>

                <div
                    className="font-jakarta rounded-2xl overflow-hidden"
                    style={{
                        background: "#07010f",
                        border: `1px solid ${accent}30`,
                        boxShadow: `0 0 60px ${accent}22, 0 0 120px #0007`,
                    }}
                >
                    {/* ── Cinematic header ── */}
                    <div
                        className="relative overflow-hidden px-8 pt-10 pb-8"
                        style={{
                            background: `linear-gradient(135deg, #0e0320 0%, #100228 55%, ${accent}14 100%)`,
                        }}
                    >
                        {/* accent top bar */}
                        <div
                            className="absolute top-0 left-0 right-0 h-[2px]"
                            style={{
                                background: `linear-gradient(90deg, transparent 0%, ${accent} 40%, ${accent} 60%, transparent 100%)`,
                            }}
                        />
                        {/* large blurred glow */}
                        <div
                            className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-30"
                            style={{ background: accent }}
                        />
                        <div
                            className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full blur-2xl opacity-15"
                            style={{ background: "#7E3AF2" }}
                        />

                        <div className="relative z-10 flex items-start gap-5">
                            {/* accent icon box */}
                            <div
                                className="flex items-center justify-center h-14 w-14 shrink-0 rounded-2xl shadow-lg"
                                style={{
                                    background: `linear-gradient(135deg, ${accent}40, ${accent}18)`,
                                    border: `1px solid ${accent}50`,
                                }}
                            >
                                <FaLayerGroup
                                    style={{
                                        color: accent,
                                        fontSize: "1.4rem",
                                    }}
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                {/* category badge */}
                                <span
                                    className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest mb-2"
                                    style={{
                                        background: `${accent}18`,
                                        color: accent,
                                        border: `1px solid ${accent}35`,
                                    }}
                                >
                                    {project.category || "Project"} · #
                                    {String((index ?? 0) + 1).padStart(2, "0")}
                                </span>

                                <DialogTitle
                                    className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight pd-reveal"
                                    style={{ animationDelay: "0ms" }}
                                >
                                    {project.title}
                                </DialogTitle>

                                {project.tech?.length > 0 && (
                                    <p className="mt-1.5 text-xs text-[#6a50a0]">
                                        {project.tech.length} technologies used
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ── Body ── */}
                    <div
                        className="px-8 py-7 space-y-8"
                        style={{ animationDelay: "80ms" }}
                    >
                        {/* Highlights */}
                        <div
                            className="pd-reveal"
                            style={{ animationDelay: "120ms" }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <FaCheckCircle
                                    style={{
                                        color: accent,
                                        fontSize: "0.9rem",
                                    }}
                                />
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6a50a0]">
                                    Project Highlights
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {points.map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.07 }}
                                        className="flex items-start gap-3 rounded-xl p-4 transition-all duration-300 hover:scale-[1.015]"
                                        style={{
                                            background: `linear-gradient(135deg, #0e0225, ${accent}08)`,
                                            border: `1px solid ${accent}20`,
                                        }}
                                        whileHover={{
                                            borderColor: `${accent}50`,
                                            boxShadow: `0 0 16px ${accent}18`,
                                        }}
                                    >
                                        <span
                                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                            style={{ background: accent }}
                                        />
                                        <p className="text-sm leading-relaxed text-[#cec0e8]">
                                            {point}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        {project.tech?.length > 0 && (
                            <div
                                className="pd-reveal"
                                style={{ animationDelay: "260ms" }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <FaCode
                                        style={{
                                            color: accent,
                                            fontSize: "0.9rem",
                                        }}
                                    />
                                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6a50a0]">
                                        Tech Stack
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => {
                                        const { Icon, color } = techIcon(tech);
                                        return (
                                            <motion.span
                                                key={tech}
                                                whileHover={{
                                                    scale: 1.08,
                                                    y: -2,
                                                    boxShadow: `0 4px 14px ${color}30`,
                                                }}
                                                className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm cursor-default"
                                                style={{
                                                    background: "#0a0118",
                                                    border: `1px solid ${color}28`,
                                                    color: "#ddd0f5",
                                                }}
                                            >
                                                <Icon
                                                    style={{
                                                        color,
                                                        fontSize: "1rem",
                                                    }}
                                                />
                                                {tech}
                                            </motion.span>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Links */}
                        {(project.github || project.demo) && (
                            <div
                                className="flex flex-wrap gap-3 pt-5 border-t pd-reveal"
                                style={{
                                    borderColor: `${accent}18`,
                                    animationDelay: "360ms",
                                }}
                            >
                                {project.github && (
                                    <motion.a
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: `0 0 24px ${accent}55`,
                                        }}
                                        whileTap={{ scale: 0.97 }}
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2.5 rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-lg"
                                        style={{
                                            background: `linear-gradient(135deg, #7E3AF2, #4A00E0)`,
                                        }}
                                    >
                                        <SiGithub
                                            style={{ fontSize: "1rem" }}
                                        />{" "}
                                        View on GitHub
                                    </motion.a>
                                )}
                                {project.demo && (
                                    <motion.a
                                        whileHover={{
                                            scale: 1.05,
                                            borderColor: accent,
                                        }}
                                        whileTap={{ scale: 0.97 }}
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2.5 rounded-xl px-6 py-2.5 text-sm font-medium transition-all"
                                        style={{
                                            background: "#0a0118",
                                            border: `1px solid ${accent}35`,
                                            color: "#ddd0f5",
                                        }}
                                    >
                                        <FaExternalLinkAlt
                                            style={{ fontSize: "0.8rem" }}
                                        />{" "}
                                        Live Demo
                                    </motion.a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ProjectDetailsDialog;

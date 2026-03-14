import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiExpress,
    SiDocker,
    SiKubernetes,
    SiPython,
    SiSolidity,
    SiEthereum,
    SiSocketdotio,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiPostgresql,
    SiMysql,
    SiRedis,
    SiGraphql,
    SiGithubactions,
    SiTerraform,
    SiLinux,
    SiCplusplus,
} from "react-icons/si";
import {
    FaCode,
    FaGlobe,
    FaRobot,
    FaShieldAlt,
    FaArrowRight,
} from "react-icons/fa";

export const techIcon = (tech = "") => {
    const t = tech.toLowerCase();
    if (t.includes("react native") || t.includes("react.js") || t === "react")
        return { Icon: SiReact, color: "#61DAFB" };
    if (t.includes("next")) return { Icon: SiNextdotjs, color: "#EAEAEA" };
    if (t.includes("node")) return { Icon: SiNodedotjs, color: "#68A063" };
    if (t.includes("mongo")) return { Icon: SiMongodb, color: "#47A248" };
    if (t.includes("express")) return { Icon: SiExpress, color: "#EAEAEA" };
    if (t.includes("docker")) return { Icon: SiDocker, color: "#2496ED" };
    if (t.includes("kubernetes"))
        return { Icon: SiKubernetes, color: "#326CE5" };
    if (t.includes("python")) return { Icon: SiPython, color: "#3776AB" };
    if (t.includes("solidity")) return { Icon: SiSolidity, color: "#9B9B9B" };
    if (t.includes("ethereum") || t.includes("blockchain"))
        return { Icon: SiEthereum, color: "#627EEA" };
    if (t.includes("socket")) return { Icon: SiSocketdotio, color: "#EAEAEA" };
    if (t.includes("typescript"))
        return { Icon: SiTypescript, color: "#3178C6" };
    if (t.includes("tailwind"))
        return { Icon: SiTailwindcss, color: "#38BDF8" };
    if (t.includes("postgres")) return { Icon: SiPostgresql, color: "#336791" };
    if (t.includes("mysql")) return { Icon: SiMysql, color: "#00758F" };
    if (t.includes("redis")) return { Icon: SiRedis, color: "#DC382D" };
    if (t.includes("graphql")) return { Icon: SiGraphql, color: "#E10098" };
    if (t.includes("github actions"))
        return { Icon: SiGithubactions, color: "#2088FF" };
    if (t.includes("terraform")) return { Icon: SiTerraform, color: "#7B42BC" };
    if (t.includes("linux") || t.includes("unix"))
        return { Icon: SiLinux, color: "#FCC624" };
    if (t.includes("c++")) return { Icon: SiCplusplus, color: "#00599C" };
    if (t.includes("ai") || t.includes("ml") || t.includes("gemini"))
        return { Icon: FaRobot, color: "#A78BFA" };
    if (t.includes("smart contract"))
        return { Icon: FaShieldAlt, color: "#A78BFA" };
    if (
        t.includes("rest") ||
        t.includes("api") ||
        t.includes("http") ||
        t.includes("tcp")
    )
        return { Icon: FaGlobe, color: "#22D3EE" };
    return { Icon: FaCode, color: "#A78BFA" };
};

// Derive an accent color from the first recognisable tech
const accentFromTech = (techList = []) => {
    for (const t of techList) {
        const { color } = techIcon(t);
        if (color !== "#A78BFA") return color;
    }
    return "#9B51E0";
};

function ProjectCard({ project, index, variant = "compact", onClick }) {
    const [hovered, setHovered] = useState(false);
    const accent = accentFromTech(project.tech || []);
    const isHero = variant === "hero";
    const isWide = variant === "wide";
    const techList = (project.tech || []).slice(0, isHero ? 9 : isWide ? 7 : 5);

    return (
        <motion.article
            className="group relative h-full overflow-hidden rounded-2xl cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ minHeight: isHero ? 280 : isWide ? 240 : 210 }}
        >
            {/* Card base */}
            <div
                className="absolute inset-0 rounded-2xl"
                style={{
                    background: `linear-gradient(145deg, #0f0422 0%, #100228 55%, ${accent}14 100%)`,
                    border: `1px solid ${hovered ? `${accent}55` : `${accent}28`}`,
                    boxShadow: hovered
                        ? `0 0 28px ${accent}24, inset 0 0 28px ${accent}08`
                        : `0 0 0 transparent`,
                    transition: "all .35s ease",
                }}
            />

            {/* Top accent line */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                    background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                    opacity: hovered ? 1 : 0.35,
                }}
            />

            {/* Glow orb */}
            <div
                className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500"
                style={{ background: accent, opacity: hovered ? 0.12 : 0.05 }}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col p-5 md:p-6">
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                    <span
                        className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest"
                        style={{
                            background: `${accent}18`,
                            color: accent,
                            border: `1px solid ${accent}35`,
                        }}
                    >
                        {project.category || "Project"}
                    </span>
                    <span className="text-[11px] font-mono text-[#5a3c83]">
                        #{String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                {/* Title */}
                <h3
                    className={`mt-3 font-extrabold leading-tight tracking-tight ${
                        isHero
                            ? "text-3xl md:text-4xl"
                            : isWide
                              ? "text-2xl"
                              : "text-lg"
                    }`}
                    style={{ color: hovered ? "#fff" : "#f0eaff" }}
                >
                    {project.title}
                </h3>

                {(isHero || isWide) && project.description ? (
                    <p className="mt-2 text-sm text-[#9f86c6] leading-relaxed line-clamp-2">
                        {project.description}
                    </p>
                ) : null}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Tech chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {techList.map((tech) => {
                        const { Icon, color } = techIcon(tech);
                        return (
                            <span
                                key={tech}
                                className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium"
                                style={{
                                    background: "#0a0118",
                                    border: `1px solid ${color}28`,
                                    color: "#d4c4ff",
                                }}
                            >
                                <Icon
                                    style={{
                                        color,
                                        fontSize: "0.8rem",
                                        flexShrink: 0,
                                    }}
                                />
                                {tech}
                            </span>
                        );
                    })}
                </div>

                {/* Hover CTA */}
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.2 }}
                            className="mt-3 flex items-center gap-1.5 text-xs font-semibold"
                            style={{ color: accent }}
                        >
                            View details{" "}
                            <FaArrowRight style={{ fontSize: "0.7rem" }} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.article>
    );
}

export default ProjectCard;

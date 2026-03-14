import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../../assets/hero.png";
import samadhan from "../../assets/samadhan.jpg";

import {
    SiReact,
    SiJavascript,
    SiTailwindcss,
    SiHtml5,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiDocker,
    SiKubernetes,
    SiGithubactions,
    SiTerraform,
    SiLinux,
    SiSolidity,
    SiEthereum,
    SiGithub,
} from "react-icons/si";
import {
    FaCss3,
    FaLinkedin,
    FaMapMarkerAlt,
    FaGraduationCap,
    FaEnvelope,
    FaShieldAlt,
    FaCode,
    FaGlobe,
    FaRocket,
    FaArrowRight,
    FaChevronDown,
    FaChevronUp,
    FaAws,
} from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";

// ── skill icon map ───────────────────────────────────────────────────────────
const skillIcon = (name = "") => {
    const v = name.toLowerCase();
    if (v.includes("react")) return { Icon: SiReact, color: "#61DAFB" };
    if (v.includes("javascript"))
        return { Icon: SiJavascript, color: "#F7DF1E" };
    if (v.includes("tailwind"))
        return { Icon: SiTailwindcss, color: "#38BDF8" };
    if (v === "html") return { Icon: SiHtml5, color: "#E34F26" };
    if (v === "css") return { Icon: FaCss3, color: "#1572B6" };
    if (v.includes("node")) return { Icon: SiNodedotjs, color: "#68A063" };
    if (v.includes("express")) return { Icon: SiExpress, color: "#EAEAEA" };
    if (v.includes("rest")) return { Icon: FaGlobe, color: "#22D3EE" };
    if (v.includes("mongo")) return { Icon: SiMongodb, color: "#47A248" };
    if (v.includes("mysql")) return { Icon: SiMysql, color: "#00758F" };
    if (v.includes("docker")) return { Icon: SiDocker, color: "#2496ED" };
    if (v.includes("kubernetes"))
        return { Icon: SiKubernetes, color: "#326CE5" };
    if (v.includes("github actions"))
        return { Icon: SiGithubactions, color: "#2088FF" };
    if (v.includes("terraform")) return { Icon: SiTerraform, color: "#7B42BC" };
    if (v.includes("linux")) return { Icon: SiLinux, color: "#FCC624" };
    if (v.includes("solidity")) return { Icon: SiSolidity, color: "#9B9B9B" };
    if (v.includes("ethereum")) return { Icon: SiEthereum, color: "#627EEA" };
    if (v.includes("smart contract"))
        return { Icon: FaShieldAlt, color: "#A78BFA" };
    if (v.includes("ethers")) return { Icon: FaCode, color: "#4C6FFF" };
    if (v.includes("web3")) return { Icon: FaGlobe, color: "#F16822" };
    return { Icon: FaCode, color: "#A78BFA" };
};

const categoryIcon = (title = "") => {
    const v = title.toLowerCase();
    if (v.includes("frontend")) return { Icon: SiReact, color: "#61DAFB" };
    if (v.includes("backend")) return { Icon: SiNodedotjs, color: "#68A063" };
    if (v.includes("devops")) return { Icon: SiDocker, color: "#2496ED" };
    if (v.includes("blockchain")) return { Icon: SiEthereum, color: "#627EEA" };
    return { Icon: FaCode, color: "#A78BFA" };
};

// ── data ─────────────────────────────────────────────────────────────────────
const skills = [
    {
        title: "Frontend",
        items: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
        title: "Backend",
        items: ["Node.js", "Express", "REST APIs", "MongoDB", "MySQL"],
    },
    {
        title: "DevOps",
        items: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Linux"],
    },
    {
        title: "Blockchain",
        items: [
            "Solidity",
            "Ethereum",
            "Smart Contracts",
            "Ethers.js",
            "Web3.js",
        ],
    },
];

const pipeline = [
    { label: "Developer", Icon: MdDeveloperMode, color: "#9B51E0" },
    { label: "GitHub", Icon: SiGithub, color: "#EAEAEA" },
    { label: "CI/CD Pipeline", Icon: SiGithubactions, color: "#2088FF" },
    { label: "Docker", Icon: SiDocker, color: "#2496ED" },
    { label: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
    { label: "Production", Icon: FaRocket, color: "#22C55E" },
];

const stats = [
    ["Projects Built", "15+", FaCode],
    ["Technologies Used", "20+", MdDeveloperMode],
    ["GitHub Commits", "1000+", SiGithub],
    ["Years of Development", "3+", FaRocket],
];

const timeline = [
    { year: "2023", text: "Started advanced full stack development projects." },
    { year: "2024", text: "Built multiple large scale MERN applications." },
    {
        year: "2025",
        text: "Focused on DevOps practices including Docker, Kubernetes, and CI/CD pipelines.",
    },
];

// ── variants ──────────────────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

// ── component ─────────────────────────────────────────────────────────────────
function AboutPageContent() {
    const [activeSkill, setActiveSkill] = useState(null);
    const [hoveredStat, setHoveredStat] = useState(null);
    const [pipelineStep, setPipelineStep] = useState(null);

    return (
        <main className="relative min-h-screen overflow-hidden text-[#EAEAEA]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Cabinet+Grotesk:wght@300;400;500;600&display=swap');
                .font-display { font-family: 'Syne', sans-serif; }
                .font-body    { font-family: 'Cabinet Grotesk', sans-serif; }
            `}</style>

            <div className="font-body mx-auto max-w-7xl px-6 py-20 space-y-16">
                {/* ── 1 Hero ── */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h1 className="font-display text-4xl md:text-6xl font-black text-[#9B51E0]">
                        Samadhan Subhash Erande
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-[#d7c6ff]">
                        Full Stack Developer • DevOps Engineer • Blockchain
                        Developer
                    </p>
                    <p className="mt-5 max-w-3xl text-[#cfcfcf]">
                        Developer focused on building scalable applications,
                        designing efficient backend systems, and implementing
                        automated infrastructure using modern DevOps practices.
                    </p>
                </motion.section>

                {/* ── 2 Profile Card ── */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="relative grid md:grid-cols-[360px_1fr] gap-8 rounded-3xl border border-[#7E3AF2]/30 bg-gradient-to-br from-[#0e0320]/95 to-[#120530]/95 p-8 shadow-[0_0_70px_rgba(74,0,224,0.28)] backdrop-blur-md overflow-hidden">
                        {/* bg glows inside card */}
                        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#7E3AF2]/12 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#4A00E0]/12 blur-3xl" />

                        {/* ─ Photo col ─ */}
                        <div className="relative group">
                            <motion.div
                                className="absolute -inset-1.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                style={{
                                    background:
                                        "linear-gradient(135deg,#7E3AF2,#4A00E0,#2563EB)",
                                    filter: "blur(22px)",
                                }}
                            />
                            <motion.img
                                whileHover={{ scale: 1.03 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 180,
                                    damping: 22,
                                }}
                                src={samadhan}
                                alt="Samadhan"
                                className="relative h-[340px] w-full rounded-2xl object-cover border border-[#7E3AF2]/40 shadow-[0_10px_50px_rgba(74,0,224,0.5)] z-10"
                            />
                            {/* Available badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-2.5 rounded-xl bg-black/75 backdrop-blur-md px-4 py-2.5 border border-[#22c55e]/25"
                            >
                                <span className="relative flex h-2.5 w-2.5 shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-60" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
                                </span>
                                <span className="text-sm font-medium text-[#22c55e] tracking-wide">
                                    Available for opportunities
                                </span>
                            </motion.div>
                        </div>

                        {/* ─ Info col ─ */}
                        <div className="flex flex-col justify-between py-1">
                            <div>
                                {/* Name */}
                                <h2 className="font-display text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-[#e0c4ff] via-[#9B51E0] to-[#6D28D9] bg-clip-text text-transparent">
                                    Samadhan Erande
                                </h2>

                                {/* Role pill badges */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {[
                                        {
                                            label: "Full Stack Developer",
                                            Icon: SiReact,
                                            color: "#61DAFB",
                                        },
                                        {
                                            label: "DevOps Engineer",
                                            Icon: SiDocker,
                                            color: "#2496ED",
                                        },
                                        {
                                            label: "Blockchain Developer",
                                            Icon: SiEthereum,
                                            color: "#627EEA",
                                        },
                                    ].map(({ label, Icon, color }) => (
                                        <span
                                            key={label}
                                            className="inline-flex items-center gap-2 rounded-full bg-[#14072b] border border-[#7E3AF2]/30 px-3.5 py-1.5 text-sm font-medium text-[#d8c4ff]"
                                        >
                                            <Icon
                                                style={{
                                                    color,
                                                    fontSize: "0.9rem",
                                                }}
                                            />
                                            {label}
                                        </span>
                                    ))}
                                </div>

                                {/* Location + edu */}
                                <div className="mt-7 space-y-3.5">
                                    {[
                                        {
                                            Icon: FaMapMarkerAlt,
                                            color: "#F05032",
                                            bg: "#F05032",
                                            text: "India",
                                        },
                                        {
                                            Icon: FaGraduationCap,
                                            color: "#FBBF24",
                                            bg: "#FBBF24",
                                            text: "Information Technology — IIIT Vadodara",
                                        },
                                    ].map(({ Icon, color, bg, text }) => (
                                        <div
                                            key={text}
                                            className="flex items-center gap-3"
                                        >
                                            <div
                                                className="flex items-center justify-center h-9 w-9 rounded-xl shrink-0"
                                                style={{
                                                    background: `${bg}15`,
                                                    border: `1px solid ${bg}25`,
                                                }}
                                            >
                                                <Icon
                                                    style={{
                                                        color,
                                                        fontSize: "0.9rem",
                                                    }}
                                                />
                                            </div>
                                            <span className="text-[#d0d0d0] text-base">
                                                {text}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="mt-7 h-px bg-gradient-to-r from-transparent via-[#7E3AF2]/30 to-transparent" />

                                {/* Quick skill chips */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {[
                                        {
                                            Icon: SiReact,
                                            color: "#61DAFB",
                                            label: "React",
                                        },
                                        {
                                            Icon: SiNodedotjs,
                                            color: "#68A063",
                                            label: "Node.js",
                                        },
                                        {
                                            Icon: SiDocker,
                                            color: "#2496ED",
                                            label: "Docker",
                                        },
                                        {
                                            Icon: SiEthereum,
                                            color: "#627EEA",
                                            label: "Ethereum",
                                        },
                                        {
                                            Icon: FaAws,
                                            color: "#FF9900",
                                            label: "AWS",
                                        },
                                        {
                                            Icon: SiKubernetes,
                                            color: "#326CE5",
                                            label: "Kubernetes",
                                        },
                                    ].map(({ Icon, color, label }) => (
                                        <motion.span
                                            key={label}
                                            whileHover={{
                                                scale: 1.1,
                                                y: -3,
                                                boxShadow: `0 6px 18px ${color}30`,
                                            }}
                                            className="flex items-center gap-1.5 rounded-lg bg-[#0a0118] border border-[#7E3AF2]/20 px-3 py-1.5 text-sm text-[#d4c4ff] cursor-default"
                                        >
                                            <Icon
                                                style={{
                                                    color,
                                                    fontSize: "1rem",
                                                }}
                                            />
                                            {label}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA buttons */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                <motion.a
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 0 28px rgba(126,58,242,0.6)",
                                    }}
                                    whileTap={{ scale: 0.96 }}
                                    className="flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#7E3AF2] to-[#4A00E0] px-5 py-2.5 text-sm font-semibold shadow-lg shadow-[#4A00E0]/30"
                                    href="https://github.com/erandesamadhan2003"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <SiGithub style={{ fontSize: "1.1rem" }} />{" "}
                                    GitHub
                                </motion.a>
                                <motion.a
                                    whileHover={{
                                        scale: 1.05,
                                        borderColor: "#0A66C2",
                                        boxShadow:
                                            "0 0 18px rgba(10,102,194,0.3)",
                                    }}
                                    whileTap={{ scale: 0.96 }}
                                    className="flex items-center gap-2.5 rounded-xl border border-[#7E3AF2]/40 bg-[#0e0225] px-5 py-2.5 text-sm font-medium transition-all"
                                    href="https://www.linkedin.com/in/samadhan-erande-103712326/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaLinkedin
                                        style={{
                                            color: "#0A66C2",
                                            fontSize: "1.1rem",
                                        }}
                                    />{" "}
                                    LinkedIn
                                </motion.a>
                                <motion.a
                                    whileHover={{
                                        scale: 1.05,
                                        borderColor: "#EA4335",
                                        boxShadow:
                                            "0 0 18px rgba(234,67,53,0.25)",
                                    }}
                                    whileTap={{ scale: 0.96 }}
                                    className="flex items-center gap-2.5 rounded-xl border border-[#7E3AF2]/40 bg-[#0e0225] px-5 py-2.5 text-sm font-medium transition-all"
                                    href="mailto:erandesamadhan2003@gmail.com"
                                >
                                    <FaEnvelope
                                        style={{
                                            color: "#EA4335",
                                            fontSize: "1.1rem",
                                        }}
                                    />{" "}
                                    Email
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ── 3 Professional Overview ── */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h3 className="font-display text-3xl font-bold text-[#9B51E0]">
                        Professional Overview
                    </h3>
                    <p className="mt-4 text-[#d8d8d8] leading-8 max-w-5xl">
                        Samadhan Erande is a software developer currently
                        pursuing Information Technology at IIIT Vadodara. He
                        focuses on designing full-stack web applications,
                        building scalable backend systems, and implementing
                        DevOps pipelines that automate software deployment and
                        infrastructure management. His experience includes
                        modern web development frameworks such as React,
                        Node.js, and Express, along with database systems
                        including MongoDB and MySQL. In addition to application
                        development, he works with DevOps technologies such as
                        Docker, Kubernetes, GitHub Actions, and Terraform to
                        create reliable cloud-native systems. He has also
                        explored blockchain-based application development using
                        Solidity and Ethereum.
                    </p>
                </motion.section>

                {/* ── 4 Skills Grid ── */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                >
                    <h3 className="font-display text-3xl font-bold text-[#9B51E0] mb-6">
                        Technical Skills
                    </h3>
                    <div className="grid gap-5 md:grid-cols-2">
                        {skills.map((s) => {
                            const { Icon: CatIcon, color: catColor } =
                                categoryIcon(s.title);
                            const isOpen = activeSkill === s.title;
                            return (
                                <motion.div
                                    key={s.title}
                                    whileHover={{
                                        y: -6,
                                        boxShadow:
                                            "0 0 28px rgba(126,58,242,0.38)",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 140,
                                        damping: 14,
                                    }}
                                    className="rounded-xl border border-[#7E3AF2]/35 bg-black/25 p-5 cursor-pointer"
                                    onClick={() =>
                                        setActiveSkill(isOpen ? null : s.title)
                                    }
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-[#14072b] border border-[#7E3AF2]/30">
                                                <CatIcon
                                                    style={{
                                                        color: catColor,
                                                        fontSize: "1.2rem",
                                                    }}
                                                />
                                            </div>
                                            <p className="font-display text-xl font-semibold text-[#d8c4ff]">
                                                {s.title}
                                            </p>
                                        </div>
                                        {isOpen ? (
                                            <FaChevronUp
                                                style={{ color: "#9B51E0" }}
                                            />
                                        ) : (
                                            <FaChevronDown
                                                style={{ color: "#7E3AF2" }}
                                            />
                                        )}
                                    </div>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    height: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    height: "auto",
                                                }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {s.items.map((item) => {
                                                        const { Icon, color } =
                                                            skillIcon(item);
                                                        return (
                                                            <motion.span
                                                                key={item}
                                                                initial={{
                                                                    opacity: 0,
                                                                    scale: 0.8,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    scale: 1,
                                                                }}
                                                                whileHover={{
                                                                    scale: 1.08,
                                                                    y: -2,
                                                                }}
                                                                className="inline-flex items-center gap-1.5 rounded-md bg-[#14072b] px-3 py-1.5 text-sm border border-[#7E3AF2]/35"
                                                            >
                                                                <Icon
                                                                    style={{
                                                                        color,
                                                                        fontSize:
                                                                            "0.95rem",
                                                                    }}
                                                                />
                                                                <span>
                                                                    {item}
                                                                </span>
                                                            </motion.span>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {!isOpen && (
                                        <div className="mt-3 flex flex-wrap gap-1.5">
                                            {s.items.map((item) => {
                                                const { Icon, color } =
                                                    skillIcon(item);
                                                return (
                                                    <span
                                                        key={item}
                                                        title={item}
                                                        className="flex items-center justify-center h-7 w-7 rounded-md bg-[#14072b] border border-[#7E3AF2]/25"
                                                    >
                                                        <Icon
                                                            style={{
                                                                color,
                                                                fontSize:
                                                                    "0.85rem",
                                                            }}
                                                        />
                                                    </span>
                                                );
                                            })}
                                            <span className="text-xs text-[#7E3AF2] flex items-center ml-1">
                                                tap to expand
                                            </span>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* ── 5 DevOps Architecture ── */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h3 className="font-display text-3xl font-bold text-[#9B51E0] mb-6">
                        DevOps Architecture
                    </h3>
                    <div className="rounded-xl border border-[#7E3AF2]/35 bg-black/25 p-6">
                        <div className="flex flex-wrap items-center gap-3">
                            {pipeline.map(({ label, Icon, color }, idx) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-3"
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.08,
                                            boxShadow: `0 0 18px ${color}55`,
                                        }}
                                        onHoverStart={() =>
                                            setPipelineStep(idx)
                                        }
                                        onHoverEnd={() => setPipelineStep(null)}
                                        className="flex items-center gap-2 rounded-md border border-[#7E3AF2]/40 bg-[#12052b] px-3 py-2 text-sm cursor-default transition-all"
                                        style={
                                            pipelineStep === idx
                                                ? { borderColor: color }
                                                : {}
                                        }
                                    >
                                        <Icon
                                            style={{ color, fontSize: "1rem" }}
                                        />
                                        <span
                                            style={
                                                pipelineStep === idx
                                                    ? { color }
                                                    : {}
                                            }
                                        >
                                            {label}
                                        </span>
                                    </motion.div>
                                    {idx < pipeline.length - 1 && (
                                        <motion.span
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{
                                                duration: 1.2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            style={{ color: "#22c55e" }}
                                        >
                                            <FaArrowRight />
                                        </motion.span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* ── 6 Stats ── */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h3 className="font-display text-3xl font-bold text-[#9B51E0] mb-6">
                        Developer Statistics
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map(([k, v, Icon], i) => (
                            <motion.div
                                key={k}
                                whileHover={{ y: -6, scale: 1.03 }}
                                onHoverStart={() => setHoveredStat(i)}
                                onHoverEnd={() => setHoveredStat(null)}
                                className="rounded-xl p-px bg-gradient-to-r from-[#7E3AF2] to-[#4A00E0] cursor-default"
                            >
                                <div className="rounded-xl bg-[#110626] p-4 text-center h-full flex flex-col items-center justify-center gap-2">
                                    <motion.div
                                        animate={
                                            hoveredStat === i
                                                ? { rotate: 360 }
                                                : { rotate: 0 }
                                        }
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon
                                            style={{
                                                color:
                                                    hoveredStat === i
                                                        ? "#9B51E0"
                                                        : "#7E3AF2",
                                                fontSize: "1.4rem",
                                            }}
                                        />
                                    </motion.div>
                                    <p className="font-display text-2xl font-bold text-[#e9ddff]">
                                        {v}
                                    </p>
                                    <p className="text-xs text-[#c7b4ef]">
                                        {k}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ── 7 Timeline ── */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h3 className="font-display text-3xl font-bold text-[#9B51E0] mb-6">
                        Career Timeline
                    </h3>
                    <div className="relative border-l-2 border-[#7E3AF2]/40 pl-8 space-y-8">
                        {timeline.map(({ year, text }, i) => (
                            <motion.div
                                key={year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <span className="absolute -left-[2.6rem] top-1 flex items-center justify-center h-5 w-5 rounded-full bg-[#22c55e] border-2 border-[#0D021F]">
                                    <span className="h-2 w-2 rounded-full bg-white" />
                                </span>
                                <motion.div
                                    whileHover={{
                                        x: 6,
                                        boxShadow:
                                            "0 0 20px rgba(126,58,242,0.25)",
                                    }}
                                    className="rounded-xl border border-[#7E3AF2]/25 bg-black/20 p-4"
                                >
                                    <p className="font-display font-bold text-[#9B51E0] text-lg">
                                        {year}
                                    </p>
                                    <p className="text-[#cfcfcf] mt-1">
                                        {text}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </main>
    );
}

export default AboutPageContent;

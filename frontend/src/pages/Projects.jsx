import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useProjects } from "../hooks/useProjects";
import ProjectCard from "../components/project/ProjectCard";
import ProjectDetailsDialog from "../components/project/ProjectDetailsDialog";
import { FaTerminal } from "react-icons/fa";

function Projects() {
    const { projects, loading, error, fetchProjects } = useProjects();
    const [activeIndex, setActiveIndex] = useState(null);
    const [cmd, setCmd] = useState("");
    const [cmdError, setCmdError] = useState("");

    const indexedProjects = useMemo(
        () => projects.map((p, i) => ({ ...p, __index: i })),
        [projects],
    );

    const getSpanClass = (i) => {
        if (i === 0) return "md:col-span-12";
        return i % 4 === 1 || i % 4 === 0 ? "md:col-span-7" : "md:col-span-5";
    };

    const getVariant = (i) => {
        if (i === 0) return "hero";
        return i % 4 === 1 || i % 4 === 0 ? "wide" : "compact";
    };

    const runCatCommand = (value) => {
        const match = value.trim().match(/^cat\s+(.+)$/i);
        if (!match) {
            setCmdError("Invalid command. Use: cat <ProjectName>");
            return;
        }
        const idx = findProjectIndexByName(match[1]);
        if (idx < 0) {
            setCmdError(
                `Project not found: "${cleanCommandName(match[1])}". Try Tab autocomplete.`,
            );
            return;
        }
        setCmdError("");
        setActiveIndex(idx);
    };

    const onCommandKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            runCatCommand(cmd);
            return;
        }
        if (e.key === "Tab") {
            e.preventDefault();
            const match = cmd.match(/^cat\s*(.*)$/i);
            if (!match) return;
            const partial = cleanCommandName(match[1] || "").toLowerCase();
            const hits = indexedProjects.filter((p) =>
                p.title.toLowerCase().startsWith(partial),
            );
            if (hits.length === 1) {
                setCmd(`cat ${hits[0].title}`);
                setCmdError("");
            } else if (hits.length > 1) {
                setCmdError(
                    `Matches: ${hits
                        .slice(0, 3)
                        .map((m) => m.title)
                        .join(" | ")}${hits.length > 3 ? " …" : ""}`,
                );
            }
        }
    };

    const findProjectIndexByName = (name) => {
        const norm = normalizeTitle(cleanCommandName(name));
        if (!norm) return -1;
        let idx = indexedProjects.findIndex(
            (p) => normalizeTitle(p.title) === norm,
        );
        if (idx >= 0) return idx;
        idx = indexedProjects.findIndex((p) =>
            normalizeTitle(p.title).startsWith(norm),
        );
        if (idx >= 0) return idx;
        return indexedProjects.findIndex((p) =>
            normalizeTitle(p.title).includes(norm),
        );
    };

    const normalizeTitle = (value = "") =>
        value
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, " ")
            .trim();
    const cleanCommandName = (raw = "") =>
        raw
            .trim()
            .replace(/^<|>$/g, "")
            .replace(/^["']|["']$/g, "");

    // Bento layout: index 0 = featured (2×2), rest fill normally
    const featured = indexedProjects[0] || null;
    const rest = indexedProjects.slice(1);

    return (
        <main className="min-h-screen px-6 py-10 text-[#EAEAEA]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
                .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
                @keyframes termCursor { 0%,100%{opacity:1} 50%{opacity:0} }
                .term-cursor { animation: termCursor 1s step-end infinite; }
            `}</style>

            <div className="font-jakarta mx-auto max-w-7xl space-y-10">
                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6a45a0] mb-2">
                        Portfolio
                    </p>
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#e0c4ff] via-[#9B51E0] to-[#6D28D9] bg-clip-text text-transparent">
                        Projects
                    </h2>
                    <p className="mt-2 text-sm text-[#6a50a0]">
                        {indexedProjects.length} projects — click any card or
                        use the terminal
                    </p>
                </motion.div>

                {/* ── Terminal ── */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.55 }}
                    className="rounded-2xl border border-[#7E3AF2]/25 bg-[#05010e] overflow-hidden shadow-[0_0_30px_rgba(74,0,224,0.15)]"
                >
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0b031e] border-b border-[#7E3AF2]/15">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                        <span className="ml-3 text-[11px] text-[#4a3070] font-mono">
                            samadhan@portfolio — ~/projects
                        </span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3">
                        <FaTerminal
                            style={{
                                color: "#7E3AF2",
                                fontSize: "0.8rem",
                                flexShrink: 0,
                            }}
                        />
                        <span className="text-[#6a4590] text-sm font-mono whitespace-nowrap">
                            ~/projects$
                        </span>
                        <input
                            value={cmd}
                            onChange={(e) => setCmd(e.target.value)}
                            onKeyDown={onCommandKeyDown}
                            className="flex-1 bg-transparent outline-none text-[#22c55e] font-mono text-sm placeholder:text-[#2a1550]"
                            placeholder="cat <Project Name>   — open project details"
                        />
                        <span className="term-cursor text-[#22c55e] font-mono text-sm select-none">
                            ▋
                        </span>
                    </div>
                    {cmdError && (
                        <p className="px-4 pb-3 text-xs text-red-400 font-mono">
                            bash: {cmdError}
                        </p>
                    )}
                </motion.div>

                {/* ── Loading / Error ── */}
                {loading && (
                    <div className="flex items-center gap-3 text-[#9272c0] text-sm">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="h-4 w-4 rounded-full border-2 border-[#7E3AF2] border-t-transparent"
                        />
                        Loading projects…
                    </div>
                )}
                {error && (
                    <div className="rounded-xl border border-red-500/25 bg-red-950/20 p-4 text-sm">
                        <p className="text-red-400">{error}</p>
                        <button
                            onClick={fetchProjects}
                            className="mt-2 px-4 py-1.5 rounded-lg bg-[#7E3AF2] text-white text-xs hover:bg-[#9B51E0]"
                        >
                            Retry
                        </button>
                    </div>
                )}

                {/* ── Bento Grid ── */}
                {!loading && !error && indexedProjects.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 gap-4 md:grid-cols-12"
                    >
                        {indexedProjects.map((project, i) => (
                            <motion.div
                                key={`${project.title}-${i}`}
                                className={getSpanClass(i)}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.22 + i * 0.06,
                                    duration: 0.45,
                                }}
                            >
                                <ProjectCard
                                    project={project}
                                    index={project.__index}
                                    variant={getVariant(i)}
                                    onClick={() =>
                                        setActiveIndex(project.__index)
                                    }
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

            <ProjectDetailsDialog
                project={
                    activeIndex !== null ? indexedProjects[activeIndex] : null
                }
                index={activeIndex}
                open={activeIndex !== null}
                onOpenChange={(open) => !open && setActiveIndex(null)}
            />
        </main>
    );
}

export default Projects;

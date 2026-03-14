import { motion } from "framer-motion";
import {
    SiReact,
    SiNodedotjs,
    SiDocker,
    SiKubernetes,
    SiMongodb,
    SiTerraform,
    SiGit,
    SiLinux,
    SiHtml5,
    SiJavascript,
    SiTypescript,
    SiAngular,
    SiTailwindcss,
    SiCplusplus,
    SiPython,
    SiExpress,
    SiPostman,
    SiMysql,
    SiPostgresql,
    SiEthereum,
    SiSolidity,
    SiGithub,
    SiGithubactions,
    SiNextdotjs,
    SiElectron,
} from "react-icons/si";
import {
    FaAws,
    FaCss3,
    FaTerminal,
    FaShieldAlt,
    FaRocket,
    FaGlobe,
    FaMicrochip,
    FaAward,
    FaTrophy,
    FaCode,
} from "react-icons/fa";

const getSkillVisual = (name = "") => {
    const key = name.toLowerCase();

    if (key === "html5" || key === "html")
        return { Icon: SiHtml5, color: "#E34F26" };
    if (key === "css3" || key === "css")
        return { Icon: FaCss3, color: "#1572B6" };
    if (key.includes("javascript"))
        return { Icon: SiJavascript, color: "#F7DF1E" };
    if (key.includes("typescript"))
        return { Icon: SiTypescript, color: "#3178C6" };
    if (key.includes("react native"))
        return { Icon: SiReact, color: "#61DAFB" };
    if (key.includes("react.js") || key === "react")
        return { Icon: SiReact, color: "#61DAFB" };
    if (key.includes("angular")) return { Icon: SiAngular, color: "#DD0031" };
    if (key.includes("tailwind"))
        return { Icon: SiTailwindcss, color: "#38BDF8" };
    if (key === "c++") return { Icon: SiCplusplus, color: "#00599C" };
    if (key === "c") return { Icon: FaCode, color: "#A8B9CC" };
    if (key === "python") return { Icon: SiPython, color: "#3776AB" };
    if (key === "solidity") return { Icon: SiSolidity, color: "#363636" };
    if (key.includes("node")) return { Icon: SiNodedotjs, color: "#68A063" };
    if (key.includes("express")) return { Icon: SiExpress, color: "#EAEAEA" };
    if (key.includes("rest")) return { Icon: FaGlobe, color: "#22D3EE" };
    if (key.includes("websocket")) return { Icon: FaGlobe, color: "#22D3EE" };
    if (key.includes("postman")) return { Icon: SiPostman, color: "#FF6C37" };
    if (key.includes("mongo")) return { Icon: SiMongodb, color: "#47A248" };
    if (key.includes("mysql")) return { Icon: SiMysql, color: "#00758F" };
    if (key.includes("postgres"))
        return { Icon: SiPostgresql, color: "#336791" };
    if (key.includes("docker")) return { Icon: SiDocker, color: "#2496ED" };
    if (key.includes("kubernetes"))
        return { Icon: SiKubernetes, color: "#326CE5" };
    if (key.includes("terraform"))
        return { Icon: SiTerraform, color: "#7B42BC" };
    if (key.includes("github actions"))
        return { Icon: SiGithubactions, color: "#2088FF" };
    if (key.includes("ci/cd")) return { Icon: FaRocket, color: "#22C55E" };
    if (key.includes("aws")) return { Icon: FaAws, color: "#FF9900" };
    if (key.includes("linux")) return { Icon: SiLinux, color: "#FCC624" };
    if (key === "git") return { Icon: SiGit, color: "#F05032" };
    if (key.includes("github")) return { Icon: SiGithub, color: "#EAEAEA" };
    if (key.includes("ethereum")) return { Icon: SiEthereum, color: "#627EEA" };
    if (key.includes("smart contract"))
        return { Icon: FaShieldAlt, color: "#A78BFA" };
    if (key.includes("ethers")) return { Icon: FaGlobe, color: "#4C6FFF" };
    if (key.includes("web3")) return { Icon: FaGlobe, color: "#F16822" };
    if (key.includes("hardhat")) return { Icon: FaMicrochip, color: "#FFF100" };
    if (key.includes("openzeppelin"))
        return { Icon: FaShieldAlt, color: "#4E5EE4" };
    if (key.includes("electron")) return { Icon: SiElectron, color: "#47848F" };
    if (key.includes("next")) return { Icon: SiNextdotjs, color: "#EAEAEA" };

    return { Icon: FaCode, color: "#A78BFA" };
};

const movingRows = [
    {
        label: "Languages",
        items: ["C", "C++", "JavaScript", "Python", "Solidity", "TypeScript"],
        dir: "l",
    },
    {
        label: "Web & Frameworks",
        items: [
            "HTML5",
            "CSS3",
            "React.js",
            "React Native",
            "Angular",
            "Node.js",
        ],
        dir: "r",
    },
    {
        label: "Backend & Databases",
        items: [
            "Express.js",
            "REST APIs",
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "WebSockets",
        ],
        dir: "l",
    },
    {
        label: "DevOps & Cloud",
        items: [
            "Docker",
            "Kubernetes",
            "GitHub Actions",
            "CI/CD",
            "Linux",
            "Terraform",
            "AWS",
        ],
        dir: "r",
    },
    {
        label: "Blockchain & Tools",
        items: [
            "Ethereum",
            "Smart Contracts",
            "Ethers.js",
            "Hardhat",
            "OpenZeppelin",
            "Git",
            "GitHub",
            "Postman",
        ],
        dir: "l",
    },
];

const achievements = [
    {
        icon: FaAward,
        title: "HackIIITV 2025 Winner | 1st Place | IIIT Vadodara",
        body: "Apr 2025 — Secured 1st place among 50+ teams by building an AI-powered real-time collaborative coding platform with low-latency synchronization.",
    },
    {
        icon: FaTrophy,
        title: "Competitive Programming | LeetCode & GeeksforGeeks",
        body: "2023 – Present — Solved 400+ DSA problems, strengthening problem-solving and algorithmic thinking.",
    },
];

const stats = [
    ["Projects Completed", "15+"],
    ["Technologies Used", "20+"],
    ["GitHub Repositories", "30+"],
    ["Years of Programming", "3+"],
];

function SkillsAchievementsContent() {
    return (
        <main className="relative min-h-screen  text-[#EAEAEA] overflow-hidden">
            <style>
                {`
                  @keyframes marqueeL { from { transform: translateX(0);} to { transform: translateX(-50%);} }
                  @keyframes marqueeR { from { transform: translateX(-50%);} to { transform: translateX(0);} }
                  .marquee-l { animation: marqueeL 38s linear infinite; }
                  .marquee-r { animation: marqueeR 42s linear infinite; }
                `}
            </style>

            <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#7E3AF2]/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-10 right-20 h-72 w-72 rounded-full bg-[#4A00E0]/20 blur-3xl" />

            <div className="mx-auto max-w-7xl px-6 py-20 space-y-16">
                {/* Hero */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-[#9B51E0]">
                        Technical Skills & Achievements
                    </h1>
                </motion.section>

                {/* Moving rows with category labels */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    {movingRows.map((row, idx) => (
                        <div key={idx} className="space-y-2">
                            {/* Category label */}
                            <div className="flex items-center gap-4 px-1">
                                <div className="flex-1 h-px bg-[#7E3AF2]/25" />
                                <span className="text-lg font-bold uppercase tracking-widest text-[#9B51E0]">
                                    {row.label}
                                </span>
                                <div className="flex-1 h-px bg-[#7E3AF2]/25" />
                            </div>

                            {/* Scrolling row */}
                            <div className="overflow-hidden rounded-xl border border-[#7E3AF2]/25 bg-black/20 p-2">
                                <div
                                    className={`flex w-[200%] gap-3 ${row.dir === "l" ? "marquee-l" : "marquee-r"}`}
                                >
                                    {[...row.items, ...row.items].map(
                                        (name, i) => {
                                            const { Icon: SkillIcon, color } =
                                                getSkillVisual(name);
                                            return (
                                                <div
                                                    key={`${name}-${i}`}
                                                    className="min-w-42.5 rounded-xl bg-[#1a0833] p-5 text-center hover:scale-110 transition-all border border-[#7E3AF2]/30"
                                                >
                                                    <SkillIcon
                                                        className="mx-auto mb-2"
                                                        style={{
                                                            color,
                                                            fontSize: "2.5rem",
                                                        }}
                                                    />
                                                    <p className="text-sm">
                                                        {name}
                                                    </p>
                                                </div>
                                            );
                                        },
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.section>

                {/* Achievements */}
                <section>
                    <h3 className="text-3xl font-bold text-[#9B51E0] mb-6">
                        Achievements
                    </h3>
                    <div className="relative border-l border-[#7E3AF2]/40 pl-6 space-y-5">
                        {achievements.map((a, i) => {
                            const Icon = a.icon;
                            return (
                                <motion.div
                                    key={a.title}
                                    initial={{ opacity: 0, x: -18 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.12 }}
                                    viewport={{ once: true }}
                                    className="relative rounded-xl border border-[#7E3AF2]/35 bg-[#14072b]/80 p-4 shadow-[0_0_15px_rgba(74,0,224,0.25)]"
                                >
                                    <span className="absolute -left-8.25 top-6 h-3 w-3 rounded-full bg-[#22c55e]" />
                                    <div className="flex items-start gap-3">
                                        <Icon
                                            style={{
                                                color: "#9B51E0",
                                                fontSize: "1.25rem",
                                                marginTop: "0.25rem",
                                                flexShrink: 0,
                                            }}
                                        />
                                        <div>
                                            <p className="font-semibold">
                                                {a.title}
                                            </p>
                                            <p className="text-sm text-[#463e3e] mt-1">
                                                {a.body}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Stats */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map(([k, v]) => (
                        <motion.div
                            key={k}
                            whileHover={{ y: -4 }}
                            className="rounded-xl p-px bg-linear-to-r from-[#7E3AF2] to-[#4A00E0]"
                        >
                            <div className="rounded-xl bg-[#110626] p-4 text-center">
                                <p className="text-2xl font-bold">{v}</p>
                                <p className="text-xs text-[#c7b4ef] mt-1">
                                    {k}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Terminal footer */}
                <section>
                    <h3 className="text-2xl font-bold text-[#9B51E0] mb-4">
                        Developer Terminal
                    </h3>
                    <div className="rounded-xl border border-[#22c55e]/35 bg-black shadow-lg shadow-[#22c55e]/10 p-4 font-mono text-[#22c55e]">
                        <p>samadhan@portfolio:~$ show skills</p>
                        <p className="mt-2">Frontend</p>
                        <p>Backend</p>
                        <p>DevOps</p>
                        <p>Blockchain</p>
                        <div className="mt-2 flex items-center gap-2 text-[#9B51E0]">
                            <FaTerminal style={{ fontSize: "1rem" }} />
                            <span>Ready</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default SkillsAchievementsContent;

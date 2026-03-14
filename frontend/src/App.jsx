import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { TerminalProvider } from "./context/TerminalContext";
import SplashScreen from "./components/splashScreen/SplashScreen";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FloatingTerminal from "./components/terminal/FloatingTerminal";
import TerminalDrawer from "./components/terminal/TerminalDrawer";
import About from "./pages/About";
import SkillsAchievements from "./pages/SkillsAchievements";

import {
    SiReact,
    SiNodedotjs,
    SiDocker,
    SiKubernetes,
    SiGit,
    SiLinux,
    SiPython,
    SiTypescript,
    SiRust,
    SiGo,
    SiMongodb,
    SiPostgresql,
    SiTerraform,
    SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const floatingIcons = [
    { Icon: SiReact, color: "#61DAFB", x: "8%", y: "12%", size: 72, dur: 13 },
    {
        Icon: SiNodedotjs,
        color: "#68A063",
        x: "88%",
        y: "18%",
        size: 62,
        dur: 17,
    },
    { Icon: SiDocker, color: "#2496ED", x: "15%", y: "72%", size: 68, dur: 15 },
    {
        Icon: SiKubernetes,
        color: "#326CE5",
        x: "82%",
        y: "68%",
        size: 60,
        dur: 19,
    },
    { Icon: SiGit, color: "#F05032", x: "47%", y: "8%", size: 56, dur: 11 },
    { Icon: SiLinux, color: "#FCC624", x: "5%", y: "44%", size: 58, dur: 16 },
    { Icon: SiPython, color: "#3776AB", x: "92%", y: "44%", size: 64, dur: 14 },
    {
        Icon: SiTypescript,
        color: "#3178C6",
        x: "35%",
        y: "88%",
        size: 54,
        dur: 18,
    },
    { Icon: SiRust, color: "#CE422B", x: "72%", y: "85%", size: 58, dur: 12 },
    { Icon: SiGo, color: "#00ACD7", x: "60%", y: "6%", size: 60, dur: 20 },
    {
        Icon: SiMongodb,
        color: "#47A248",
        x: "24%",
        y: "30%",
        size: 52,
        dur: 22,
    },
    {
        Icon: SiPostgresql,
        color: "#336791",
        x: "76%",
        y: "32%",
        size: 54,
        dur: 21,
    },
    {
        Icon: SiTerraform,
        color: "#7B42BC",
        x: "50%",
        y: "55%",
        size: 50,
        dur: 25,
    },
    { Icon: SiGithub, color: "#E0E0E0", x: "18%", y: "55%", size: 56, dur: 23 },
    { Icon: FaAws, color: "#FF9900", x: "65%", y: "50%", size: 54, dur: 24 },
];

function FuturisticBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            {/* Base deep-space gradient */}
            <div className="absolute inset-0 bg-[#050010]" />

            {/* Animated aurora blobs */}
            <motion.div
                className="absolute rounded-full blur-[120px]"
                style={{
                    width: 600,
                    height: 600,
                    top: "-10%",
                    left: "-10%",
                    background:
                        "radial-gradient(circle, #4A00E0 0%, transparent 70%)",
                    opacity: 0.35,
                }}
                animate={{
                    x: [0, 80, -40, 0],
                    y: [0, 60, -30, 0],
                    scale: [1, 1.15, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute rounded-full blur-[100px]"
                style={{
                    width: 500,
                    height: 500,
                    bottom: "-5%",
                    right: "-5%",
                    background:
                        "radial-gradient(circle, #7E3AF2 0%, transparent 70%)",
                    opacity: 0.3,
                }}
                animate={{
                    x: [0, -60, 40, 0],
                    y: [0, -50, 20, 0],
                    scale: [1, 0.9, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute rounded-full blur-[140px]"
                style={{
                    width: 400,
                    height: 400,
                    top: "30%",
                    left: "35%",
                    background:
                        "radial-gradient(circle, #2563EB 0%, transparent 70%)",
                    opacity: 0.2,
                }}
                animate={{
                    x: [0, 50, -70, 0],
                    y: [0, -40, 60, 0],
                    scale: [1, 1.3, 0.85, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute rounded-full blur-[90px]"
                style={{
                    width: 300,
                    height: 300,
                    top: "55%",
                    right: "25%",
                    background:
                        "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
                    opacity: 0.18,
                }}
                animate={{ x: [0, -40, 30, 0], y: [0, 30, -50, 0] }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Fine dot grid */}
            <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(126,58,242,0.6) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Scanline overlay for CRT depth */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)",
                }}
            />

            {/* Diagonal glowing beam top-left → bottom-right */}
            <div
                className="absolute opacity-[0.07]"
                style={{
                    width: "200%",
                    height: "2px",
                    background:
                        "linear-gradient(90deg, transparent, #9B51E0, #61DAFB, transparent)",
                    top: "38%",
                    left: "-50%",
                    transform: "rotate(-30deg)",
                    filter: "blur(2px)",
                }}
            />
            <div
                className="absolute opacity-[0.05]"
                style={{
                    width: "200%",
                    height: "1px",
                    background:
                        "linear-gradient(90deg, transparent, #2496ED, #47A248, transparent)",
                    top: "62%",
                    left: "-50%",
                    transform: "rotate(-30deg)",
                    filter: "blur(1px)",
                }}
            />

            {/* Floating tech icons */}
            {floatingIcons.map(({ Icon, color, x, y, size, dur }, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: x, top: y }}
                    animate={{
                        y: [0, -22, 10, -8, 0],
                        x: [0, 8, -6, 4, 0],
                        rotate: [0, 8, -6, 3, 0],
                        opacity: [0.12, 0.22, 0.14, 0.2, 0.12],
                    }}
                    transition={{
                        duration: dur,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.7,
                    }}
                >
                    <Icon
                        style={{
                            fontSize: size,
                            color,
                            filter: `drop-shadow(0 0 10px ${color}88)`,
                        }}
                    />
                </motion.div>
            ))}

            {/* Corner vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 40%, rgba(5,0,16,0.85) 100%)",
                }}
            />
        </div>
    );
}

function AppLayout() {
    const location = useLocation();
    const isSplash = location.pathname === "/";
    const isDashboard = location.pathname === "/dashboard";

    return (
        <div className="relative isolate">
            {!isSplash && <FuturisticBackground />}

            <div className="relative z-10">
                <Routes>
                    <Route path="/" element={<SplashScreen />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/skills-achievements"
                        element={<SkillsAchievements />}
                    />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>

            {!isSplash && !isDashboard && (
                <>
                    <style>
                        {`
                              /* drawer terminal only */
                              .drawer-terminal-scope .h-56 {
                                height: calc(100% - 72px) !important;
                              }
                              .drawer-terminal-scope .border-t {
                                padding-top: 8px !important;
                                padding-bottom: 8px !important;
                              }
                              .drawer-terminal-scope input {
                                font-size: 14px !important;
                              }
                              .drawer-terminal-scope .h-56 {
                                scrollbar-width: thin;
                                scrollbar-color: #7E3AF2 #05010d;
                              }
                              .drawer-terminal-scope .h-56::-webkit-scrollbar {
                                width: 10px;
                              }
                              .drawer-terminal-scope .h-56::-webkit-scrollbar-track {
                                background: #05010d;
                                border-radius: 9999px;
                              }
                              .drawer-terminal-scope .h-56::-webkit-scrollbar-thumb {
                                background: linear-gradient(180deg, #9B51E0, #4A00E0);
                                border: 2px solid #05010d;
                                border-radius: 9999px;
                              }
                              .drawer-terminal-scope .h-56::-webkit-scrollbar-thumb:hover {
                                background: linear-gradient(180deg, #B06BFF, #6C2BFF);
                              }
                            `}
                    </style>
                    <FloatingTerminal />
                    <div className="drawer-terminal-scope">
                        <TerminalDrawer />
                    </div>
                </>
            )}
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <TerminalProvider>
                <AppLayout />
            </TerminalProvider>
        </BrowserRouter>
    );
}

export default App;

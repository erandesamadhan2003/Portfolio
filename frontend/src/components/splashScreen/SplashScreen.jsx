import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTerminal } from "../../context/TerminalContext";

const bootMessages = [
    { text: "Booting Samadhan.dev...", color: "#22c55e", prefix: "[  OK  ]" },
    {
        text: "Loading developer environment...",
        color: "#22c55e",
        prefix: "[  OK  ]",
    },
    { text: "Initializing modules...", color: "#22c55e", prefix: "[  OK  ]" },
    {
        text: "Loading projects service...",
        color: "#22c55e",
        prefix: "[  OK  ]",
    },
    { text: "Loading blog service...", color: "#22c55e", prefix: "[  OK  ]" },
    { text: "Starting terminal...", color: "#22c55e", prefix: "[  OK  ]" },
    { text: "System ready.", color: "#9B51E0", prefix: "[ BOOT ]" },
];

const CHARS =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
const COLS = 40;

function MatrixRain() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animId;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const cols = Math.floor(canvas.width / 18);
        const drops = Array(cols).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(5,0,16,0.08)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drops.forEach((y, i) => {
                const char = CHARS[Math.floor(Math.random() * CHARS.length)];
                const bright = Math.random() > 0.96;
                ctx.font = `${bright ? "bold " : ""}14px monospace`;
                ctx.fillStyle = bright
                    ? "#ffffff"
                    : `rgba(34,197,94,${0.08 + Math.random() * 0.18})`;
                ctx.fillText(char, i * 18, y * 18);
                if (y * 18 > canvas.height && Math.random() > 0.975)
                    drops[i] = 0;
                drops[i]++;
            });

            animId = requestAnimationFrame(draw);
        };
        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-30"
            style={{ pointerEvents: "none" }}
        />
    );
}

function GlitchText({ text }) {
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const id = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 120);
        }, 2800);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="relative select-none">
            <h1
                className="text-5xl md:text-7xl font-black tracking-tighter text-white"
                style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    textShadow: "0 0 40px #9B51E0, 0 0 80px #4A00E0",
                }}
            >
                {text}
            </h1>
            {glitch && (
                <>
                    <h1
                        className="absolute inset-0 text-5xl md:text-7xl font-black tracking-tighter"
                        style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            color: "#22c55e",
                            clipPath: "inset(30% 0 50% 0)",
                            transform: "translateX(-4px)",
                            opacity: 0.8,
                        }}
                    >
                        {text}
                    </h1>
                    <h1
                        className="absolute inset-0 text-5xl md:text-7xl font-black tracking-tighter"
                        style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            color: "#9B51E0",
                            clipPath: "inset(55% 0 20% 0)",
                            transform: "translateX(4px)",
                            opacity: 0.8,
                        }}
                    >
                        {text}
                    </h1>
                </>
            )}
        </div>
    );
}

function ProgressBar({ progress }) {
    return (
        <div className="w-full max-w-xl mx-auto mt-8">
            <div className="flex justify-between text-[10px] font-mono text-[#4a3070] mb-1.5 px-0.5">
                <span>BOOT SEQUENCE</span>
                <span>{Math.round(progress)}%</span>
            </div>
            <div
                className="h-1.5 w-full rounded-full bg-[#12052b] overflow-hidden"
                style={{ border: "1px solid #2a1050" }}
            >
                <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                        width: `${progress}%`,
                        background:
                            "linear-gradient(90deg, #4A00E0, #9B51E0, #22c55e)",
                        boxShadow: "0 0 12px #9B51E0",
                    }}
                />
            </div>
        </div>
    );
}

function OrbitRing({ size, duration, delay, color, opacity = 0.18 }) {
    return (
        <div
            className="absolute rounded-full border pointer-events-none"
            style={{
                width: size,
                height: size,
                top: `calc(50% - ${size / 2}px)`,
                left: `calc(50% - ${size / 2}px)`,
                borderColor: `${color}${Math.round(opacity * 255)
                    .toString(16)
                    .padStart(2, "0")}`,
                animation: `spinRing ${duration}s linear ${delay}s infinite`,
                borderTopColor: color,
                borderTopWidth: 2,
            }}
        />
    );
}

function SplashScreen() {
    const navigate = useNavigate();
    const { openTerminal } = useTerminal();
    const [visibleCount, setVisibleCount] = useState(0);
    const [progress, setProgress] = useState(0);
    const [scanline, setScanline] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleCount((prev) =>
                prev < bootMessages.length ? prev + 1 : prev,
            );
            setProgress((prev) =>
                Math.min(prev + 100 / bootMessages.length, 100),
            );
        }, 800);

        const timer = setTimeout(() => {
            openTerminal();
            navigate("/dashboard");
        }, 7200);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [navigate, openTerminal]);

    return (
        <div className="relative min-h-screen bg-[#050010] text-[#22c55e] font-mono flex flex-col items-center justify-center px-6 overflow-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800;900&display=swap');
                @keyframes spinRing {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes flickerIn {
                    0%   { opacity: 0; transform: translateX(-8px); }
                    60%  { opacity: 1; transform: translateX(2px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes scanMove {
                    0%   { transform: translateY(-100%); }
                    100% { transform: translateY(100vh); }
                }
                @keyframes pulseGlow {
                    0%,100% { opacity: 0.6; }
                    50%     { opacity: 1; }
                }
                @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
                .boot-line { animation: flickerIn 0.35s ease-out forwards; opacity: 0; }
                .cursor-blink { animation: blink 1s step-end infinite; }
            `}</style>

            {/* Matrix rain canvas */}
            <MatrixRain />

            {/* Scanline sweep */}
            <div
                className="pointer-events-none absolute left-0 right-0 h-[2px] z-20"
                style={{
                    background:
                        "linear-gradient(90deg,transparent,rgba(34,197,94,0.4),transparent)",
                    animation: "scanMove 3s linear infinite",
                    boxShadow: "0 0 12px #22c55e",
                }}
            />

            {/* CRT scanlines overlay */}
            <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg,rgba(0,0,0,0.3) 0px,rgba(0,0,0,0.3) 1px,transparent 1px,transparent 3px)",
                    backgroundSize: "100% 3px",
                }}
            />

            {/* Orbit rings */}
            <OrbitRing
                size={520}
                duration={22}
                delay={0}
                color="#7E3AF2"
                opacity={0.12}
            />
            <OrbitRing
                size={680}
                duration={35}
                delay={-8}
                color="#22c55e"
                opacity={0.07}
            />
            <OrbitRing
                size={860}
                duration={50}
                delay={-15}
                color="#9B51E0"
                opacity={0.05}
            />
            <OrbitRing
                size={300}
                duration={14}
                delay={-3}
                color="#4A00E0"
                opacity={0.2}
            />

            {/* Center glow blobs */}
            <div
                className="pointer-events-none absolute w-96 h-96 rounded-full blur-3xl opacity-20"
                style={{
                    background:
                        "radial-gradient(circle,#7E3AF2,transparent 70%)",
                }}
            />
            <div
                className="pointer-events-none absolute w-64 h-64 rounded-full blur-2xl opacity-15 translate-x-40 translate-y-20"
                style={{
                    background:
                        "radial-gradient(circle,#22c55e,transparent 70%)",
                }}
            />

            {/* Corner brackets */}
            {[
                "top-4 left-4 border-t-2 border-l-2",
                "top-4 right-4 border-t-2 border-r-2",
                "bottom-4 left-4 border-b-2 border-l-2",
                "bottom-4 right-4 border-b-2 border-r-2",
            ].map((cls, i) => (
                <div
                    key={i}
                    className={`absolute h-8 w-8 border-[#7E3AF2]/50 ${cls}`}
                />
            ))}

            {/* HUD top bar */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 text-[10px] font-mono text-[#4a3070]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                <span>SAMADHAN.DEV — BOOT SEQUENCE v2.5.0</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            </div>

            {/* Main content */}
            <div className="relative z-30 w-full max-w-2xl flex flex-col items-center text-center space-y-6">
                {/* Glitch name */}
                <GlitchText text="SAMADHAN.DEV" />
                <p className="text-xs tracking-[0.4em] uppercase text-[#6a50a0] -mt-2">
                    Full Stack · DevOps · Blockchain
                </p>

                {/* Progress bar */}
                <ProgressBar progress={progress} />

                {/* Boot log */}
                <div
                    className="w-full max-w-xl rounded-xl overflow-hidden"
                    style={{
                        border: "1px solid #1a0540",
                        background: "rgba(5,0,16,0.85)",
                    }}
                >
                    {/* log title bar */}
                    <div
                        className="flex items-center gap-2 px-4 py-2 border-b"
                        style={{
                            borderColor: "#1a0540",
                            background: "#08021a",
                        }}
                    >
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                        <span className="ml-3 text-[10px] text-[#3a2060]">
                            boot.log
                        </span>
                    </div>

                    {/* log lines */}
                    <div className="px-5 py-4 space-y-1.5 text-left min-h-[180px]">
                        {bootMessages.slice(0, visibleCount).map((msg, i) => (
                            <p
                                key={i}
                                className="boot-line flex items-center gap-3 text-sm"
                                style={{ animationDelay: "0ms" }}
                            >
                                <span
                                    className="text-[10px] font-bold shrink-0 rounded px-1.5 py-0.5"
                                    style={{
                                        color: msg.color,
                                        border: `1px solid ${msg.color}40`,
                                        background: `${msg.color}10`,
                                    }}
                                >
                                    {msg.prefix}
                                </span>
                                <span style={{ color: msg.color }}>
                                    {msg.text}
                                </span>
                            </p>
                        ))}
                        {visibleCount < bootMessages.length && (
                            <span className="cursor-blink inline-block h-4 w-2 bg-[#22c55e] ml-0.5 mt-0.5" />
                        )}
                        {visibleCount >= bootMessages.length && (
                            <p className="text-xs text-[#9B51E0] mt-2 animate-pulse">
                                ▶ Launching dashboard…
                            </p>
                        )}
                    </div>
                </div>

                {/* Bottom hint */}
                <p className="text-[10px] text-[#2e1a50] tracking-widest uppercase">
                    Initializing · Please wait
                </p>
            </div>

            {/* Bottom HUD */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6 text-[9px] font-mono text-[#2e1a50]">
                <span>NODE v20.11.0</span>
                <span>REACT v18.3</span>
                <span>DOCKER READY</span>
                <span>K8S ONLINE</span>
            </div>
        </div>
    );
}

export default SplashScreen;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTerminal } from "../../context/TerminalContext";

const bootMessages = [
    "Booting Samadhan.dev...",
    "Loading developer environment...",
    "Initializing modules...",
    "Loading projects service...",
    "Loading blog service...",
    "Starting terminal...",
    "System ready.",
];

function SplashScreen() {
    const navigate = useNavigate();
    const { openTerminal } = useTerminal();
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleCount((prev) =>
                prev < bootMessages.length ? prev + 1 : prev,
            );
        }, 300);

        const timer = setTimeout(() => {
            openTerminal();
            navigate("/dashboard");
        }, 2500);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [navigate, openTerminal]);

    return (
        <div className="min-h-screen bg-[#0D021F] text-[#22c55e] font-mono flex items-center justify-center px-6">
            <div className="w-full max-w-3xl">
                {bootMessages.slice(0, visibleCount).map((msg, i) => (
                    <p key={i} className="leading-8">
                        {msg}
                    </p>
                ))}
                <span className="inline-block h-5 w-2 bg-[#22c55e] animate-pulse" />
            </div>
        </div>
    );
}

export default SplashScreen;

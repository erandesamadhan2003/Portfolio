import { useEffect, useMemo, useRef, useState } from "react";
import { COMMAND_NAMES } from "../utils/terminalCommand";
import { useTerminal } from "../context/TerminalContext";

function Dashboard() {
    const { logs, executeCommand, commandHistory } = useTerminal();
    const [value, setValue] = useState("");
    const [historyIndex, setHistoryIndex] = useState(null);
    const outputRef = useRef(null);

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [logs]);

    const suggestion = useMemo(
        () =>
            COMMAND_NAMES.find(
                (command) =>
                    command.startsWith(value.toLowerCase()) &&
                    command !== value.toLowerCase(),
            ),
        [value],
    );

    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const command = value;
            setValue("");
            setHistoryIndex(null);
            await executeCommand(command);
            return;
        }

        if (e.key === "ArrowUp" && commandHistory.length) {
            e.preventDefault();
            const nextIndex =
                historyIndex === null
                    ? commandHistory.length - 1
                    : Math.max(0, historyIndex - 1);

            setHistoryIndex(nextIndex);
            setValue(commandHistory[nextIndex]);
        }

        if (e.key === "ArrowDown" && commandHistory.length) {
            e.preventDefault();

            if (historyIndex === null) return;

            const nextIndex = historyIndex + 1;

            if (nextIndex >= commandHistory.length) {
                setHistoryIndex(null);
                setValue("");
                return;
            }

            setHistoryIndex(nextIndex);
            setValue(commandHistory[nextIndex]);
        }
    };

    return (
        <main className="min-h-screen p-3 md:p-6">
            <style>
                {`
                    .dashboard-terminal-scroll {
                        scrollbar-width: thin;
                        scrollbar-color: #7E3AF2 #140725;
                    }

                    .dashboard-terminal-scroll::-webkit-scrollbar {
                        width: 10px;
                    }

                    .dashboard-terminal-scroll::-webkit-scrollbar-track {
                        background: #140725;
                        border-radius: 9999px;
                    }

                    .dashboard-terminal-scroll::-webkit-scrollbar-thumb {
                        background: linear-gradient(180deg, #7E3AF2, #4A00E0);
                        border-radius: 9999px;
                        border: 2px solid #140725;
                    }
                `}
            </style>

            <section className="mx-auto flex h-[calc(100vh-24px)] max-w-7xl flex-col overflow-hidden rounded-2xl border border-[#7E3AF2]/30 bg-[#05010d] shadow-[0_0_30px_rgba(126,58,242,0.18)] md:h-[calc(100vh-48px)]">
                <div className="flex items-center justify-between border-b border-[#7E3AF2]/20 bg-linear-to-r from-[#12052b] via-[#0b031b] to-[#12052b] px-4 py-3">
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <p className="font-mono text-xs text-[#cfc3ff] md:text-sm">
                        samadhan@portfolio — developer terminal
                    </p>
                    <div className="w-14" />
                </div>

                <div
                    ref={outputRef}
                    className="dashboard-terminal-scroll flex-1 overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(74,0,224,0.12),transparent_35%)] p-4 font-mono text-sm text-[#22c55e] md:p-6 md:text-[15px]"
                >
                    {logs.map((line) => (
                        <div
                            key={line.id}
                            className="mb-2 wrap-break-word whitespace-pre-wrap"
                        >
                            {line.role === "input" ? (
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="rounded-md border border-[#7E3AF2]/40 bg-[#1b0a38] px-2 py-1 text-xs font-semibold text-[#cdb7ff] shadow-[0_0_12px_rgba(126,58,242,0.2)]">
                                        samadhan@portfolio:~$
                                    </span>
                                    <span className="text-[#22c55e]">
                                        {line.text}
                                    </span>
                                </div>
                            ) : line.role === "banner" ? (
                                <pre className="mb-4 whitespace-pre-wrap text-[#7E3AF2]">
                                    {line.text}
                                </pre>
                            ) : (
                                <span className="text-[#22c55e]">
                                    {line.text}
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                <div className="border-t border-[#7E3AF2]/20 bg-[#090312] px-4 py-4 md:px-6">
                    <div className="flex items-center gap-3">
                        <span className="rounded-md border border-[#7E3AF2]/40 bg-[#1b0a38] px-2 py-1 font-mono text-xs font-semibold text-[#cdb7ff] shadow-[0_0_12px_rgba(126,58,242,0.2)] md:text-sm">
                            samadhan@portfolio:~$
                        </span>
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            autoFocus
                            autoComplete="off"
                            spellCheck={false}
                            className="flex-1 bg-transparent font-mono text-sm text-[#EAEAEA] outline-none placeholder:text-[#6b5d8f]"
                            placeholder='Type "help" to begin...'
                        />
                        <span className="h-5 w-2 animate-pulse rounded-sm bg-[#22c55e]" />
                    </div>

                    {value && suggestion ? (
                        <p className="mt-2 font-mono text-xs text-[#9B51E0] md:pl-38.75">
                            suggestion: {suggestion}
                        </p>
                    ) : null}
                </div>
            </section>
        </main>
    );
}

export default Dashboard;

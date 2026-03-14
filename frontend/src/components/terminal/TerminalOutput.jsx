import { useEffect, useRef } from "react";

function TerminalOutput({ logs }) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
    }, [logs]);

    return (
        <div
            ref={ref}
            className="h-56 overflow-y-auto p-4 text-[#22c55e] font-mono text-sm"
        >
            {logs.map((line) => (
                <div key={line.id} className="whitespace-pre-wrap wrap-break-word">
                    {line.role === "input" ? (
                        <>
                            <span className="text-[#9B51E0]">
                                samadhan@portfolio:~$
                            </span>{" "}
                            {line.text}
                        </>
                    ) : line.role === "banner" ? (
                        <pre className="whitespace-pre-wrap">{line.text}</pre>
                    ) : (
                        line.text
                    )}
                </div>
            ))}
        </div>
    );
}

export default TerminalOutput;

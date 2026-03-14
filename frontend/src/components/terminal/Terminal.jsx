import { useTerminal } from "../../context/TerminalContext";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";

function Terminal({ className = "" }) {
    const { logs } = useTerminal();

    return (
        <section
            className={`w-full rounded-xl border border-[#22c55e]/40 bg-black shadow-lg shadow-[#22c55e]/10 ${className}`}
        >
            <div className="px-4 py-2 border-b border-[#22c55e]/30 text-xs font-mono text-[#22c55e]/80">
                samadhan@portfolio terminal
            </div>
            <TerminalOutput logs={logs} />
            <TerminalInput />
        </section>
    );
}

export default Terminal;

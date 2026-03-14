import { useTerminal } from "../../context/TerminalContext";

function FloatingTerminal() {
    const { openTerminal } = useTerminal();

    return (
        <button
            onClick={openTerminal}
            className="fixed bottom-6 right-6 z-40 rounded-full bg-[#7E3AF2] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#9B51E0]"
        >
            TERMINAL
        </button>
    );
}

export default FloatingTerminal;

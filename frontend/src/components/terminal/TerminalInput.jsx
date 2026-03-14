import { useMemo, useState } from "react";
import { COMMAND_NAMES } from "../../utils/terminalCommand";
import { useTerminal } from "../../context/TerminalContext";

function TerminalInput() {
    const { executeCommand, commandHistory } = useTerminal();
    const [value, setValue] = useState("");
    const [historyIndex, setHistoryIndex] = useState(null);

    const suggestion = useMemo(
        () =>
            COMMAND_NAMES.find(
                (c) =>
                    c.startsWith(value.toLowerCase()) &&
                    c !== value.toLowerCase(),
            ),
        [value],
    );

    const onKeyDown = async (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const cmd = value;
            setValue("");
            setHistoryIndex(null);
            await executeCommand(cmd);
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
        <div className="border-t border-[#22c55e]/40 p-3 font-mono text-sm text-[#22c55e]">
            <div className="flex items-center gap-2">
                <span className="text-[#9B51E0]">samadhan@portfolio:~$</span>
                <input
                    className="flex-1 bg-transparent outline-none"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={onKeyDown}
                    autoComplete="off"
                    spellCheck={false}
                />
                <span className="h-4 w-2 bg-[#22c55e] animate-pulse" />
            </div>
            {value && suggestion ? (
                <p className="mt-1 text-xs text-[#22c55e]/60">
                    suggestion: {suggestion}
                </p>
            ) : null}
        </div>
    );
}

export default TerminalInput;

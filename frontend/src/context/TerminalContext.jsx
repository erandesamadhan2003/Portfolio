import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
    resolveTerminalCommand,
    TERMINAL_BANNER,
} from "../utils/terminalCommand";

const TerminalContext = createContext(null);

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export const TerminalProvider = ({ children }) => {
    const navigate = useNavigate();
    const [logs, setLogs] = useState([]);
    const [commandHistory, setCommandHistory] = useState([]);
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        setLogs([
            { id: crypto.randomUUID(), role: "banner", text: TERMINAL_BANNER },
        ]);
    }, []);

    const openTerminal = useCallback(() => setDrawerOpen(true), []);
    const closeTerminal = useCallback(() => setDrawerOpen(false), []);
    const clearTerminal = useCallback(() => setLogs([]), []);

    const pushLog = useCallback((role, text) => {
        setLogs((prev) => [...prev, { id: crypto.randomUUID(), role, text }]);
    }, []);

    const typeLine = useCallback(async (line) => {
        const id = crypto.randomUUID();
        setLogs((prev) => [...prev, { id, role: "output", text: "" }]);
        for (let i = 1; i <= line.length; i += 1) {
            await wait(10);
            setLogs((prev) =>
                prev.map((item) =>
                    item.id === id ? { ...item, text: line.slice(0, i) } : item,
                ),
            );
        }
    }, []);

    const executeCommand = useCallback(
        async (raw) => {
            const input = raw.trim();
            if (!input) return;

            pushLog("input", input);
            setCommandHistory((prev) => [...prev, input]);

            const action = resolveTerminalCommand(input);

            if (action.type === "noop") return;
            if (action.type === "clear") {
                clearTerminal();
                return;
            }

            // handle banner re-display
            if (action.type === "banner") {
                setLogs((prev) => [
                    ...prev,
                    {
                        id: crypto.randomUUID(),
                        role: "banner",
                        text: TERMINAL_BANNER,
                    },
                ]);
                return;
            }

            if (action.lines?.length) {
                for (const line of action.lines) {
                    await typeLine(line);
                }
            }

            if (action.type === "exit") {
                closeTerminal();
                return;
            }

            if (action.type === "navigate" && action.to) {
                await wait(350);
                navigate(action.to);
            }
        },
        [clearTerminal, closeTerminal, navigate, pushLog, typeLine],
    );

    const value = useMemo(
        () => ({
            logs,
            commandHistory,
            isDrawerOpen,
            setDrawerOpen,
            openTerminal,
            closeTerminal,
            clearTerminal,
            executeCommand,
        }),
        [
            logs,
            commandHistory,
            isDrawerOpen,
            openTerminal,
            closeTerminal,
            clearTerminal,
            executeCommand,
        ],
    );

    return (
        <TerminalContext.Provider value={value}>
            {children}
        </TerminalContext.Provider>
    );
};

export const useTerminal = () => {
    const ctx = useContext(TerminalContext);
    if (!ctx)
        throw new Error("useTerminal must be used inside TerminalProvider");
    return ctx;
};

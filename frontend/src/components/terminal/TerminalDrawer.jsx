import { Drawer, DrawerContent } from "../ui/drawer";
import { useTerminal } from "../../context/TerminalContext";
import Terminal from "./Terminal";

function TerminalDrawer() {
    const { isDrawerOpen, setDrawerOpen } = useTerminal();

    return (
        <Drawer open={isDrawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerContent className="bottom-4 left-3 right-3 md:left-6 md:right-6 h-90 md:h-105 max-h-[85vh] rounded-2xl border border-[#22c55e]/30 bg-[#05010d]/95 p-3 shadow-[0_0_35px_rgba(34,197,94,0.15)] backdrop-blur-md">
                <div className="mb-2 flex justify-center">
                    <span className="h-1.5 w-16 rounded-full bg-[#7E3AF2]/70" />
                </div>
                <Terminal className="h-[calc(100%-14px)]" />
            </DrawerContent>
        </Drawer>
    );
}

export default TerminalDrawer;

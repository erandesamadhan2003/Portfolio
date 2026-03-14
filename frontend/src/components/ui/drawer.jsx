import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";
import { cloneElement, isValidElement } from "react";

export function Drawer({ open, onOpenChange, children }) {
    return (
        <>
            {Array.isArray(children)
                ? children.map((child, index) =>
                      isValidElement(child)
                          ? cloneElement(child, {
                                key: index,
                                open,
                                onOpenChange,
                            })
                          : child,
                  )
                : isValidElement(children)
                  ? cloneElement(children, { open, onOpenChange })
                  : children}
        </>
    );
}

export function DrawerContent({
    open,
    onOpenChange,
    children,
    className = "",
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            <button
                type="button"
                className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
                onClick={() => onOpenChange(false)}
            />
            <div
                className={`absolute mx-auto transition-all duration-200 ${className}`}
            >
                {children}
            </div>
        </div>
    );
}

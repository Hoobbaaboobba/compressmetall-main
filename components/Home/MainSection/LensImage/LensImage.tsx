"use client";

import { useState } from "react";
import { Lens } from "./Lens";

export function LensImage({ children }: { children: React.ReactNode }) {
    const [hovering, setHovering] = useState(false);

    return (
        <Lens hovering={hovering} setHovering={setHovering}>
            {children}
        </Lens>
    );
}

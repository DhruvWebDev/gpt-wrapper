"use client";
import { useEffect, useState } from "react";
import { WebContainer } from "@webcontainer/api";

export function useWebContainer() {
    const [webcontainer, setWebcontainer] = useState<WebContainer>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function initializeWebContainer() {
            try {
                const webcontainerInstance = await WebContainer?.boot();
                setWebcontainer(webcontainerInstance);
            } catch (error) {
                console.error("Failed to initialize WebContainer:", error);
            } finally {
                setLoading(false);
            }
        }

        initializeWebContainer();
    }, []);

    return { webcontainer, loading};
}
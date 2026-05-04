'use client';

import { useCounterAnimation } from "@/hooks/useCounterAnimation";

export function AnimatedNumber({ number }: { number: number }) {
    useCounterAnimation();

    return (
        <span data-count-target={number}>0</span>
    );
}
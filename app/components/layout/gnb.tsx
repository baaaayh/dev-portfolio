"use client";
import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import GnbButton from "@/app/components/layout/gnb-button";
import styles from "@/app/styles/layout/gnb.module.scss";

export default function Gnb() {
    const pathname = usePathname();
    const navButtons = useRef<(HTMLAnchorElement | null)[]>([]);
    const navInner = useRef<HTMLDivElement>(null);
    const glowEl = useRef<HTMLSpanElement>(null);
    const bgEl = useRef<HTMLSpanElement>(null);
    const lightXpos = useRef<number>(0);

    useEffect(() => {
        const lightEl = glowEl.current;
        if (lightEl) {
            const computedStyle = getComputedStyle(lightEl);
            lightXpos.current = parseFloat(computedStyle.marginLeft);
        }
    }, []);

    const activeNav = useCallback(() => {
        const parent = navInner.current;
        const target =
            pathname === "/" ? navButtons.current[0] : navButtons.current[1];
        const lightEl = glowEl.current;
        const pillEl = bgEl.current;

        if (target && parent && lightEl && pillEl) {
            const targetRect = target.getBoundingClientRect().x;
            const parentRect = parent.getBoundingClientRect().x;
            const xPos = targetRect - parentRect;

            lightEl.style.marginLeft =
                pathname === "/"
                    ? `${lightXpos.current}px`
                    : `${lightXpos.current + xPos}px`;
            pillEl.style.left = `${xPos}px`;
        }
    }, [pathname]);

    useEffect(() => {
        activeNav();
    }, [activeNav]);

    return (
        <nav className={styles.gnb}>
            <span className={styles["gnb__glow"]} ref={glowEl}></span>
            <div className={styles["gnb__wrapper"]}>
                <div className={styles["gnb__inner"]} ref={navInner}>
                    <ul>
                        {["/", "/about"].map((path, index) => (
                            <GnbButton
                                key={`${index}-${path}`}
                                path={path}
                                label={index === 0 ? "Work" : "About"}
                                ref={(el) => {
                                    if (el) navButtons.current[index] = el;
                                }}
                            />
                        ))}
                    </ul>
                    <span className={styles["gnb__pill"]} ref={bgEl}></span>
                </div>
            </div>
        </nav>
    );
}

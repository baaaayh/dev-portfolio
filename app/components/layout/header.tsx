"use client";
import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import styles from "@/app/styles/layout/header.module.scss";

export default function Header() {
    const navButtons = useRef<HTMLAnchorElement[]>([]);
    const navInner = useRef<HTMLDivElement>(null);
    const glowEl = useRef<HTMLElement>(null);
    const bgEl = useRef<HTMLElement>(null);
    const lightXpos = useRef<number>(0);

    useEffect(() => {
        const lightEl = glowEl.current as HTMLElement;
        if (lightXpos) {
            lightXpos.current = parseFloat(
                getComputedStyle(lightEl).marginLeft
            );
        }
    }, []);

    const handleClick = useCallback(
        (e: MouseEvent, index: number) => {
            const parent = navInner.current as HTMLElement;
            const target = e.currentTarget as HTMLAnchorElement;
            const lightEl = glowEl.current as HTMLElement;
            const pillEl = bgEl.current as HTMLElement;

            if (target && parent) {
                const targetRect = target.getBoundingClientRect().x;
                const parentRect = parent.getBoundingClientRect().x;

                const xPos = targetRect - parentRect;

                lightEl.style.marginLeft =
                    index === 1
                        ? `${lightXpos.current + xPos}px`
                        : `${lightXpos.current}px`;
                pillEl.style.left = `${xPos}px`;
            }
        },
        [navInner, bgEl, glowEl, lightXpos]
    );

    useEffect(() => {
        const buttons = navButtons.current;
        buttons.forEach((button, index) => {
            button.addEventListener("click", (e) => handleClick(e, index));
        });

        return () => {
            buttons.forEach((button, index) => {
                button.removeEventListener("click", (e) =>
                    handleClick(e, index)
                );
            });
        };
    }, [handleClick]);

    return (
        <header className={styles.header}>
            <div className={styles["header__inner"]}>
                <h1 className={styles["header__logo"]}>
                    <Link href="/">
                        <span>JOO HYUNG KIM</span>
                        <small>FRONT-END DEVELOPER</small>
                    </Link>
                </h1>
                <nav className={styles.gnb}>
                    <span className={styles["gnb__glow"]} ref={glowEl}></span>
                    <div className={styles["gnb__wrapper"]}>
                        <div className={styles["gnb__inner"]} ref={navInner}>
                            <ul>
                                <li>
                                    <Link
                                        href="/"
                                        className={styles["gnb__work"]}
                                        ref={(el) => {
                                            if (el) navButtons.current[0] = el;
                                        }}
                                    >
                                        Work
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className={styles["gnb__about"]}
                                        ref={(el) => {
                                            if (el) navButtons.current[1] = el;
                                        }}
                                    >
                                        About
                                    </Link>
                                </li>
                            </ul>
                            <span
                                className={styles["gnb__pill"]}
                                ref={bgEl}
                            ></span>
                        </div>
                    </div>
                </nav>
                <div className={styles.utils}>
                    <a href="https://github.com/baaaayh" target="_blank">
                        Github
                    </a>
                </div>
            </div>
        </header>
    );
}

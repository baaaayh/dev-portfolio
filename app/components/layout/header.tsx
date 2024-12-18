"use client";
import Image from "next/image";
import Gnb from "@/app/components/layout/gnb";
import Link from "next/link";
import styles from "@/app/styles/layout/header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles["header__inner"]}>
                <h1 className={styles["header__logo"]}>
                    <Link href="/">
                        <span>JOO HYUNG KIM</span>
                        <small>FRONT-END DEVELOPER</small>
                    </Link>
                </h1>
                <Gnb />
                <div className={styles.utils}>
                    <a
                        className={`${styles["link"]}`}
                        href="https://github.com/baaaayh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                        <Image
                            src={`/images/icons/icon_link_arrow.svg`}
                            width={18}
                            height={18}
                            alt="github link"
                        />
                    </a>
                    <a
                        className={`${styles["link"]}`}
                        href="https://portfolio-9590f.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Publishing
                        <Image
                            src={`/images/icons/icon_link_arrow.svg`}
                            width={18}
                            height={18}
                            alt="portfolio link"
                        />
                    </a>
                </div>
            </div>
        </header>
    );
}

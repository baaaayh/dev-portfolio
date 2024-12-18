"use client";
import Link from "next/link";
import styles from "@/app/styles/layout/gnb-button.module.scss";

export default function GnbButton({
    path,
    label,
    ref,
}: {
    path: string;
    label: string;
    ref: React.Ref<HTMLAnchorElement>;
}) {
    return (
        <li>
            <Link href={path} className={styles["gnb__button"]} ref={ref}>
                {label}
            </Link>
        </li>
    );
}

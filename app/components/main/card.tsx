import Image from "next/image";
import styles from "@/app/styles/main/card.module.scss";
import Link from "next/link";
import { projectObjType } from "@/app/lib/definitions";

export default function Card({ item }: { item: projectObjType }) {
    return (
        <li className={styles["card"]}>
            <div className={styles["card__edge"]}>
                <div className={styles["card__glare"]}></div>
                <Link href="/" className={styles["window"]}>
                    <div className={styles["window__edge"]}></div>
                    <div className={styles["window__contents"]}>
                        <div className={styles["window__title"]}>
                            <h2>{item.project}</h2>
                            <h3>{item.desc}</h3>
                        </div>
                        <div className={styles["window__figure"]}>
                            <Image
                                src={`/images/project/${item.thumb}`}
                                width={1728}
                                height={1074}
                                alt={"Simple Board"}
                            />
                        </div>
                    </div>
                    <div className={"window__light"}></div>
                </Link>
            </div>
        </li>
    );
}

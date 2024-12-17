import Image from "next/image";
import Display from "@/app/components/main/display";
import styles from "@/app/styles/page.module.scss";
export default function Page() {
    return (
        <main className={styles.main}>
            <section className="section section--kv">
                <div className="section__inner">
                    <Display />
                </div>
                <div className={styles.noise}></div>
                <div className={styles.fade}>
                    <div>
                        <Image
                            className={styles.arrow}
                            src={"/images/icons/icon_scroll_down.svg"}
                            alt="Scroll Down"
                            width={48}
                            height={48}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

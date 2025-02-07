import styles from "@/app/styles/layout/footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer__inner"]}>
                <div className={styles["footer__top"]}></div>
                <div className={styles["footer__bottom"]}>
                    <div className={styles["footer__copyright"]}></div>
                </div>
            </div>
        </footer>
    );
}

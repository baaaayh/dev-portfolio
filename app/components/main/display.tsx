import styles from "@/app/styles/main/display.module.scss";

export default function Display() {
    return (
        <div className={styles["display"]}>
            <div className={styles["display__glare"]}></div>
            <div className={styles["display__edge"]}>
                <div className={styles["display__top"]}></div>
                <div className={styles["display__view"]}>
                    <div className={styles.bar}>
                        <div className={styles["bar__left"]}>
                            <span
                                className={`${styles["dot"]} ${styles["dot--red"]}`}
                            ></span>
                            <span
                                className={`${styles["dot"]} ${styles["dot--yellow"]}`}
                            ></span>
                            <span
                                className={`${styles["dot"]} ${styles["dot--green"]}`}
                            ></span>
                        </div>
                        <span className={styles.plus}></span>
                    </div>
                    <div className={styles["display__contents"]}>
                        <div className={styles["display__text"]}>
                            Passion-Driven,
                            <br />
                            JS-Powered,
                            <span className={styles["display__hero"]}>
                                {" "}
                                web dev.
                            </span>
                        </div>
                        <div className={styles["display__about"]}>
                            <div className={styles["display__col"]}></div>
                            <div className={styles["display__col"]}>
                                <h2>
                                    책임감과 끈기가 장점인 프론트엔드 개발자 김
                                    주 형 입니다.
                                </h2>
                                <div className={styles["display__grey"]}>
                                    문제와 직면하더라도 열정과 끈기로 해결해
                                    나갑니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.shine}>
                        <span className={styles["shine__big"]}></span>
                        <span className={styles["shine__small"]}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

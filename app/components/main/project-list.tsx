import Card from "@/app/components/main/card";
import styles from "@/app/styles/main/project-list.module.scss";

export default async function ProjectList() {
    const workData = import("@/projects.json");
    const projects = (await workData).projects;

    return (
        <div className={styles["project"]}>
            <div className={styles["project__inner"]}>
                <ul className={styles["list"]}>
                    {projects.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

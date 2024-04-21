import Wallpaper from "@/lib/components/wallpaper";
import styles from './page.module.scss';
import useApplications from "@/lib/utils/hooks/useApplications";
import Application from "@/lib/components/application";

export default function Desktop() {
    const applications = useApplications();

    return (
        <main className={styles.main}>
            <Wallpaper></Wallpaper>

            {
                applications && applications.map((application, index) => (
                    <Application app={application} key={index}></Application>
                ))
            }
        </main>
    )
}
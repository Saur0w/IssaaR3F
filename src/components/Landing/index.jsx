import { Suspense } from "react";
import Scene from "./Scene";
import styles from "./style.module.css";

const Landing = () => {
    return (
        <section className={styles.landing}>
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </section>
    );
}

export default Landing;
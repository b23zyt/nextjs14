import styles from "./about.module.css"

const AboutPage = () => {
    return (
        <div>
            <div className={styles.imageContainer}>
                <img className={styles.aboutImage} src="/about.png" alt="about image"/>
            </div>
        </div>
    );
}

export default AboutPage;
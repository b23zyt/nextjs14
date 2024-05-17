import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "./navLink/NavLink";

const Links = () => {
        const links = [
            {
                title: "HomePage",
                path: "/",
            },
            {
                title: "About",
                path: "/about",
            },
            {
                title: "Contact",
                path: "/contact",
            },
            {
                title: "Blog",
                path: "/blog",
            },
        ];

    return (
        <div className={styles.link}>
            {links.map(link => (
                <NavLink item={link} id={link.title}/>
            ))}
        </div>
    );
}

export default Links;
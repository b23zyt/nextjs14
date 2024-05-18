"use client";

import { useState } from "react";
import styles from "./links.module.css"
import NavLink from "./navLink/NavLink";

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

const Links = () => {

    const [open, setOpen] = useState(false);
    
    //check if the user login temperary
    const session = true;
    const isAdmin = false;

    return (
        <div className={styles.container}> 
            <div className={styles.link}>
                {links.map(link => (
                    <NavLink item={link} id={link.title}/>
                ))}
                {/* if authenticated, see the logout button, if admin, see the admin link, if no user, see login */}
                { 
                    session ? (
                        <>
                        {
                            isAdmin && (<NavLink item={{title: "Admin", path: "/admin"}} />)
                        }
                        <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item= {{title: "login", path: "/login"}} />
                    )
                }
            </div>
            <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>Menu</button>
            {
                open && (
                    <div className={styles.mobileLinks} >
                    {links.map((link) => (
                            <NavLink item={link} id={link.title} />
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default Links;
"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Homepage",
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



//chequea la sesion  llevando la variable session como una prop; session viene de Links session = {session} en el componente Navbar (linea 18)
const Links = ({session}) => {
  const [open, setOpen] = useState(false); // useState se puede usar en client, no en server side

  // TEMPORARY
  // const session = true;
  // const isAdmin = true;


  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (                            // Inicio sesion?
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />} {/*Si el usuario es Admin renderiza el NavLink y el button Logout sino se renderiza el Navlink Login*/}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (                                                                       
          <NavLink item={{ title: "Login", path: "/login" }} />  // si no inicio sesion renderiza de nuevo la opcion de login
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;

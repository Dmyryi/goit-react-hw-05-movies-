import { NavLink,Outlet } from "react-router-dom";
import styled from 'styled-components';
import styles from './Layout.module.css'
const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orangered; /* Fix the typo here */
  }
`;


export const Layout = () => {
    return <nav>
        <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
                <StyledLink className={styles.nav_link} to="/">Home</StyledLink>
            </li>
            <li className={styles.nav_item}>
                 <StyledLink className={styles.nav_link} to="/movies">Movies</StyledLink>
            </li>
        </ul>
        <main>
            <Outlet/>
        </main>
       
      </nav>
};
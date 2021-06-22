import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/spa-w-react/" aria-label="Home">
          <Dogs />
        </Link>
        {data ? (
          <div className={styles.login}>
            <Link
              style={{ marginRight: '0.2rem' }}
              to="/spa-w-react/conta"
            >{`${data.nome}`}</Link>
            <button onClick={userLogout}>Sair</button>
          </div>
        ) : (
          <Link className={styles.login} to="/spa-w-react/login">
            Sign in / Sign up
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

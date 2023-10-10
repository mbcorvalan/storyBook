import logo from '../../assets/hirefy.png';

import { Button } from '../button/Button';
import './header.scss';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        <img src={logo} alt="Logo" className="storybook-header__logo" />
      </div>
      <div>
        {user ? (
          <div className="storybook-header__content">
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </div>
        ) : (
          <div className="storybook-header__content">
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </div>
        )}
      </div>
    </div>
  </header>
);

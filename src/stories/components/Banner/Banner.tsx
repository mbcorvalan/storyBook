
import { Button } from '../button/Button';
import './banner.scss';
import logo from '../../assets/hirefy.png';

interface BannerProps {
  /**
   * What is the role of the banner?
   */
  role?: 'discover' | 'hire';
  onLogin: () => void;
}

/**
 * Banner UI Component
 */
export const Banner = ({ role = 'discover', onLogin }: BannerProps) => {
  const isDiscover = role === 'discover';

  const title = isDiscover ? "Discover Jobs" : "Hire Talent";
  const subtitle = isDiscover ? "Work Remotely." : "Build your Dream Team";
  const count = isDiscover ? "2566" : "27948";
  const description = isDiscover
    ? "jobs posted across multiple categories, discover top remote work opportunities."
    : "job candidates in our database to be discovered, or sign up to post a free job";
  const buttonText = isDiscover ? "Find Remote Jobs" : "Post a Job";
  const buttonColor = isDiscover ? true : false;

  return (
    <div className="banner">
      <img src={logo} alt="Logo" className="banner__logo" />
      <h1 className="banner__title">{title}</h1>
      <h2 className="banner__subtitle">{subtitle}</h2>
      <h3 className="banner__count">{count}</h3>
      <p className="banner__description">{description}</p>
      <Button onClick={onLogin} primary={buttonColor} label={buttonText} icon={true} />
    </div>
  );
};

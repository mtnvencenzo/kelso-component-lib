import './Header.css';
import genericLogo1 from './generic-logo-1.png';

interface HeaderProps {
    testId?: string;
    appTitle: string;
    logo?: string;
}

const Header = ({ appTitle, logo = genericLogo1, testId = 'header'}: HeaderProps) => (
    <header className='header' id={testId} data-testid={testId}>
        <p className='appTitle'>
            <img src={logo} alt='Logo' className='logo' />
            {appTitle}
        </p>
    </header>
);

export default Header;
export type { HeaderProps };

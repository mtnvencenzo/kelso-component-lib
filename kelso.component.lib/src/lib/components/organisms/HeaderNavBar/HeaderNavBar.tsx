import RouterTabPanel, { RouterTabPanelProps } from '../../molecules/RouterTabPanel';
import './HeaderNavBar.css';
import genericLogo from '../../../assets/generic-logo-1.png';

interface HeaderNavBarProps {
    appTitle: string;
    tabInfo: RouterTabPanelProps;
    testId?: string;
    logo?: string;
}

const HeaderNavBar = ({ appTitle, tabInfo, testId = 'header-nav', logo = genericLogo }: HeaderNavBarProps) => {
    return (
        <header className='header-navbar' id={testId} data-testid={testId}>
            <p className='appTitle'>
                <img src={logo} alt='Logo' className='logo' />
                {appTitle}
            </p>
            <RouterTabPanel tabsList={tabInfo.tabsList} variant='header' />
        </header>
    );
};

export default HeaderNavBar;
export type { HeaderNavBarProps };

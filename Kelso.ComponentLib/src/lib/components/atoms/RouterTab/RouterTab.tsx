import { NavLink } from 'react-router-dom';
import './RouterTab.css';

interface RouterTabProps {
    to: string;
    label: string;
    variant?: 'horizontal' | 'header';
    testId?: string;
}

const RouterTab = ({ to, label, variant = 'horizontal', testId = 'tab' }: RouterTabProps) => {
    const className = variant !== 'horizontal' ? 'nav-header' : 'nav-horizontal';

    return (
        <li className={className} id={testId} data-testid={testId}>
            <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
                {label}
            </NavLink>
        </li>
    );
};

export default RouterTab;
export type { RouterTabProps };

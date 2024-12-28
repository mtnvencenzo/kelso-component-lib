import RouterTab, { RouterTabProps } from '../../atoms/RouterTab/RouterTab';
import './RouterTabPanel.css';

interface RouterTabPanelProps {
    tabsList: RouterTabProps[];
    variant?: 'header' | 'horizontal';
    testId?: string;
}

const RouterTabPanel = ({ tabsList, variant = 'horizontal', testId = 'tabPanel' }: RouterTabPanelProps) => {
    const className = variant !== 'horizontal' ? 'nav-header' : 'nav-horizontal';

    return (
        <nav className={className} id={testId} data-testid={testId}>
            <ul>
                {tabsList.map((t, index) => {
                    const tabTestId = t.testId === undefined ? `${testId}-tab${index}` : t.testId;

                    return (
                        <RouterTab
                            key={index}
                            to={t.to}
                            label={t.label}
                            variant={variant}
                            testId={tabTestId}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default RouterTabPanel;
export type { RouterTabPanelProps };
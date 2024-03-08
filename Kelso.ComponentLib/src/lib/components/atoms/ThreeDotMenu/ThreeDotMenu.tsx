import './ThreeDotMenu.css';
import { useState } from 'react';

interface ThreeDotMenuProps {
    options: string[];
    testId: string;
}

const ThreeDotMenu = ({ options, testId = 'three-dot-menu' }: ThreeDotMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div id={testId} data-testid={testId}>
            <button className='three-dot-menu' onClick={toggleMenu}>
                <div className='three-dot-menu--dot'></div>
                <div className='three-dot-menu--dot'></div>
                <div className='three-dot-menu--dot'></div>
            </button>
            {isOpen && (
                <div className='menu-options'>
                    {options.map((option, index) => (
                        <button key={index} className='menu-option'>
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThreeDotMenu;
export type { ThreeDotMenuProps };

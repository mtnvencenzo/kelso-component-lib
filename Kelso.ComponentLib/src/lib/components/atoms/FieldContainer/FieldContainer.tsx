import { ReactNode } from "react";

interface FieldContainerProps {
    variant?: 'underline' | 'outline' | 'none';
    children: ReactNode
}

const FieldContainer = ({ variant = 'none', children }: FieldContainerProps) => {
    
    const containerStyles = new Map<string, React.CSSProperties>([
        ['underline', { borderBottom: '1px olid black', paddingRight: '5px '}],
        ['outline', { border: '2px solid #E6E6E6', borderRadius: '5px', paddingRight: '5px' }],
        ['none', {}]
    ]);

    const style = containerStyles.get(variant);

    return (
        <div style={style}>
            {children}
        </div>
    );
};

export default FieldContainer;
export type { FieldContainerProps };
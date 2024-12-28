import { Box, Skeleton } from '@mui/material';
import { useState } from 'react';

interface LoadingSkeletonProps {
    rowCount?: number;
    id?: string;
}

const LoadingSkeleton = ({ rowCount = 4, id = 'loading-skeleton' }: LoadingSkeletonProps) => {
    const [rowListCount, setRowListCount] = useState(rowCount);

    if (rowCount > 100) {
        setRowListCount(100);
    } else if (rowCount <= 0) {
        setRowListCount(1);
    }

    const skeletonRows = Array.from({ length: rowListCount }, (_, index) => <Skeleton id={`${id}-row-${index}`} key={index} animation='wave' sx={{ height: '75px' }} />);

    return (
        <div id={id}>
            <Box sx={{ width: '100%' }}>{skeletonRows}</Box>
        </div>
    );
};

export default LoadingSkeleton;
export type { LoadingSkeletonProps };

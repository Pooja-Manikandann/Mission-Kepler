import React, { useState } from 'react';
import Checkbox  from '../Checkbox/Checkbox';
import styles from './Filters.module.scss';

const filterData = [
    {
        id: 'regional',
        name: 'regional',
        value: true,
        label: 'Regional Blogs',
    },
    {
        id: 'national',
        name: 'national',
        value: true,
        label: 'National Blogs',
    },
    {
        id: 'international',
        name: 'international',
        value: true,
        label: 'International Blogs',
    },
];

const Filters = () => {
    const [filters, setFilters] = useState(['national', 'regional', 'international']);
    const handleFilterChange = (filterKey: string) => {
        console.log(filters.findIndex((filter) => filter === filterKey));
        filters.findIndex((filter) => filter === filterKey) >= 0
            ? setFilters([...filters.filter((filter) => filter !== filterKey)])
            : setFilters([...filters, filterKey]);
    };
    return (
        <div className={styles.filters}>
            {filterData.map((filter) => (
                <Checkbox {...filter} value={filters.includes(filter.id)} onChange={handleFilterChange} />
            ))}
        </div>
    );
};

export default Filters;
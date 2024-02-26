import React, { useState } from 'react';
import Checkbox  from '../Checkbox/Checkbox';
import styles from './Filters.module.scss';

export const filterData = [
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

type FilterProps = {
    setFilters: Function,
    filters: any,
    filtersData: Array<object>,
  }

  export const defaultProps = {
    setFilters: () => { },
    filters: [],
    filtersData: filterData,
}
const Filters = (props: FilterProps) => {
    const {filters, setFilters, filtersData} = props;
    const handleFilterChange = (filterKey: string) => {
        filters.findIndex((filter: string) => filter === filterKey) >= 0
            ? setFilters([...filters.filter((filter: string) => filter !== filterKey)])
            : setFilters([...filters, filterKey]);
    };
    return (
        <div className={styles.filters}>
            {filtersData.map((filter:any, index: number) => (
                <Checkbox key={index} {...filter} value={filters.includes(filter.id)} onChange={handleFilterChange} />
            ))}
        </div>
    );
};
Filters.defaultProps = defaultProps;

export default Filters;
import React, { useState } from 'react';
import Checkbox  from '../Checkbox/Checkbox';
import styles from './Filters.module.scss';

type FilterProps = {
    setFilters: Function,
    filters: any,
    filtersData: any,
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

export default Filters;
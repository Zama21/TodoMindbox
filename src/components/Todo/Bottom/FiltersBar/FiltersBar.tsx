import { useDispatch } from 'react-redux';
import { FilterButton, FiltersBarWrapper } from './FiltersBar.styles';
import { setTodoVisibility } from '@/store/slices/todoSlice';
import { useState } from 'react';
import { TypeFilters } from '@/store/slices/todoSlice.types';

const filters: TypeFilters[] = ['all', 'active', 'completed'];

export const FiltersBar = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState<TypeFilters>('all');

  const handleFilterChange = (filter: TypeFilters) => {
    dispatch(setTodoVisibility(filter));
    setFilter(filter);
  };

  return (
    <FiltersBarWrapper>
      {filters.map((f) => (
        <FilterButton
          key={f}
          onClick={() => handleFilterChange(f)}
          isActive={filter === f}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </FilterButton>
      ))}
    </FiltersBarWrapper>
  );
};

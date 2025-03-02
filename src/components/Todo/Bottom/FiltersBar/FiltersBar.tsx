import { useDispatch, useSelector } from 'react-redux';
import { FilterButton, FiltersBarWrapper } from './FiltersBar.styles';
import { setTodoVisibility } from '@/store/slices/todoSlice';
import { useState } from 'react';
import { TypeFilters } from '@/store/slices/todoSlice.types';
import { RootState } from '@/store/store';

const filters: TypeFilters[] = ['all', 'active', 'completed'];

export const FiltersBar = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(
    (state: RootState) => state.todo.currentFilter
  );
  const [filter, setFilter] = useState<TypeFilters>(currentFilter);

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
          onFocus={() => handleFilterChange(f)}
          isActive={filter === f}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </FilterButton>
      ))}
    </FiltersBarWrapper>
  );
};

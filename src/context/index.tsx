import React, { createContext, useState } from 'react';
import { ISearchContextType } from '../interfaces';

export const SearchContext = createContext<ISearchContextType>({
  searchTerm: '',
  setSearchTerm: () => {},
});

export interface SearchProviderProps {
  children: React.ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

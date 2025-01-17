import React from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface SearchBarProps {
  searchItem: string;
  setSearchItem: (searchItem: string) => void;
  onSearch: () => void;
  loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchItem,
  setSearchItem,
  onSearch,
  loading
}) => {
  return (
    <div className="flex items-center gap-2">
      <Label htmlFor='search'>Search</Label>
      <Input
        id='search'
        type='search'
        placeholder='Search here...'
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button
        onClick={onSearch}
        disabled={loading}
        className='bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:bg-blue-300'
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
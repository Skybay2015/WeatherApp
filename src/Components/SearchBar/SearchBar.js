import React, { useState } from 'react';

import './styles.scss';

import useActions from '../../hooks/useActions';

const SearchBar = () => {
   const [city, setCity] = useState('');
   const { weatherFetch } = useActions();

   const onChange = (e) => {
      setCity(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      weatherFetch(city);
      setCity('');
   };

   return (
      <form onSubmit={handleSubmit} className='search_container'>
         <input
            type='text'
            placeholder='Enter City Name..'
            name='search'
            className='search_input'
            value={city}
            onChange={onChange}
         />
         <button type='submit' className='search_btn'>
            <i className='fa fa-search'></i>
         </button>
      </form>
   );
};

export default SearchBar;

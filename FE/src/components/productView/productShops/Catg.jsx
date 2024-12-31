import React, { useState } from "react";

const Catg = () => {
  const [filters, setFilters] = useState({
    category: "",
    author: "",
    priceRange: "",
    rating: "",
    language: "",
    format: "",
    year: "",
    publisher: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <>
      <div className='category'>
        <div className='filter'>
          <h2>Filters</h2>
          <div className='filter-group'>
            <label>Author</label>
            <input type='text' name='author' onChange={handleFilterChange} />
          </div>
          <div className='filter-group'>
            <label>Price</label>
            <select name='priceRange' onChange={handleFilterChange}>
              <option value=''>All</option>
              <option value='0-100'>0 - 100k</option>
              <option value='100-200'>100k - 200k</option>
              <option value='200-300'>200k - 300k</option>
              <option value='300-400'>300k - 400k</option>
              <option value='400-500'>400k - 500k</option>
              <option value='200-300'>500k+</option>
            </select>
          </div>
          <div className='filter-group'>
            <label>Rating</label>
            <select name='rating' onChange={handleFilterChange}>
              <option value=''>All</option>
              <option value='4'>4 stars and up</option>
              <option value='3'>3 stars and up</option>
              <option value='2'>2 stars and up</option>
              <option value='1'>1 star and up</option>
            </select>
          </div>
          <div className='filter-group'>
            <label>Language</label>
            <select name='language' onChange={handleFilterChange}>
              <option value=''>All</option>
              <option value='vietnamese'>Vietnamese</option>
              <option value='english'>English</option>
            </select>
          </div>
          <div className='filter-group'>
            <label>Format</label>
            <select name='format' onChange={handleFilterChange}>
              <option value=''>All</option>
              <option value='hardcover'>Hardcover</option>
              <option value='paperback'>Paperback</option>
              <option value='ebook'>Ebook</option>
              <option value='audiobook'>Audiobook</option>
            </select>
          </div>
          <div className='filter-group'>
            <label>Year</label>
            <input type='number' name='year' onChange={handleFilterChange} />
          </div>
          <div className='filter-group'>
            <label>Publisher</label>
            <input type='text' name='publisher' onChange={handleFilterChange} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catg;
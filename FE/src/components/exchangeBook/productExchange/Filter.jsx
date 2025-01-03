import React, { useState } from "react";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const Filter = () => {
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
      <div className="category">
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
          <Button startDecorator={<Add />} sx={{ flex: 1 }}>
            Add to cart
          </Button>
          <Button endDecorator={<KeyboardArrowRight />} color="success" sx={{ flex: 1 }}>
            Go to checkout
          </Button>
        </Box>

        <div className="filter">
          <h2>Filters</h2>

          {Object.keys(filters).map((filterKey) => (
            <div className="filter-group" key={filterKey}>
              <label>{filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}</label>
              {filterKey === "priceRange" || filterKey === "rating" || filterKey === "language" || filterKey === "format" ? (
                <select name={filterKey} onChange={handleFilterChange}>
                  <option value="">All</option>
                  {filterKey === "priceRange" && (
                    <>
                      <option value="0-100">0 - 100k</option>
                      <option value="100-200">100k - 200k</option>
                      <option value="200-300">200k - 300k</option>
                      <option value="300-400">300k - 400k</option>
                      <option value="400-500">400k - 500k</option>
                      <option value="500+">500k+</option>
                    </>
                  )}
                  {filterKey === "rating" && (
                    <>
                      <option value="4">4 stars and up</option>
                      <option value="3">3 stars and up</option>
                      <option value="2">2 stars and up</option>
                      <option value="1">1 star and up</option>
                    </>
                  )}
                  {filterKey === "language" && (
                    <>
                      <option value="vietnamese">Vietnamese</option>
                      <option value="english">English</option>
                    </>
                  )}
                  {filterKey === "format" && (
                    <>
                      <option value="hardcover">Hardcover</option>
                      <option value="paperback">Paperback</option>
                      <option value="ebook">Ebook</option>
                      <option value="audiobook">Audiobook</option>
                    </>
                  )}
                </select>
              ) : (
                <input type={filterKey === "year" ? "number" : "text"} name={filterKey} onChange={handleFilterChange} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;

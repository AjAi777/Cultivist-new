import React from 'react';
import './Shop.css';

export default function Filter() {
  return (
    <>
      <div className='jadoo' style={{ marginTop: '12vh' }}>
        <div className='filter_menu gap-2'>
          <form style={{ width: '50rem' }}>
            <div className='input-group zoom d-flex'>
              <input
                type='search'
                className='form-control rounded'
                placeholder='Enter your search'
                aria-label='Search'
                aria-describedby='search-addon'
              />
              <button type='button' className='btn btn-success'>
                Search
              </button>
            </div>
          </form>

          <div className='d-flex zack col gap-2'>
            <span>Filters: </span>
            <select
              style={{
                fontSize: '14px',
                backgroundColor: 'white',
                borderRadius: '1rem',
              }}
            >
              <option value='1'>All Products</option>
              <option value='2'>Teas</option>
              <option value='3'>Essential Oils</option>
              <option value='4'>Air Purifying Plants</option>
            </select>
          </div>

          <div className='col sort d-flex zack gap-2'>
            <span>Sort By: </span>
            <select
              style={{
                fontSize: '14px',
                backgroundColor: 'white',
                borderRadius: '1rem',
              }}
            >
              <option value='1'>Featured</option>
              <option value='2'>Newest</option>
              <option value='3'>Oldest</option>
              <option value='4'>Best Seller</option>
              <option value='5'>Price: High-Low</option>
              <option value='6'>Price: Low-High</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

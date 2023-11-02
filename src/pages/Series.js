import React from 'react';
import "./Pages.css";

const Series = () => {
  return (
    <div>
        <span className="pageTitle">Series</span>
        <button>Action</button>
        <button>Horror</button>
        <button>Comedy</button>
        <button>Romance</button>
        <button>etc</button>
        <button>Clear All Filters</button>
    </div>
  )
}

export default Series;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SearchBar = () => {
  // STATE MANAGEMENT
  // Tracks the text typed into the search input
  const [searchTerm, setSearchTerm] = useState('');
  
  // Tracks which genre is currently selected (Default is 'All')
  // This state will be used later to filter the movie list by genre
  const [activeCategory, setActiveCategory] = useState('All');

  // List of genres available for selection
  const categories = ['All', 'Action', 'Drama', 'Comedy', 'Thriller', 'Sci-Fi', 'Horror', 'Romance'];

  return (
    /* MAIN WRAPPER: Change the overall background color of the search section here */
    <div className="container-fluid py-3" style={{ backgroundColor: '#13111C' }}> 
      <div className="container">
        
        {/* SEARCH INPUT GROUP */}
        {/* You can change the border color or background of the search bar here */}
        <div className="input-group mb-3 border border-secondary rounded" style={{ backgroundColor: '#675b93' }}>
          
          {/* SEARCH ICON: Change the 'text-warning' class to change the icon color */}
          <span className="input-group-text bg-transparent border-0 text-warning">
            <i className="bi bi-search"></i>
          </span>

          {/* TEXT INPUT: Where the user types. Update 'placeholder' to change the hint text */}
          <input
            type="text"
            className="form-control bg-transparent border-0 text-light shadow-none"
            placeholder="Search for a film..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ color: '#FFD700' }} // Text color inside the input
          />

          {/* FILTER ICON (Three sliders/lines): 
              This is often used to open an advanced filter modal or dropdown. 
              You can change its color or add an onClick function here. */}
          <span 
            className="input-group-text bg-transparent border-0 text-warning" 
            style={{ cursor: 'pointer' }}
            onClick={() => console.log("Filter options opened")} // Logic for advanced filters goes here
          >
            <i className="bi bi-sliders"></i>
          </span> 
        </div>

        {/* GENRE SELECTION (Pills) */}
        {/* This container holds the buttons that will eventually trigger the movie filtering */}
        <div className="d-flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              
              /* DYNAMIC STYLING: 
                 If the category is active, it gets the 'btn-warning' (yellow) style.
                 Otherwise, it stays 'text-light'. */
              className={`btn rounded-pill px-4 py-1 ${
                activeCategory === category 
                  ? 'btn-warning text-dark fw-bold' 
                  : 'text-light'
              }`}

              /* INLINE STYLING FOR FINE-TUNING:
                 - backgroundColor: Controls the fill of the pill.
                 - fontSize: Controls the text size.
                 - border: Set to 'none' for a modern look. */
              style={{ 
                backgroundColor: activeCategory === category ? '#FFD700' : '#1E1B29',
                border: 'none',
                fontSize: '0.9rem' 
              }}

              /* CLICK HANDLER: 
                 Updates the active category state. 
                 In the future, your movie list component will listen to this 'activeCategory' change. */
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SearchBar;
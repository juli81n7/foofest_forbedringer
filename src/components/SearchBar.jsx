import "../styles/SearchBar.css";
import { useState, useEffect } from "react";
import Link from 'next/link';

function SearchBar() {
  const [allBands, setBands] = useState([]);
  const [searchedBands, setSearchedBands] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/bands`, {
        headers: {},
      });

      if (res.ok) {
        const data = await res.json();
        setBands(data);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setMessage(event.target.value);
    setSelectedItemIndex(-1); // Reset selected index when the input changes
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelectedItemIndex((prevIndex) =>
        prevIndex < searchedBands.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedItemIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (event.key === 'Enter') {
      // Perform an action, e.g., navigate to a selected item
      if (selectedItemIndex !== -1) {
        const selectedBand = searchedBands[selectedItemIndex];
        console.log('Selected item:', selectedBand);
        // Add your logic here for what you want to do on "Enter"
        // For example, navigate to the selected band's page
        window.location.href = "../ArtistSingleView/"+selectedBand.slug; // or use router.push() if available
      }
    }
  };

  const handleLiClick = (index) => {
    const selectedBand = searchedBands[index];
    console.log('Selected item:', selectedBand);
    // Add your logic here for what you want to do on li click
    // For example, navigate to the selected band's page
    window.location.href = "../ArtistSingleView/"+selectedBand.slug; // or use router.push() if available
    setMessage(''); // Clear the input field
  };

  useEffect(() => {
    if (message.length > 2) {
      const filteredBands = allBands.filter((band) =>
        band.name.includes(message)
      );
      setSearchedBands(filteredBands);
    } else {
      setSearchedBands([]);
    }
  }, [message, allBands]);

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search for bands"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <ul className="searchresults">
        {searchedBands.map((band, index) => (
          <li
            key={band.id}
            className={index === selectedItemIndex ? 'selected' : ''}
            onClick={() => handleLiClick(index)}
          >
            <Link className="link" href={`../ArtistSingleView/${band.slug}`}>
              {band.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;

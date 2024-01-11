import "../styles/SearchBar.css";
import { useState, useEffect } from "react";
import Link from "next/link";

function SearchBar() {
  const [allBands, setBands] = useState([]);
  const [searchedBands, setSearchedBands] = useState([]);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState(false);
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
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedItemIndex((prevIndex) => (prevIndex < searchedBands.length - 1 ? prevIndex + 1 : prevIndex));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedItemIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    } else if (event.key === "Enter") {
      // Perform an action, e.g., navigate to a selected item
      if (selectedItemIndex !== -1) {
        const selectedBand = searchedBands[selectedItemIndex];
        console.log("Selected item:", selectedBand);
        // Add your logic here for what you want to do on "Enter"
        // For example, navigate to the selected band's page
        window.location.href = "../ArtistSingleView/" + selectedBand.slug; // or use router.push() if available
      }
    }
  };

  const handleLiClick = (index) => {
    const selectedBand = searchedBands[index];
    console.log("Selected item:", selectedBand);
    // Add your logic here for what you want to do on li click
    // For example, navigate to the selected band's page
    window.location.href = "../ArtistSingleView/" + selectedBand.slug; // or use router.push() if available
    setMessage(""); // Clear the input field
  };

  useEffect(() => {
    if (message.length > 2) {
      const lowerCaseMessage = message.toLowerCase(); // Convert search term to lowercase

      const filteredBands = allBands.filter((band) => band.name.toLowerCase().includes(lowerCaseMessage));

      setSearchedBands(filteredBands);
    } else {
      setSearchedBands([]);
    }
  }, [message, allBands]);

  function expand() {
    setSearch((old) => !old);
    if (search) console.log("Nu søger jeg");
    document.querySelector("#searchthing").focus();
  }

  return (
    <div className="expanderContainer">
      <div className="search">
      
        <div className={"searchArea " + (search ? "active" : "")}>
          <label htmlFor="searchthing" aria-label="search for artist"></label>
          <input autoComplete="false" type="search" id="searchthing" name="searching" placeholder="Search for bands" value={message} onChange={handleChange} onKeyDown={handleKeyDown}></input>

          <svg onClick={expand} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <g>
              <path
                className="cls-1"
                d="M16.6,18l-6.3-6.3c-.5.4-1.08.72-1.73.95s-1.34.35-2.08.35c-1.82,0-3.35-.63-4.61-1.89s-1.89-2.8-1.89-4.61S.63,3.15,1.89,1.89,4.68,0,6.5,0s3.35.63,4.61,1.89,1.89,2.8,1.89,4.61c0,.73-.12,1.43-.35,2.08s-.55,1.23-.95,1.73l6.3,6.3-1.4,1.4ZM6.5,11c1.25,0,2.31-.44,3.19-1.31s1.31-1.94,1.31-3.19-.44-2.31-1.31-3.19-1.94-1.31-3.19-1.31-2.31.44-3.19,1.31-1.31,1.94-1.31,3.19.44,2.31,1.31,3.19,1.94,1.31,3.19,1.31Z"
              />
            </g>
          </svg>
        </div>
        <ul className="searchresults">
          {searchedBands.map((band, index) => (
            <li key={band.id} className={index === selectedItemIndex ? "selected" : ""} onClick={() => handleLiClick(index)}>
              <Link className="link" href={`../ArtistSingleView/${band.slug}`}>
                {band.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;

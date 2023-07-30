import "./Msearch.css";
import React, { useState, useEffect, useContext } from "react";
import firebase from "../../firebase/config";
import { DataOfOne } from "../../store/DataForCard";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import MainImg from '../assets/fadf (2).png'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { setPersonInfo } = useContext(DataOfOne);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.length > 0) {
        const firestore = firebase.firestore();
        const querySnapshot = await firestore
          .collection("members")
          .where("name", ">=", searchQuery.toLowerCase())
          .where("name", "<=", searchQuery.toLowerCase() + "\uf8ff")
          .get();

        const data = querySnapshot.docs.map((doc) => {
          const documentData = doc.data();
          const documentId = doc.id;
          return { id: documentId, ...documentData };
        });
        console.log(data);

        setSearchResults(data);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  function handleSearchList(result) {
    setPersonInfo(result);
    navigate("/profile");
    console.log(result);
  }

  return (
      <div className="home-left">
          <div className="HeadLine">
            <div className="Headline-text">
              <h2>Find the Details of Student Registration,</h2>
            </div>
            <div className="search-bar-container">
              <div>
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faSearch} />
                  <input
                    className="search-input"
                    placeholder="Type to search..."
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                  />
                </div>

                <br className="ul-br" />

                {searchResults.length === 0 ? (
                  <div hidden></div>
                ) : (
                  <div className="ul-list">
                    <ul>
                      {searchResults.map((result) => (
                        <li
                          onClick={() => handleSearchList(result)}
                          className="search-text"
                          key={result.id}
                        >
                          {result.name}{" "}
                          {result.subject === "arabic" ? (
                            <span className="sub-span-a">{result.subject}</span>
                          ) : (
                            <span className="sub-span-u">{result.subject}</span>
                          )}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
      </div>
  );
};

export default SearchBar;

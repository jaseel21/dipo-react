import "./Msearch.css";
import React, { useState, useEffect, useContext } from "react";
import firebase from "../../firebase/config";
import { DataOfOne } from "../../store/DataForCard";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
    <div class="row">
      <div className="home-left">
        <div className="App">
          <div className="HeadLine">
            {/* <div className="disco">
              <div className="Description">
                <p>
                  <span>Alathurpadi Dars</span> is held at Alathurpadi Juma
                  Masjid, a historical Masjid situated in Alathurpadi town, has
                  a history of more than 100 years.
                </p>
              </div>

              <div className="add-button">
                <button
                  onClick={() => {
                    navigate("/form");
                  }}
                  class="button0 button1"
                >
                  ADD STUDENTS
                </button>
              </div>
            </div> */}
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
      </div>
      <div className="home-right">
        <div className="discripton">
          <div className="dis-card">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, qui voluptates illo autem quas facilis vitae accusantium praesentium maiores?</p>
          <div className="add-button">
          <button
            onClick={() => {
              navigate("/form");
            }}
            class="button0 button1"
          >
            ADD STUDENTS
          </button>
        </div>
          </div>
          
        </div>
        <div className="imgContainer">
          <img
            src="https://github.com/AdsaClab/diploma/blob/master/fadf.png?raw=true"
            alt=""
          />
        </div>
        {/* <div className="Description">
          <p>
            <span>Alathurpadi Dars</span> is held at Alathurpadi Juma Masjid, a
            historical Masjid situated in Alathurpadi town, has a history of
            more than 100 years.
          </p>
        </div>

        <div className="add-button">
          <button
            onClick={() => {
              navigate("/form");
            }}
            class="button0 button1"
          >
            ADD STUDENTS
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SearchBar;

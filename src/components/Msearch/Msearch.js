
import "./Msearch.css"
import React, { useState, useEffect ,useContext} from 'react';
import firebase from "../../firebase/config"
import { DataOfOne } from "../../store/DataForCard";
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const {setPersonInfo}=useContext(DataOfOne)
  const navigate = useNavigate();
 

  useEffect(() => {

    
    const fetchSearchResults = async () => {
      if (searchQuery.length>0) {

        

        const firestore = firebase.firestore();
        const querySnapshot = await firestore
          .collection('members')
          .where('name', '>=', searchQuery)
          .where('name', '<=', searchQuery + '\uf8ff')
          .get();
    
          const data = querySnapshot.docs.map((doc) => {
            const documentData = doc.data();
            const documentId = doc.id;
            return { id: documentId, ...documentData };
          });
          console.log(data);
          
          
        setSearchResults(data);
          
      };
      }

    fetchSearchResults();
  }, [searchQuery]);

 
  const handleInputChange = (event) => {
              
      setSearchQuery(event.target.value);
   
  };
  function handleSearchList(result) {
    setPersonInfo(result);
    navigate('/profile');
    console.log(result);
  };
  

  return (
    <div class="row">
        
            <div className='home-left'>
        <div className="App">
            {/* <div className="imgContainer">
                <img src="https://alathurpadidars.in/wp-content/uploads/2019/08/Dars-Site-Logo1.png" alt="" />
            </div> */}
            <div className='art'>
                <div className='labelOfSearch'>
                    
                </div>
                <h1 className='sh4'>Search Students<br /><span>NAME</span><br />here</h1>
                <div className='imgOfSearch'>
                <img src="https://imgtr.ee/images/2023/06/24/dKq5Q.png" alt="dKq5Q.png" border="0" />
                </div>
            </div>
            
            <div className="search-bar-container">
            <div>
            <div className="input-wrapper">
      <FontAwesomeIcon icon={faSearch} />
      <input
        placeholder="Type to search..."
     
        type="text" value={searchQuery} onChange={handleInputChange}
      />
    </div>
             
              
                <br className="ul-br"/>
                
             {
              searchResults.length===0 ?
               <div hidden></div> :
               <div className="ul-list">
                
             <ul>
           
               {searchResults.map((result) => (
                 <li onClick={()=>handleSearchList(result)} className="search-text" key={result.id}>{result.name+" - "} {result.subject==="arabic"?<span className="sub-span-a">{result.subject}</span>:<span className="sub-span-u">{result.subject}</span>} </li>
                 
               ))}
             </ul>
              </div> 
             }
              
      </div>
            </div>
        </div>
    </div>
            <div className='home-right'>
            <div className="HeadLine">
                <h1>ADSA<br />Diploma</h1>
            </div>
            <div className='Description'>
                <p><span>Alathurpadi Dars</span> is held at Alathurpadi Juma Masjid, a historical Masjid situated in Alathurpadi town, has a history of more than 100 years.</p>
            </div>
            
            
            <div className="add-button">
            <button onClick={()=>{navigate('/form')}} class="button0 button1">ADD STUDENTS</button>          
            </div>
          

        </div>
    </div>
  );
};

export default SearchBar;

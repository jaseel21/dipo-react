import React, {  useContext, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Form from "./pages/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import ListPage from "./components/ListPage/ListPage";
import Member from "./store/Members";
import ProfaileCard from "./components/ProfileCard/ProfileCard";
import PersonInfo from "./store/DataForCard";
import EditData from "./components/EditData/EditData";
import login from "./components/Login/Login";
import { Authcontext } from "./store/FirebaseContext";
import firebase from "./firebase/config";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  const { user, setUser } = useContext(Authcontext);
  const location = useLocation();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    console.log(user);
  });
  return (
    <div>
      <Member>
        <PersonInfo>
          <NavBar />
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/form" Component={user ? Form : login }></Route>

            <Route path="/list" Component={ListPage}></Route>

            <Route path="/profile" Component={ProfaileCard} />

            <Route path="/card" />
            <Route path="/edit" Component={EditData}>
              {" "}
            </Route>
            <Route path="/login" Component={login}></Route>
            <Route path="/contact" Component={Contact} />
            <Route path="/about" Component={About} />
          </Routes>
        </PersonInfo>
        {location.pathname !== '/login'  && <Footer />}
        {/* { login ? null :<Footer></Footer>} */}
      </Member>
    </div>
  );
}

export default App;

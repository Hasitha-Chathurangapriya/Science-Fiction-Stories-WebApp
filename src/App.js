import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Home/Users";
import Posts from "./Home/Posts";
import LoginUser from "./Login/LoginUser";
import Login from "./Login/Login";
import BookAPI from "./Book/BookAPI";
import ContactForm from "./Cantact/ContactForm";
import About from "./About/About"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/authorRegisteruser" element={<LoginUser/>} />
        <Route path="/authorCreatePost" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/adminLogin" element={<Login />} />
        <Route path="/BookAPI" element={<BookAPI />} />
        <Route path="/cantact" element={<ContactForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

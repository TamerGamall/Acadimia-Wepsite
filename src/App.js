import './App.css';
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from './Components/common/Heading/Header';
import Home from "./Components/Home/Home";
import About from './Components/About/About';
import CourseHome from './Components/AllCourses/CourseHome';
import Team from './Components/Team/Team';
import Price from './Components/Pricing/Price';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/common/Footer/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route  path="/" element ={<Home/>} />
          <Route  path="/about" element ={<About/>} />
          <Route  path="/courses" element ={<CourseHome/>} />
          <Route  path="/team" element ={<Team/>} />
          <Route  path="/pricing" element ={<Price/>} />
          <Route  path="/journal" element ={<Blog/>} />
          <Route  path="/contact" element ={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

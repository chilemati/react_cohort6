// import './App.css';
import UseState from './components/hooks/UseState';
import Navbar from './components/Navbar/Navbar';
import Props from './components/props/Props';
import UseEffect from './components/hooks/UseEffect';
import Propss from './components/props-co4/Propss';
import Statehook from './components/hooks-co4/Statehook';
import Atom from './components/hooks/Atom';
import { demin } from './components/hooks/global'
import { useRecoilValue } from 'recoil'
import { Routes, Route } from 'react-router-dom'
import Home from './components/blogs/bloghome/Home';
import About from './components/blogs/blogabout/About';
import Create from './components/blogs/createblog/Create';
import Errorpage from './components/404page/Errorpage';
import Accordation from './components/Accordation/Accordation';
import BlogDetails from './components/blogs/blogdetails/BlogDetails';
function App() {
  function add(a, b) {
    return `${a} + ${b} = ${a+b}`
  }
  return (
    <div className="App">
      <Navbar /> 
      {/* <Props color='red' sum={add} />
      <UseEffect /> */}
      {/* <Propss names={'Amadi Chile'} sum={add} />*/}
       {/* <UseState />
      <hr />
        <Statehook /> 
        <hr />
        <Atom /> */}
      {/* <Accordation /> */}
     <Routes >
        {/* our route or link are below */}
         <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<Create />} /> 
        <Route path='/:id' element={<BlogDetails />} /> 
        <Route path='*' element={<Errorpage />} /> 
      
      </Routes>
    </div>
  );
}

export default App;

import { Navbar } from "./common/Navbar";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import './App.css'
import { Body } from "./pages/Body";
import { Footer } from "./common/Footer";
import { useState } from "react";
import { Sidebar } from "./common/Sidebar";
import { Route, Routes } from "react-router-dom";

function App() {

  const [sidebar, setSidebar] = useState(false)
  const [category, setCategory] = useState()

  return (
    <div className="">

        <Navbar/>

      <div className="relative top-20 overflow-auto">
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/category/:name" element={<Body category={category} />}/>
        </Routes>
        {/* <Home category={category}/> */}
        <Footer/>
      </div>

      <div className={`flex gap-x-4 flex-row-reverse fixed  top-0 z-20 transition-all duration-500 ease-in-out ${sidebar ? 'left-0' : '-left-60' }`}>
          <button className='flex gap-1 mt-5 self-start'
            onClick={()=> setSidebar(!sidebar)}
          >
              { sidebar ? <IoMdClose className='size-8 font-light' /> :<FiMenu className='size-8 font-light'/> }
              <span className='self-center text-gray-600'> { sidebar ? 'Close' : 'Menu'}</span>
          </button>
          <Sidebar category={category} setCategory={setCategory} setSidebar={setSidebar}/>
      </div>
    </div>
  );
}

export default App;

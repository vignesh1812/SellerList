import './App.css';
import { FaShoppingCart } from "react-icons/fa";
import {BiSearch} from "react-icons/bi"
import {BsArrowRightCircleFill} from "react-icons/bs"
import { IoIosArrowBack,IoIosArrowForward} from "react-icons/io";
import card1 from "./images/girl1.jpg"
import card2 from "./images/shoe1.jpg"
import card3 from "./images/girl2.jpg"
import card4 from "./images/shoe2.jpg"
import card5 from "./images/bag.jpg"

function App() {
  return (
    <div className="sellerlist">
      <nav className="navbar navbar-expand-lg px-2">
        <div className="container-fluid ">
          <a className="navbar-brand fs-4 fw-bold" href="/">SellerList</a>
          <div className="collapse  navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <a className="nav-link btn text-black border-1 border border-black rounded-pill py-1 px-4  " aria-current="page" href="/">sign up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn text-white rounded-pill border-1 border border-black py-1 px-4 bg-dark" href="/">Log in</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="menu container-fluid shadow-sm border border-top-1 border-opacity-25 my-2 py-1 border-secondary py-0">
        <nav className="px-2 d-flex justify-content-between align-items-center  ">
          <ul className="menus list-unstyled d-flex mb-0 " style={{fontWeight:500}}>
            <li className="pe-2 me-5">Womenswear</li>
            <li className="pe-2 me-5">Menswear</li>
            <li className="pe-2 me-5">Kidswear</li>
            <li className="pe-2 me-5">Beauty</li>
            <li className="pe-2 me-5">Hobbies</li>
            <li className="">Homeware</li>
          </ul>
          <div className="btns pe-1 ">
            <ul className=" list-unstyled d-flex align-items-center mb-0">
              <li className='me-3 btn rounded-pill border border-1 ' style={{ padding: "3px 18px" }}>sell items</li>
              <li className='pb-2  fs-5'><FaShoppingCart /></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="inputs px-4 py-3">
        <div className="back-content d-flex justify-content-center flex-column align-items-center">
          <div className="back-color ">&nbsp;</div>
          <h2 className='text-white' style={{paddingBottom:"32px"}}>Change your wardrobe.Find exciting goods.</h2>
          <div className="input-box d-flex align-items-center bg-white ps-2 py-1" style={{width:"50%"}}>
            <span className='fs-5 mb-1 fw-bold ps-2'><BiSearch/></span>
            <input type="text" className='ps-3' style={{width:"90%"}} placeholder='What are you looking for?' />
            <span  className='
             fs-4 pb-1 pe-2 curs'style={{color:"rgb(50, 220, 220)"}} ><BsArrowRightCircleFill/></span>
          </div>
          <div className="tags">
            <ul className='list-unstyled  d-flex justify-content-center mt-3'>
              <li className='me-3 rounded-pill' >Womens clothes</li>
              <li className='me-3 rounded-pill' >Beauty</li>
              <li className='me-3 rounded-pill' >Mens Clothes</li>
              <li className='me-3 rounded-pill' >Kids Clothes</li>
              <li className='me-3 rounded-pill' >Hobbies</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cards px-4 py-2">
        <div className="card-tags d-flex justify-content-between fw-bold fs-6">
          <div className="">Listed Recently</div>
          <div className="fw-bolder">
            <span><IoIosArrowBack/></span>
            <span><IoIosArrowForward/></span>
          </div>
        </div>
        <div className="cardss py-4">
          <div className="card1 box ">
            <img src={card1} className='img-fluid' alt="" />
          </div>
          <div className="card2 box">
            <img src={card2} className='img-fluid' alt="" />
          </div>
          <div className="card3 box">
            <img src={card3} className='img-fluid' alt="" />
          </div>
          <div className="card4 box">
            <img src={card4} className='img-fluid' alt="" />
          </div>
          <div className="card5 box">
            <img src={card5} className='img-fluid' alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

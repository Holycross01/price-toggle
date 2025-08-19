import React, { useState } from "react";
import ToggleButton from "./components/toggleButton";
const Price = () => {
  const [buttonOne, setButtonOne] = useState(false)
  const [buttonTwo, setButtonTwo] = useState(false)
  const [buttonThree, setButtonThree] = useState(false)
  const [toggle,setToggle] = useState(false)

console.log(toggle)

  return (
    <div className="price-div">
      <div className="price-view">
        <h2>Our pricing</h2>
        <div className="toggleBtnDiv">
          <div className="togglebtn">
          {/* where i am passing the toggle props */}
        <span style={{ fontWeight: toggle ? "bold" : "normal" }}>Annually</span><ToggleButton Toggle={toggle} setToggle={setToggle}/><span style={{ fontWeight: !toggle ? "bold" : "normal" }}>Monthly</span>
          </div>
        </div>
        <div className="price-view-cart">
          <div className="view-cart-one">
            <ul className="cart-listone">
              <li className="class-li">
                <p>basic</p>
                <h1>{toggle ? "$199.99" : "$19.99"}</h1>
                <p>500 GB Storage</p>
              </li>
              <li>2 users allowed</li>
              <li>Send up to 3 GB</li>
              <div className="btn-div">
                <button 
                onMouseEnter={()=> setButtonOne(true)}
                onMouseLeave={()=> setButtonOne(false)}
                className={buttonOne ? "activeButton" : "inActiveButton"}
              
                >
                  LEARN MORE
                </button>
              </div>
            </ul>
          </div>
          <div className="view-cart-two">
            <ul className="cart-listtwo">
              <li className="class-li">
                <p>Professional</p>
               <h1>{toggle ? "$299.99" : "$29.99"}</h1>
                <p>1 TB Storage</p>
              </li>
              <li>10 users allowed</li>
              <li>Send up to 10 GB</li>

              <div className="btn-div">
                <button
              onMouseEnter={()=> setButtonTwo(true)}
              onMouseLeave={()=> setButtonTwo(false)}
              className={buttonTwo ? "inActiveButton" : "activeButton"}
                >
                  LEARN MORE
                </button>
              </div>
            </ul>
          </div>
          <div className="view-cart-three">
            <ul className="cart-listthree">
              <li className="master">
                <p>Master</p>
              <h1>{toggle ? "$399.99" : "$39.99"}</h1>
                <p>2 TB Storage</p>
              </li>
              <li>10 users allowed</li>
              <li>Send up to 20 GB</li>
              <div className="btn-div">
                <button
              onMouseEnter={()=> setButtonThree(true)}
              onMouseLeave={()=> setButtonThree(false)}
              className={buttonThree ? "activeButton" : "inActiveButton"}
                >
                  LEARN MORE
                </button>
              </div>
            </ul>
          </div>
        </div>
        {/* end of price-cart-div */}
      </div>
    </div>
  );
};

export default Price;

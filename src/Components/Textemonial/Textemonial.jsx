import React, { useRef } from "react";
import "./Textemonial.css";
import Next_icon from "../../assets/next-icon.png";
import Back_icon from "../../assets/back-icon.png";
import User1 from "../../assets/user-1.png";
import User2 from "../../assets/user-2.png";
import User3 from "../../assets/user-3.png";
import User4 from "../../assets/user-4.png";

const Textemonial = () => {

  const slider = useRef()
  let tx = 0;



  const slideForward =()=>{
      if (tx > -50) {
        tx -= 25
      }
      slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward =()=>{
    if (tx < 0) {
      tx += 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }



  return (
    <div className="textemonial">
      <img src={Next_icon} className="next-btn" onClick={slideForward}/>
      <img src={Back_icon} className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User1} />
                <div>
                  <h3>Gojo Saturo </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dicta ut laborum aliquam harum velit, eum fugiat sequi atque
                fugit sed! Adipisci ipsam, vel doloribus maiores dolorem natus
                in quas.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User2} />
                <div>
                  <h3>Gojo Saturo </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dicta ut laborum aliquam harum velit, eum fugiat sequi atque
                fugit sed! Adipisci ipsam, vel doloribus maiores dolorem natus
                in quas.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User3} />
                <div>
                  <h3>Gojo Saturo </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dicta ut laborum aliquam harum velit, eum fugiat sequi atque
                fugit sed! Adipisci ipsam, vel doloribus maiores dolorem natus
                in quas.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User4} />
                <div>
                  <h3>Gojo Saturo </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dicta ut laborum aliquam harum velit, eum fugiat sequi atque
                fugit sed! Adipisci ipsam, vel doloribus maiores dolorem natus
                in quas.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Textemonial;

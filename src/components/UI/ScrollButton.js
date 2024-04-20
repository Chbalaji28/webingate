import React, { useState }  from "react";
import "../../styles/scrollbutton.css";

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
      
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      
      window.addEventListener('scroll', toggleVisible);
    return (
       <>
          <button className="scroll_button" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
             <i className="ri-arrow-up-double-line"></i>
          </button>
       </>
    )
};

export default ScrollButton;
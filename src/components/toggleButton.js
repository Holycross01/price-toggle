import React from "react";
const ToggleButton = ({Toggle, setToggle}) => {

  const handleClick = () =>{
    setToggle(!Toggle)
  }


  return (
    <div className="toggle-wrapper"
    onClick={handleClick}
      style={{
        width: "40px", // slightly wider to fit the bigger circle
        height: "20px", // increased height
        backgroundColor: Toggle? "#898DDC" : "#AAACD4",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        padding: "4px", // slightly larger padding
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="toggle-circle"
        style={{
          height: "20px", // increased height
          width: "20px",  // increased width
          borderRadius: "50%",
          backgroundColor: "#fff",
          transform: Toggle? "translateX(0)" : "translateX(22px)", // adjusted for new size
          transition: "transform 0.3s ease",
        }}
      ></div>
    </ div>
  );
};

export default ToggleButton;

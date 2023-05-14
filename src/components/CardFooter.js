import React from "react";

const CardFooter = ({ inputValue, setInputValue }) => {
  let result = {};
  if (!inputValue) {
    result = {
      title: "---",
      backGroundColor: "#d3d8e2",
    };
  } else if (inputValue < 15) {
    result = {
      title: "Slow",
      backGroundColor: "red",
    };
  } else if (inputValue < 40) {
    result = {
      title: "Good",
      backGroundColor: "#1b82f1",
    };
  } else if (inputValue >= 40) {
    result = {
      title: "Fast",
      backGroundColor: "lightgreen",
    };
  }

  return (
    <div
      style={{ backgroundColor: result.backGroundColor }}
      className="card-footer"
    >
      {result.title}
    </div>
  );
};

export default CardFooter;

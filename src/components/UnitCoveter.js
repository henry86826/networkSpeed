import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UnitCoveter = ({ inputValue, handleInputChange }) => {
  return (
    <div className="converter">
      <div className="text-left flex-1">
        <div className="converter-title">Set</div>
        <input
          type="number"
          className="input-number"
          min="0"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <span className="angle-icon fa-2x" style={{ marginTop: 30 }}>
        <FontAwesomeIcon icon={["fas", "angle-right"]} />
      </span>
      <div className="text-right flex-1">
        <div className="converter-title">Show</div>
        <input
          type="text"
          className="input-number text-right"
          disabled
          value={inputValue / 8}
        />
      </div>
    </div>
  );
};

export default UnitCoveter;

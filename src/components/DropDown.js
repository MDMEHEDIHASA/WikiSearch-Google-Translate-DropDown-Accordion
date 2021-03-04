import { React, useState, useEffect,useRef } from "react";
const DropDown = ({ label,selected, onSelectedChange, items }) => {
  //console.log(props);
  const [value, setValue] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    const onBodyClick = (e) => {
      //console.log(e.target);
      if(ref.current && ref.current.contains(e.target)){
        return;
      }
      setValue(false);  
      };

      document.body.addEventListener("click",onBodyClick,{capture:true});
      return()=>{
        document.body.removeEventListener('click',onBodyClick);
      }
   
  },[]);

  const renderedOptions = items.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={(e) => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${value ? "visible active" : ""}`}
          onClick={(e) => {
            setValue(!value);
          }}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${value ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;

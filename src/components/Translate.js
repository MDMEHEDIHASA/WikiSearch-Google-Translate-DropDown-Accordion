import React, { useState } from "react";
import DropDown from "./DropDown";
import Convert from './Convert';

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label:"Bangla",
    value:"bn"
   }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  const label = "Select a Language";
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <DropDown
        label={label}
        selected={language}
        onSelectedChange={setLanguage}
        items={options}
      />
      <hr/>
      <Convert text={text} selectLanguage={language}/>
    </div>
  );
};

export default Translate;

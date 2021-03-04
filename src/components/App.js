import React,{useState} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import DropDown from './DropDown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';


const items = [
    {
      title: 'What is React?',
      content: 'React is a front end javascript framework',
    },
    {
      title: 'Why use React?',
      content: 'React is a favorite JS library among engineers',
    },
    {
      title: 'How do you use React?',
      content: 'You use React by creating components',
    },
  ];

  const options = [
    {
      label: 'The Color Red',
      value: 'red',
    },
    {
      label: 'The Color Green',
      value: 'green',
    },
    {
      label: 'A Shade of Blue',
      value: 'blue',
    },
  ];


const App = ()=>{
  const [selected,setSelected]  = useState(options[0]);
  const label = "Select a color";
  return(
    <div>
      <Header/>
    <Route path="/">
      <Accordion items={items}/>
    </Route>
    <Route path="/search">
      <Search/>
    </Route>
    <Route path="/dropdown">
      <DropDown label={label} selected={selected} onSelectedChange={setSelected} items={options}/>
    </Route>
    <Route path="/translate">
      <Translate/>
    </Route>
    </div>
  );
}

/*const App =  ()=>{
  const [selected,setSelected]=useState(options[0]);
  const [showDropDown,setDropDown] = useState(true);
    return(
        <div>
          <button onClick={()=>setDropDown(!showDropDown)}>Toogle DropDown</button>
          {showDropDown ? 
            <DropDown selected={selected} onSelectedChange={setSelected} items={options}/>:null
          }
            
        </div>
        
    );
}*/

export default App;
//<br/>
//<Accordion items={items}/>   
//<Search/>

//export default = ()=>{return()}
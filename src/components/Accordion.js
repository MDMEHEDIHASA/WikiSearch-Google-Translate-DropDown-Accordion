import React, { useState } from "react";

const Accordion = (props) => {
  const [activeIndex,setActiveIndex] = useState(null);
  
  const renderItems = props.items.map((item, index) => {
    const handleClick=(index)=>{
      setActiveIndex(index)
    }
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={(e)=>handleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return(
    <div className="ui styled accordion">
      {renderItems}
      </div>
  )
};
export default Accordion;











/*class Accordion extends React.Component {
  state={activeIndex:null}
  onTitleClick(index){
    this.setState({activeIndex:index})
  }
  render() {
    const renderItems = this.props.items.map((item,index) => {
        const active = index === this.state.activeIndex ? 'active': '';
      return (
        <React.Fragment key={item.title}>
          <div onClick={(e)=>console.log(index)}
          className={`title ${active}`} onClick={()=>this.onTitleClick(index)}>
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className={`content ${active}`}>
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      );
    });
    return (<div className="ui styled accordion">
        {renderItems}
        
        </div>);
  }
}*/


import React,{useState,useEffect} from "react";
import axios from 'axios';

const Search = ()=>{
    const [term,setTerm] = useState('programming');
    const [debouceTerm,setDebounceTerm]= useState(term);
    const [results,setResults] = useState([]);
    useEffect(()=>{
      const timeId = setTimeout(()=>{
        setDebounceTerm(term);
      },1000);
      return(()=>{
        clearTimeout(timeId);
      })
    },[term]);
    
    useEffect(()=>{
      const  search = async()=>{
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: debouceTerm,
          },
        });  
        setResults(data.query.search);
      }
      if(debouceTerm){
        search();
      }
    },[debouceTerm]);
    // useEffect(()=>{
    //   const  search = async()=>{
    //     const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
    //       params: {
    //         action: 'query',
    //         list: 'search',
    //         origin: '*',
    //         format: 'json',
    //         srsearch: term,
    //       },
    //     });  
    //     setResults(data.query.search);
    //   }
    //   if(term && !results.length){
    //     search();
    //   }
    //   const timeOutId = setTimeout(()=>{
    //     if(term){search()};
    //   },1000);
      
    //   return(()=>{
    //     clearTimeout(timeOutId);
    //   })
    // },[term,results.length]);
    const renderResults = results.map((item)=>{
      //console.log(item);
      return(
        <div key={item.pageid} className="item">
          <div className="right floated content">
            <a className="ui button" href={`https://en.wikipedia.org?curid=${item.pageid}`}>Go</a>
          </div>
          <div className="content">
            <div className="header">
              {item.title}
            </div>
            <span dangerouslySetInnerHTML={{__html:item.snippet}}></span>
            
          </div>
        </div>
      );
    })
    return(
        <div>
        <div className="ui form">
          <div className="field">
            <label>Enter Search Term</label>
            <input
              value={term}
              onChange={(e)=>{setTerm(e.target.value)}}
              className="input"
            />
          </div>
        </div>
        <div className="ui celled list">{renderResults}</div>
      </div>
    );
}

export default Search;
/*let prevterm='';
class Search extends React.Component {
    state={term:'',data:[]}
    
  componentDidUpdate(prevterm,newTerm){
      newTerm = this.state.term;
      if(prevterm !== this.state.term){
          axios.get('http://en.wikipedia.org/w/api.php',{
              params:{
                action:'query',
                list:'search',
                origin:'*',
                srsearch:this.state.term,
              }
          }).then(async result=>{
              const data = await result.data;
              this.setState({data:data});
              console.log(result.data);
          })
      }
  }
  render() {
    return (
      <div className="ui content">
          <p>{this.state.data}</p>
        <div className="ui form">
          <div className="field">
            <label>Enter Search Term</label>
            <input
              value={this.state.term}
              onChange={(e)=>{prevterm= this.state.term;this.setState({term:e.target.value});console.log(this.state.term)}}
              className="input"
            />
          </div>
        </div>
      </div>
      
    );
  }
}*/



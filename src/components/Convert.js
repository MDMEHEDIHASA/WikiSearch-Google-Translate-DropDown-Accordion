import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Convert = ({text,selectLanguage})=>{
    const [debounceTerm,setDebounceTerm]=useState(text);
    const [data,setData] = useState('');
    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setDebounceTerm(text);
        },500);
        
        return ()=>{
            clearTimeout(timeoutId);
        }
    },[text]);

    useEffect(()=>{
        const translateResult = async()=>{
            const response = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params:{
                q:text,
                target:selectLanguage.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
            }
            });
            setData(response.data.data.translations[0].translatedText);
        }
        if(debounceTerm){
            translateResult();
        }
    },[selectLanguage,debounceTerm]);

    return(
    <div>
        <h1>{data}</h1>
    </div>
    );
}

export default Convert;
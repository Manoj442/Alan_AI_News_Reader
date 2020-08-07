import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './Components/NewsCards/NewsCards';
import AlanAiImg from './Images/AlanAI.jpg';
import styled from 'styled-components';
import InfoCards from './Components/InfoCards';
import wordsToNumbers from 'words-to-numbers';
const StyledImage=styled.img`
width:95% !important;
padding:2% 2% 2% 2%;
`;
const App=()=>{
    const alanKey='f6fe48538d5200a0f367f69d4ac9fbb42e956eca572e1d8b807a3e2338fdd0dc/stage';
    const[articles,setArticles]=useState([]);
    const[activeArticle,setActiveArticle]=useState(-1);
    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command,articles,number})=>{
                switch(command){
                    case 'newHeadlines':
                    console.log(articles);
                    setArticles(articles);
                    break; 

                    case 'highlight':
                    setActiveArticle((prevArticle) => prevArticle + 1);
                    break;

                    case 'open':
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number,{fuzzy:true}): number;
                    const article = articles[parsedNumber - 1];
                    if(article){
                        window.open(articles[number].url,"_blank");
                        alanBtn().playText('Opening...');
                    }  
                    else if(parsedNumber > 20){
                        alanBtn().playText('Please try again');
                    } 
                    break;                
                }               
            }
        })
    },[])      
    return(
        <div>
            <StyledImage src={AlanAiImg} alt="Powered by ALAN AI"/>
            {
                articles.length ? <NewsCards articles={articles} activeArticle={activeArticle}/> : <InfoCards/>
            }            
        </div>
    )
}

export default App;
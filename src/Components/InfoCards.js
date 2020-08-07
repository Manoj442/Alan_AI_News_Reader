import React from 'react';
import {Grow,Grid,Typography,Card,CardContent} from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
padding: 1% 12% 0% 12%;
height: 25vh;
overflow-wrap: break-word;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
color:white !important;
}
`
const StyledGridItem = styled(Grid)`
padding:0% 2%;
`

const StyledCategory=styled(Typography)`
font-family: 'Red Rose', cursive !important;
color: gainsboro;
`
const StyledInfo=styled(Typography)`
font-family: 'Lemonada', cursive !important;
font-size:12px !important;
`
const StyledSay=styled(Typography)`
font-family: 'Red Rose', cursive !important;
font-size: 12px !important;
`;

const StyledDiv=styled.div`
height:10vh;
`;
const StyledSuggestion=styled(Typography)`
font-family: 'Catamaran', sans-serif !important;
font-size:12px !important;
`;
const InfoCardArray=[
    {Category:'Latest News', Text:'Give me the latest news'},
    {Category:'News by Category',Info:'Category: Business,Entertainment,Sports,Science..',
    Text:'Give me the latest Technology News'},
    {Category:'News by Terms',Info:'Terms: Bitcoin,smartphones, Donald Trump...',
    Text:'Whats up with Donald Trump'},
    {Category:'News by Sources',Info:'Sources: CNN, BBC News, The Hindu etc',
    Text:'Give me the news from CNN'}
];
const InfoCards=()=>{    
return(<Grow in>
<Grid container spacing={3}>
    {
        InfoCardArray.map((infoCard,index)=>{
            return <StyledGridItem key={index} item xs={12} sm={6} md={4} lg={3}>
            <StyledCard>                
                    <StyledCategory align="center" variant="h6">                        
                        {infoCard.Category}                        
                    </StyledCategory>
                    <StyledDiv>
                    <StyledInfo>
                      {infoCard.Info? infoCard.Info : ""}
                    </StyledInfo>
                    </StyledDiv>
                   <br/>
                    <StyledSay align="center">Try saying: </StyledSay>
                    <StyledSuggestion align="justify">                       
                       "{infoCard.Text}"
                    </StyledSuggestion>               
            </StyledCard>       
        </StyledGridItem>
        })
    }   
   </Grid>
   </Grow>
)
}

export default InfoCards;
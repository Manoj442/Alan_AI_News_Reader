import React from 'react';
import {Grow,Grid,Typography} from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles.js';
const NewsCards=({articles,activeArticle})=>{
    const classes = useStyles();
    return(<Grow in>
        <Grid container alignItems="stretch" spacing={3}>
        {
            articles.map((article,index)=>{
                return  <Grid className={classes.container} className={classes.container}
                 key={index} item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
                     <NewsCard article={article} i={index} activeArticle={activeArticle}/>
                </Grid>               
            })
        }           
        </Grid>        
    </Grow>)
}
export default NewsCards;
import React,{useState,useEffect,createRef} from 'react';
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import newsImage from './../../Images/News.jpg';
import styled from 'styled-components';
import classNames from 'classnames';
import useStyles from './style';

const NewsCard=({article:{description,publishedAt,source,title,url,urlToImage},i,activeArticle})=>{
    const[elemRefs,setElemRefs]=useState([]);
    const scrollToRef = (ref)=>{
      window.scroll(0,ref.current.offsetTop - 50)
    }
    useEffect(()=>{
      setElemRefs((refs)=>Array(20).fill().map((_,index)=>refs[index] || createRef()))
    },[])

    useEffect(()=>{
      if(i === activeArticle && elemRefs[activeArticle]){
        scrollToRef(elemRefs[activeArticle]);
      }
    },[i,activeArticle,elemRefs])
    const classes = useStyles();
    return(<Card ref={elemRefs[i]} className={classNames(classNames(classes.card),activeArticle === i ? classes.activeCard : null )}>
    <CardActionArea href={url} target="_blank">
      <CardMedia className={classes.media} image={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'} title={title} />
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className={classes.cardActions}>
      <Button size="small" color="primary" href={url}>Learn More</Button>
      <Typography variant="h5" color="textSecondary" component="h4">{i + 1}</Typography>
    </CardActions>
  </Card>
    )
};
export default NewsCard;
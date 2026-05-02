import styles from './Netflix.module.css';
import styled from 'styled-components';
import React from 'react';

export const SeriesCard = (props)=>{
  const {img_url,name,rating,description,cast,genre,watch_url} = props.data;

 

   
        const Button = styled.button` 
      
                padding:1.2rem 2.4rem;
                border:none;
                font-size : 1rem;
                background-color:${(props)=>
                 props.rating >=8.5 ? 'pink' : '#f7dc6f'};
                color : black;
                
               cursor :pointer;
    `;
                
            
   
  const rating_Sty = rating>=8.5 ? styles.super_hit : styles.average;           
 
 return(
   <li className={styles.card}>
 
            <div>
            
              <img
                src={img_url}
                alt="sorry"
                width="40%"
                height="40%"/>
            </div>
            <div className={styles['card-content']}>
            <h2>Name : {name}</h2>
            <h3>Rating : 
            <span
             className={`${styles.rating} rating ${rating_Sty}`}
            
            >{rating}</span> </h3>
            <p>summary:- {description} </p>
            <p>Genre : {genre}</p>
            <p>{cast}</p>
            <a href={watch_url} target="_blank">
            {/* for using inline css a new object are created for every render. this is issue */}
              {/* <button style={btn_style}>Watch-Now</button> */}
              <Button rating={rating} >Watch-Now</Button>

            </a>
            </div>
          </li>
 )
}
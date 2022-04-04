import React from 'react';


const Rating = ({rate}) => {
    function stars(x) {
        var rateTab = [];
        for (let i=0; i<5; i++){
            if( i<x ){
                rateTab.push(<span style={{fontSize:'100%',color:'yellow'}}>★</span>);
            }else {
                rateTab.push(<span style={{fontSize:'100%',color:'gray'}}>★</span>);
            }
        }
        return rateTab;
    }
  return (
    <div className='Rating'>
        {stars(rate)}
    </div>
  )
}

export default Rating
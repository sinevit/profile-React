import React, { useState } from 'react';
import classes from './Paginations.module.css'

export const Pagination = ({totalUsersCount,pageSize,currentPage,
    onClickPagination, partSize=10}) => {

    let pagesCount = Math.ceil(totalUsersCount/pageSize)
    let pages = [];
    for(let i=1; i<= pagesCount; i++){
        pages.push(i)
    }

    let partCount = Math.ceil(pagesCount/partSize);
    const [partNumber, setPartNumber] = useState(1); 
    const leftBorder = (partNumber - 1) * partSize + 1;
    const rightBorder = partNumber * partSize;

    return(
        <div>
            {partNumber > 1 && <button onClick={()=> setPartNumber(partNumber-1)}>Prev</button>}
            <div>
                {pages
                .filter(p => p >= leftBorder && p <= rightBorder )
                .map(page => {
                    return <span key={page} onClick={(e)=> { onClickPagination(page)}} 
                    className={currentPage === page? classes.selectedPage : ''}>{page}</span>
                })}
            </div>
            {partNumber < partCount && <button onClick={()=> setPartNumber(partNumber+1)}>Next</button>}
        </div>
           
    )
}

  
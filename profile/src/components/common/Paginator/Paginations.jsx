import React from 'react';
import classes from './Paginations.module.css'

export const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount/ props.pageSize)
    let pages = [];
    for(let i=1; i<= pagesCount; i++){
        pages.push(i)
    }

    return(
            <div>
                {pages.map(page => {
                    return <span key={page} onClick={(e)=> { props.onClickPagination(page)}} 
                    className={props.currentPage === page? classes.selectedPage : ''}>{page}</span>
                })}
            </div>
           
    )
}

  
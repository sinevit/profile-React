import classes from './Profile.module.css'

export const Profile = () => {
    return(
      <div className={classes.content}>
          <img alt='japan' src='https://travelclub.kz/storage/tours/August2022/PPotdGnApSOgAdMnveS0.jpg'></img>
        <div className={classes.content__ava}>
          <img src='https://img.freepik.com/premium-vector/masked-samurai-girl-hand-drawn-illustration-vector_73644-9.jpg?w=2000' alt='samuray'></img>
        </div>
        <div>
          my posts 
          <div>
            new post
          </div>
          <div>
            <div className='item'>Post1</div>
            <div className='item'>Post2</div>
          </div>
        </div>
      </div>
    )
}
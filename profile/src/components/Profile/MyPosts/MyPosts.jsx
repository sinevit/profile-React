import classes from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
    return(
      <div>
        my posts 
        <div>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove post</button>
        </div>
        <div>
          <Post like={21} message={`Желтый лист плывет.
            У какого берега, цикада,
            Вдруг проснешься ты?`}/>
          <Post like={15} message={`Цветок… И еще цветок…
            Так распускается слива,
            Так прибывает тепло.`}/>
          <Post like={1} message='my first post'/>
        </div>
      </div>
    )
}
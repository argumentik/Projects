import React, {useRef, useState} from 'react';
import PostList from "./PostList";

const Tasks = ({posts}) => {
    const [newPosts, setNewPosts] = useState(posts)
    const title = useRef(null)
    const date = useRef(null)
    const difficult = useRef(null)

    const AddPost = () =>{
        if(title.current.value != "" && date.current.value != "" && difficult.current.value != "" && difficult.current.value <= 3 && difficult.current.value > 0){
            const newPost = {title: title.current.value.toString(), deadLine: date.current.value.toString(), countStars: difficult.current.value.toString()}
            setNewPosts([...newPosts, newPost])
            title.current.value = ""
            date.current.value = ""
            difficult.current.value = ""
        }
        else{
            window.alert('Fill all in form!')
        }
    }

    return (
        <>
            <div className='TaskInfo'>
                <input type="text" placeholder='Заголовок' ref={title}/>
                <input type="date" placeholder='Дата окончания' ref={date}/>
                <input type="number" max='3' min='1' ref={difficult}/>
                <button onClick={() => AddPost()}>Add task</button>
            </div>
            <PostList posts={newPosts}/>
        </>
    );
};

export default Tasks;
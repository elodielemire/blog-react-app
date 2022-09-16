import './Article.css';
import {useLocation} from "react-router-dom";

export default function Article () {
    const location = useLocation();

    return(
        <div className='article'>
            <h2 className='article-title'>{location.state.title}</h2>
            <p className='article-body'>{location.state.body}</p>
        </div>
    )
}
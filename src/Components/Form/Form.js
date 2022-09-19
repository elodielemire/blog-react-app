import './Form.css';
import {useDispatch} from "react-redux";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export default function Form (props) {
    const [article, setArticle] = useState({
        title: props.title,
        body: props.body,
        id: props.id ? props.id : uuidv4()
    });

    const dispatch = useDispatch();

    const handleForm = e => {
        e.preventDefault();

        if (props.edit) {
            dispatch({
                type: 'EDITARTICLE',
                payload: article
            })
        } else {
            dispatch({
                type: 'ADDARTICLE',
                payload: article
            })
        }

        setArticle({
            title: '',
            body: ''
        })
    };

    const handleTitle = e => {
        const newTitleState = {...article, title: e.target.value};
        setArticle(newTitleState);
    };

    const handleBody = e => {
        const newBodyState = {...article, body: e.target.value};
        setArticle(newBodyState);
    };

    return(
        <>
            <form onSubmit={handleForm} className="form-container">
                <label htmlFor="title">Title</label>
                <input onChange={handleTitle} value={article.title} type="text" id="title"/>

                <label htmlFor="article">Your article</label>
                <textarea onChange={handleBody} value={article.body} type="text" id="body"/>

                <button>Send</button>
            </form>
        </>
    )
}
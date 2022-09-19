import './Form.css';
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {addArticle, editArticle} from "../../redux/articles/articleReducer";

export default function Form (props) {
    const [article, setArticle] = useState({
        title: props.title,
        body: props.body,
        id: props.id ? props.id : uuidv4()
    });

    const handleForm = e => {
        e.preventDefault();

        if (props.edit) {
            editArticle(article);
        } else {
            addArticle(article)
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
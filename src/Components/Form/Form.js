import './Form.css';
import {useState} from "react";
import {useDispatch} from "react-redux";

export default function Form () {
    const [article, setArticle] = useState({
        title: '',
        body: ''
    });

    const dispatch = useDispatch();

    const handleForm = e => {
        e.preventDefault();

        dispatch({
            type: 'ADDARTICLE',
            payload: article
        })

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
            <h1 className="form-title">Write an article</h1>
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
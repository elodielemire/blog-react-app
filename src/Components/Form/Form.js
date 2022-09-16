import './Form.css';
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from 'uuid';

export default function Form () {
    const dispatch = useDispatch();

    const handleForm = e => {
        e.preventDefault();

        const newArticle = {
            title : inputsRefs.current[0].value,
            body: inputsRefs.current[1].value,
            id: uuidv4(),
        }

        dispatch({
            type: 'ADDARTICLE',
            payload: newArticle
        })

        e.target.reset();
    };

    const inputsRefs = useRef([]);

    const addRefs = el => {
        if (el && !inputsRefs.current.includes(el)) {
            inputsRefs.current.push(el);
        }
    }


    return(
        <>
            <h1 className="form-title">Write an article</h1>
            <form onSubmit={handleForm} className="form-container">
                <label htmlFor="title">Title</label>
                <input ref={addRefs} type="text" id="title"/>

                <label htmlFor="article">Your article</label>
                <textarea ref={addRefs} type="text" id="body"/>

                <button>Send</button>
            </form>
        </>
    )
}
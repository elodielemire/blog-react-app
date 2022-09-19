import './Home.css';
import Card from "../../Components/Card/Card";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {deleteArticle, getArticles, editArticle} from "../../redux/articles/articleReducer";
import {v4 as uuidv4} from 'uuid';
import {Link} from "react-router-dom";

export default function Home () {
    const {articles} = useSelector(state => ({
        ...state.articleReducer
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        if (articles.length === 0) {
            dispatch(getArticles());
        }
    }, [])

    const deleteCard = id => {
        dispatch(deleteArticle(id));
    }

    return(
        <>
            <h1 className="container-title">All articles</h1>
            <div className="cards-container">
                {articles.map(item => {
                    const formattedTitle = item.title.replace(/\s+/g, '-').trim();

                    return(
                        <>
                            <Card key={uuidv4()} item={item}>
                                <Link  to={{pathname: `article/${formattedTitle}`}}
                                       state={{title: item.title, body: item.body}}>
                                    <h2 className='card-title'>{item.title}</h2>
                                </Link>
                                <button className='card-btn'>
                                    <Link  to={{pathname: `edit/${formattedTitle}`}}
                                           state={{title: item.title, body: item.body, id: item.id}}>
                                        <img className='card-btn__img' src={require("../../assets/edit.png")}/>
                                    </Link>
                                </button>
                                <button className='card-btn' onClick={() => deleteCard(item.id)}>X</button>
                            </Card>
                        </>
                    )
                })}
            </div>
        </>
    )
}
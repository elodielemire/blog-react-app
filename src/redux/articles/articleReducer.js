const INITIAL_STATE = {
    articles: [],
}

function articleReducer (state= INITIAL_STATE, action) {
    switch (action.type) {
        case "LOADARTICLES": {
            return {
                ...state,
                articles: action.payload
            }
        }
        case "DELETEARTICLE": {
            const newArr = [...state.articles].filter(article => article.id !== action.payload)
            return {
                ...state,
                articles: newArr
            }
        }
        case "EDITARTICLE": {
            const newArr = [...state.articles];
            newArr.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title;
                    item.body = action.payload.body;
                }
            });
            return {
                ...state,
                articles: newArr
            }
        }
        case "ADDARTICLE": {
            const newArr = [...state.articles];
            newArr.unshift(action.payload);
            return {
                ...state,
                articles: newArr
            }
        }
    }

    return state;
}

export default articleReducer;

export const getArticles = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => dispatch({
            type: 'LOADARTICLES',
            payload: data
        }))
}

export const deleteArticle = id => dispatch => {
    dispatch({
        type: 'DELETEARTICLE',
        payload: id
    })
}

export const editArticle = article => dispatch => {
    dispatch({
        type: 'EDITARTICLE',
        payload: article
    })
}

export const addArticle = article => dispatch => {
    dispatch({
        type: 'ADDARTICLE',
        payload: article
    })
}
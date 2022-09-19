import Form from "../../Components/Form/Form";
import {useLocation} from "react-router-dom";

export default function EditArticle () {
    const location = useLocation();

    return(
        <>
            <h1 className="container-title">Edit an article</h1>
            <Form
                title={location.state.title}
                body={location.state.body}
                id={location.state.id}
                edit={true}/>
        </>
    )
}
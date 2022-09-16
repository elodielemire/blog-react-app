import './Card.css';
import {Link} from "react-router-dom";

export default function Card (props) {
    const formattedTitle = props.item.title.replace(/\s+/g, '-').trim();
    return(
        <Link to={{pathname: `article/${formattedTitle}`}}
              state={{title: props.item.title, body: props.item.body}}
              className="card">
            {props.children}
        </Link>
    )
}
import { useParams } from "react-router-dom";
import useFetch from "../data/useFetch";

function PostComments() {
    const { id } = useParams();
    const [comments] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    return (
        <div>
            <h1>Comments for Post {id}</h1>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.name}</strong>: {comment.body} ({comment.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostComments;

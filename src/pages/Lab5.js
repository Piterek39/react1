import { useReducer } from "react";
import TableDataReducer from "../data/TableDataReducer";
import useFetch from "../data/useFetch";

function Lab5() {
    const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
    const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

    const initialData = posts.map((p) => ({
        user: users.find((u) => u.id === p.userId),
        post: p,
        comments: comments.filter((c) => c.postId === p.id),
    }));

    const [tableData, dispatch] = useReducer(TableDataReducer, initialData);

    return (
        <div>
            <h1>Lab 5</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            User
                            <button onClick={() => dispatch({ type: 'sort_asc' })}>Sort Asc</button>
                            <button onClick={() => dispatch({ type: 'sort_desc' })}>Sort Desc</button>
                            <button onClick={() => dispatch({ type: 'reset', payload: initialData })}>Reset</button>
                        </th>
                        <th>Post</th>
                        <th>Comments Count</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.user?.name}</td>
                            <td>{row.post.title}</td>
                            <td>{row.comments.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Lab5;

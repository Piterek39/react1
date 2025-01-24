import { useParams } from "react-router-dom";
import useFetch from "../data/useFetch";

function UserDetails() {
    const { id } = useParams();  // Pobieramy id użytkownika z URL
    const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);  // Pobieramy dane użytkownika

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
        </div>
    );
}

export default UserDetails;

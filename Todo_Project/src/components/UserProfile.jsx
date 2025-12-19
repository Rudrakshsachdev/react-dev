import { useContext } from "react";
import { UserContext, UserProvider } from "./UserContext";


const UserProfile = () => {
    const {user} = useContext(UserContext);

    return <div>
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
    </div>
}

export default UserProfile;
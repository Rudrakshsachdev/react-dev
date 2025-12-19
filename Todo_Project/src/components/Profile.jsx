import { useState } from "react";

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "",
        age: "",
    });

    const handleChange = (e) => {
        const [name, value] = e.target;

        setProfile((prevProfile) => {
            return { ...prevProfile, [name]: value };
        });
    }

    return (
        <div>
            <h2>Profile</h2>
            <label>Name:
            <input type="text" placeholder="Enter Your Name" value={profile.name} onChange={handleChange}/>
            </label>
            <br />
            <label>Age:
            <input type="text" placeholder="Enter Your Age" value={profile.age} onChange={handleChange}/>
            </label>


            <h3>Profile Information</h3>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
        </div>
    )
}

export default Profile;
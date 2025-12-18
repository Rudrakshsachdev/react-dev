const UserStatus = ({loggedin, isAdmin}) => {
    if (loggedin == true  && isAdmin == true) {
        return <h2>Welcome Admin User</h2>
    } else if (loggedin == true && isAdmin == false) {
        return <h2>Welcome Regular User</h2>
    }
}

export default UserStatus;
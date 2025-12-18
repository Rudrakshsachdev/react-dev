const UserList = () => {
    const users = [
        {
            id: 1,
            name: 'Alice',
            age: 25,
        },
        {
            id: 2,
            name: 'Bob',
            age: 30,
        },
        {
            id: 3,
            name: 'Charlie',
            age: 35,
        },
        {
            id: 4,
            name: 'Diana',
            age: 28,
        },
        {
            id: 5,
            name: 'Ethan',
            age: 32,
        },
        {
            id: 6,
            name: 'Fiona',
            age: 27,
        },
    ];

    return (
        <div>
            <h2>User List: </h2>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h3>Name: {user.name}   </h3>
                            <p>Age: {user.age}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList;
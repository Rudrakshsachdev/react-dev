const UserInfo = () => {
  const User = [
    {
        name: "John Doe",
        age: 28,
        email: "john@gmail.com",
    },
    {
        name: "Jane Smith",
        age: 34,
        email: "jane@gmail.com",
    },
    {
        name: "Mike Johnson",
        age: 45,
        email: "mike@gmail.com",
    },
    {
        name: "Emily Davis",
        age: 22,
        email: "emily@gmail.com",
    },
    {
        name: "David Wilson",
        age: 31,
        email: "david@gmail.com",
    }
  ]
  
  return (
    <div>
        {
            User.map((user, index) => {
                return (
                    <div key={index}>
                        <h2>Name: {user.name}</h2>
                        <p>Age: {user.age}</p>
                        <p>Email: {user.email}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UserInfo;
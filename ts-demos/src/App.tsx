import Users from "../components/Users";
import Button from "../components/Buttons";
import {Info, AdminInfoList} from "../components/types";

export default function App() {

  const user: Info = {
    id: 1,
    name: "Rudraksh",
    email: "rudraksh@example.com"
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Admin User",
    email: "admin@example.com",
    role: "Super Admin",
    lastLogin: new Date()
  };


  return (
    <div>
      <Users name="John Doe" email="john.doe@example.com" age={30} />
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />

    </div>
  )
}
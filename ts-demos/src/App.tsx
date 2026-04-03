import Users from "../components/Users";
import Button from "../components/Buttons";
import UserInfo from "../components/UserInfo";
import AdminInfo from "../components/AdminInfo";
import type { Info, AdminInfoList } from "../components/types";

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
      <h1>React + TypeScript Demo</h1>
      
      <section>
        <h2>User Component (Direct Props)</h2>
        <Users name="John Doe" email="john.doe@example.com" age={30} />
      </section>

      <hr />

      <section>
        <h2>UserInfo Component (Using Info Type)</h2>
        <UserInfo user={user} />
      </section>

      <hr />

      <section>
        <h2>AdminInfo Component (Using AdminInfoList Type)</h2>
        <AdminInfo admin={admin} />
      </section>

      <hr />

      <section>
        <h2>Button Component</h2>
        <Button label="Click Me" onClick={() => alert('Button clicked!')} />
      </section>

    </div>
  )
}
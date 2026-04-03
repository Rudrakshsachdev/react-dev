import { AdminInfoList } from './types.ts';

type AdminInfoProp = {
    admin: AdminInfoList;
}

const AdminInfo : React.FC<AdminInfoProp> = ({ admin }) => {
    return (
        <div>
           <h2>{admin.id}</h2>
           <h2>{admin.name}</h2>
           <p>{admin.email}</p>
           <p>Role: {admin.role}</p>
           <p>Last Login: {admin.lastLogin.toDateString()}</p>
        </div>
    )
}

export default AdminInfo;
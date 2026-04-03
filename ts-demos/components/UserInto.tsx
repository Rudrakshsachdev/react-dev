import { Info } from '../types/info';

type UserInfoProp = {
    user: Info;
}



const UserInfo : React.FC<UserInfoProp> = ({ user }) => {
    return (
        <div>
            <h2>{user.id}</h2>
           <h2>{user.name}</h2>
           <p>{user.email}</p>
        </div>
    )
}
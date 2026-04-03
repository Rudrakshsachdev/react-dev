import { ReactNode } from 'react';

interface UserProps {
    children: ReactNode;
}

type UserShape = {
    name: string;
    email: string;
    age: number;
}


export default function User({name, email, age}: UserShape) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{age}</h3>
      <p>This is a user component in a React application using TypeScript.</p>
    </div>
  );    
}

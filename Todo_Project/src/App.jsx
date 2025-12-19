import { Add } from './components/Add.jsx';
import BasicEffect from './components/BasicEffect.jsx';
import ComponentA from './components/ComponentA.jsx';
import ComponentB from './components/ComponentB.jsx';
import CopyInput from './components/CopyInput.jsx';
import Counter from './components/Counter.jsx';
import CounterEffect from './components/CounterEffect.jsx';
import FetchDataEffect from './components/FetchDataEffect.jsx';
import Footer from './components/Footer.jsx';
import Greet from './components/Greet.jsx';
import Greeting from './components/Greeting.jsx';
import { Header } from './components/Header.jsx';
import { JSXRules } from './components/JSXRules.jsx';
import ListMap from './components/ListMap.jsx';
import MainContent from './components/MainContent.jsx';
import Person from './components/Person.jsx';
import { ProductInfo } from './components/ProductInfo.jsx';
import Products from './components/Products.jsx';
import Profile from './components/Profile.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import StyledCard from './components/StyledCard.jsx';
import Switcher from './components/Switcher.jsx';
import TodoList from './components/TodoList.jsx';
import { UpdateUser } from './components/UpdateUser.jsx';
import { UserProvider } from './components/UserContext.jsx';
import UserInfo from './components/UserInfo.jsx';
import UserList from './components/UserList.jsx';
import UserProfile from './components/UserProfile.jsx';
import UserStatus from './components/UserStatus.jsx';
import Weather from './components/Weather.jsx';
import WelcomeMessage from './components/WelcomeMessage.jsx';
import { useState, useEffect } from 'react';


// function App() {

//   const myName = "Rudraksh";

//   const multiply = (a, b) => a * b;

//   return (
//     <div>
//       <WelcomeMessage />
//       <Greet />
//       <Add />
//       <Header />
//       <MainContent /> 
//       <JSXRules />
//       <Footer />

//       {<p>{2+2}</p>}
//       {<p>Hello, {myName}</p>}
//       <p>3 * 4 = {multiply(3, 4)}</p>
//     </div>
//   )
// }

// export default App;

const App = () => {


  const [count, setCount] = useState(19);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const [Friends, setFriends] = useState(['Alice', 'Bob', 'Charlie']);

  const addonefriend = () => {
    setFriends([...Friends, 'NewFriend']);
  }

  const removefriend = () => {
    setFriends(Friends.filter((f) => f !== 'NewFriend'));
  }


  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Call UseEffect!");
    document.title = `You clicked ${value} times`;
  }, [value]);




  const [data, Setdata] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");

      const data = await response.json();

      if (data && data.length) Setdata(data);
    }
    fetchData();
  }, []);


  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me</button>


    <p>Count: {count}</p>

    <button onClick={increment} >Increment Count</button>

    <button onClick={decrement}>Decrement Count</button>

    <p>Friends: {Friends.map(friend => {
      return <li key={friend.toString()}>{friend}</li>
    })}</p>
    <button onClick={addonefriend}>Add a Friend</button>
    <button onClick={removefriend}>Remove a Friend</button>



    <div>
      <h2>Fetched Data:</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>

    <ComponentA />
    {/* <ComponentB /> */}

    <FetchDataEffect />

      <CounterEffect />

      <UserProvider>
      <UserProfile />
      <UpdateUser />  
      </UserProvider>  
      <WelcomeMessage />
      <Greet />
      <Greeting timeofDay="morning" />
      <Add />
      <Header />
      <MainContent /> 

      <StyledCard />

      <ProfileCard />

      <Counter />

      <TodoList />

      <Profile />
      
      <CopyInput />

      <Switcher />

      <BasicEffect />


      <User name="Rudraksh" age={19} isMarried={false} />

      <Person name="Alice" age={25} occupation="Engineer" />
      <Person name="Bob" age={30} occupation="Designer" />

      <Products name="Laptop" price={999.99} category="Electronics" />
      <Products name="Smartphone" price={699.99} category="Electronics" />
      <Password password="mypassw" />

      <UserStatus loggedin={true} isAdmin={true} />


    <Weather temperature={30} />
    <Button />

      <ListMap />
      <UserInfo />
      <UserList />
      <JSXRules />
      <ProductInfo />
      <Footer />
      <h1 style={{color: 'blue', textAlign: 'center', backgroundColor: 'teal'}}>This is inline styling in React</h1>
    </div>
  )
}


const User = ({name, age, isMarried}) => {
  console.log(name, age, isMarried);
  return <section>
    <h2>Name: {name}</h2>
    <h3>Age: {age}</h3>
    <h4>Marital Status: {isMarried ? "Married" : "Single"}</h4>
  </section>
}


const ValidPassword = () => <h1>Password Valid </h1>

const InvalidPassword = () => <h1>Password Invalid </h1>

const Password = (props) => {
  const password = props.password;
  if (password.length >= 8) {
    return <ValidPassword />
  } else {
    return <InvalidPassword />
  }
}


const Button = () => {
  const handleClick = () => {
    console.log("Button Clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>
}

export default App;
import { Add } from './components/Add.jsx';
import Footer from './components/Footer.jsx';
import Greet from './components/Greet.jsx';
import Greeting from './components/Greeting.jsx';
import { Header } from './components/Header.jsx';
import IconComponent from './components/IconComponent.jsx';
import { JSXRules } from './components/JSXRules.jsx';
import ListMap from './components/ListMap.jsx';
import MainContent from './components/MainContent.jsx';
import Person from './components/Person.jsx';
import { ProductInfo } from './components/ProductInfo.jsx';
import Products from './components/Products.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import StyledCard from './components/StyledCard.jsx';
import UserInfo from './components/UserInfo.jsx';
import UserList from './components/UserList.jsx';
import UserStatus from './components/UserStatus.jsx';
import Weather from './components/Weather.jsx';
import WelcomeMessage from './components/WelcomeMessage.jsx';


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
  return (
    <div>
      <WelcomeMessage />
      <Greet />
      <Greeting timeofDay="morning" />
      <Add />
      <Header />
      <MainContent /> 

      <StyledCard />

      <ProfileCard />

      <IconComponent />


      <User name="Rudraksh" age={19} isMarried={false} />

      <Person name="Alice" age={25} occupation="Engineer" />
      <Person name="Bob" age={30} occupation="Designer" />

      <Products name="Laptop" price={999.99} category="Electronics" />
      <Products name="Smartphone" price={699.99} category="Electronics" />
      <Password password="mypassw" />

      <UserStatus loggedin={true} isAdmin={true} />


    <Weather temperature={30} />

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


export default App;
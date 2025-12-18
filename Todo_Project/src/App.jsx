import { Add } from './components/Add.jsx';
import Footer from './components/Footer.jsx';
import Greet from './components/Greet.jsx';
import { Header } from './components/Header.jsx';
import { JSXRules } from './components/JSXRules.jsx';
import ListMap from './components/ListMap.jsx';
import MainContent from './components/MainContent.jsx';
import { ProductInfo } from './components/ProductInfo.jsx';
import UserInfo from './components/UserInfo.jsx';
import UserList from './components/UserList.jsx';
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
      <Add />
      <Header />
      <MainContent /> 
      <ListMap />
      <UserInfo />
      <UserList />
      <JSXRules />
      <ProductInfo />
      <Footer />
    </div>
  )
}

export default App;
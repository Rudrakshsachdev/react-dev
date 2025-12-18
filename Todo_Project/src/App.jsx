import { Add } from './components/Add.jsx';
import Footer from './components/Footer.jsx';
import Greet from './components/Greet.jsx';
import { Header } from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';


function App() {
  return (
    <div>
      <Greet />
      <Add />
      <Header />
      <MainContent /> 
      <Footer />
    </div>
  )
}

export default App;
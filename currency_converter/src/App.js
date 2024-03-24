import './App.css';
import {
    Blog,
    Converter,
    FindCurrency,
    Footer,
    Header,
    UsdToLkr } from './components/index.js'
function App() {
  return (
    <div className="App">   
     <div className='gradient__bg'>
     <Header/>
     <Blog/>
     <UsdToLkr/>
      <Converter/>
      <FindCurrency/>
      <Footer/>
     </div>
    </div>
  );
}

export default App;

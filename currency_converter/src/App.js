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
      <Header/>
      <Converter/>
      <UsdToLkr/>
      <Blog/>
      <FindCurrency/>
      <Footer/>
    </div>
  );
}

export default App;

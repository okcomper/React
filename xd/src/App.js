import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';

import Mainpage from './mainpage/mainpage';
import Recipepage from './recipepage/recipepage';
import Searchpage from './searchpage/searchpage'
import Signup from './signup/signup'
import Login from './login/login'




function App() {
  return (
   <BrowserRouter>
     <Route exact path="/" component={ Mainpage } />
     <Route exact path="/XD" component={ Mainpage } />
     <Route path='/recipepage' component={ Recipepage } />
     <Route path='/searchpage' component={ Searchpage } />
     <Route path='/signup' component={ Signup } />
     <Route path='/login' component={ Login } />
   </BrowserRouter>



  );
}

export default App;

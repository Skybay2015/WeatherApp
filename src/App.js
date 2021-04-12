import Header from './Components/Header';
import Main from './Pages/Main';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';
import DayStatistic from './Pages/DayStatistic';
import { useSelector } from 'react-redux';

function App() {
   const data = useSelector((state) => state.weather.data);

   return (
      <Router>
         <Header></Header>
         <Switch>
            <Route exact path='/'>
               <Main />
            </Route>
            {data && (
               <Route path='/stat/:id'>
                  <DayStatistic />
               </Route>
            )}
            <Redirect to='/' />
         </Switch>
      </Router>
   );
}

export default App;

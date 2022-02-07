import './App.css';
import Footer from './Footer';
import Header from './Header';
import CategoryDescription from './Category/CategoryDescription';
import Category from './Category/Category';
import About from './About';
import Home from './Home.js';
import Error404 from './Error404';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
	  <div>
		  <Header />
		  <Router>
			  <Switch>
				  <Route exact path="/" component={Home} />
				  <Route path="/about" component={About} />
				  <Route exact path="/category" component={Category} />
				  <Route path="/categoryD/:name" component={CategoryDescription} />
				  <Route component={Error404} />
				  
			  </Switch>
		  </Router>
		  <Category />
	 </div>
  );
}

export default App;

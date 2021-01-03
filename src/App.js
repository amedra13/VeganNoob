import './styles/main.scss';
import BrandImage from './BrandImage';
import Home from './views/Home';
import Recipes from './views/Recipes';
import FoodRecipe from './views/FoodRecipe';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="app">
				<BrandImage />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/recipes" component={Recipes} />
					<Route exact path="/recipes/:id" component={FoodRecipe} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

import './styles/main.scss';
import BrandImage from './BrandImage';
import Main from './views/Main';
import FoodRecipe from './views/FoodRecipe';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="app">
				<BrandImage />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/recipe/:id" component={FoodRecipe} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

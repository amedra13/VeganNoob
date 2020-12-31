import './styles/main.scss';
import BrandImage from './BrandImage';
import RecipeList from './RecipeList';

function App() {
	return (
		<div className="app">
			<BrandImage />
			<RecipeList />
			<RecipeList />
		</div>
	);
}

export default App;

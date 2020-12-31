import './styles/main.scss';
import BrandImage from './BrandImage';
import Recipe from './Recipe';

function App() {
	return (
		<div className="app">
			<BrandImage />
			<div className="appContent">
				<Recipe />
			</div>
		</div>
	);
}

export default App;

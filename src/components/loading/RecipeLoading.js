import React from 'react';
import Skeleton from 'react-loading-skeleton';

const RecipeLoading = () => {
	return (
		<>
			<div className="recipeLoading">
				<div>
					<Skeleton height={'100%'} />
				</div>
				<div className="recipeLoading__desc">
					<Skeleton count={2} height={50} />
					<Skeleton count={9} />
				</div>
				<div>
					<Skeleton height={'98%'} />
				</div>
			</div>
			<div className="recipeLoading__instruc">
				<div className="loading__header">
					<Skeleton height={40} />
				</div>
				<div className="loading__headerList">
					<Skeleton width={200} height={20} />
					<Skeleton count={5} height={13} />
				</div>
				<div className="loading__header">
					<Skeleton height={40} />
				</div>
				<div className="loading__headerList">
					<Skeleton width={200} height={20} />
					<Skeleton count={5} height={13} />
				</div>
				<div className="loading__header">
					<Skeleton height={40} />
				</div>
				<div className="loading__headerList">
					<Skeleton width={200} height={20} />
					<Skeleton count={5} height={13} />
				</div>
				<div className="loading__header">
					<Skeleton height={40} />
				</div>
				<div className="loading__headerList">
					<Skeleton width={200} height={20} />
					<Skeleton count={5} height={13} />
				</div>
			</div>
		</>
	);
};

export default RecipeLoading;

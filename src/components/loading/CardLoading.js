import React from 'react';
import Skeleton from 'react-loading-skeleton';

const CardLoading = () => {
	return (
		<>
			<div className="cardLoading">
				<Skeleton height={390} />
				<div>
					<Skeleton count={2} />
				</div>
			</div>
			<div className="cardLoading">
				<Skeleton height={390} />
				<div>
					<Skeleton count={2} />
				</div>
			</div>
			<div className="cardLoading">
				<Skeleton height={390} />
				<div>
					<Skeleton count={2} />
				</div>
			</div>
		</>
	);
};

export default CardLoading;

type RatingProps = {
	value: number;
	className: string;
};
function Rating({ value, className }: RatingProps) {
	const renderStars = () => {
		const stars = [];
		const fullStars = Math.floor(value);
		const hasHalfStar = value % 1 !== 0;

		for (let i = 0; i < fullStars; i++) {
			stars.push(<i key={i} className="fas fa-star"></i>);
		}

		if (hasHalfStar) {
			stars.push(<i key={fullStars} className="fas fa-star-half-alt"></i>);
		}

		return stars;
	};

	return <div className={className}>{renderStars()}</div>;
}

export default Rating;

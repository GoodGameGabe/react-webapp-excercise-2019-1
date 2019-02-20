import React from "react";
import PropTypes from "prop-types";

export const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "60vh"
	};

	return <div className="image-slide" style={styles} />;
};

ImageSlide.propTypes = {
	url: PropTypes.strings
};

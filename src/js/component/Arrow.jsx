import React from "react";
import PropTypes from "prop-types";

export const Arrow = ({ direction, clickFunction, glyph }) => (
	<div className={`slide-arrow ${direction}`} onClick={clickFunction}>
		{glyph}
	</div>
);

Arrow.propTypes = {
	direction: PropTypes.Function,
	clickFunction: PropTypes.Function,
	glyph: PropTypes.String
};

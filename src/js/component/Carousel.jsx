import React from "react";
import { ImageSlide } from "./ImageSlide.jsx";
import { Arrow } from "./Arrow.jsx";

export class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImageIndex: 0
		};
	}

	previousSlide = () => {
		const lastIndex = Image.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
		this.setState({
			currentImageIndex: index
		});
	};

	nextSlide = () => {
		const lastIndex = Image.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index = shouldResetIndex ? 0 : currentImageIndex + 1;
		this.setState({
			currentImageIndex: index
		});
	};

	render() {
		return (
			<div className="carousel">
				<Arrow
					direction="left"
					clickFunction={this.previousSlide}
					glyph="&#9664;"
				/>

				<ImageSlide
					url={
						"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
					}
				/>

				<Arrow
					direction="right"
					clickFunction={this.nextSlide}
					glyph="&#9654;"
				/>
			</div>
		);
	}
}

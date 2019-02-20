import React from "react";

export class Cards extends React.Component {
	render() {
		return (
			<div
				className="main
			">
				<div className="row mb-5 pb-5">
					<div className="col-7 card-text my-5 py-5">
						<h1 className="card-title">
							First featurette heading.{" "}
							<span className="text-muted">
								It will blow your mind.
							</span>
						</h1>
						<p className="card-text part2 justify-content-right">
							Donec ullamcorper nulla non metus auctor fringilla.
							Vestibulum id ligula porta felis euismod semper.
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur. Fusce dapibus, tellus ac cursus
							commodo.
						</p>
					</div>
					<div className="col-5">
						<img
							className="card"
							src="http://placehold.it/500x500"
							alt="Card image cap"
						/>
					</div>
				</div>
				<hr className="line my-5" />
				<div className="row my-5 py-5">
					<div className="col-5">
						<img
							className="card"
							src="http://placehold.it/500x500"
							alt="Card image cap"
						/>
					</div>
					<div className="col-7 card-text pl-5 mt-5 pt-5">
						<h1 className="card-title pl-4">
							Oh yeah, it is that good.
							<span className="text-muted">
								{" "}
								See for yourself.
							</span>
						</h1>
						<p className="card-text pl-4 part2 justify-content-right">
							Donec ullamcorper nulla non metus auctor fringilla.
							Vestibulum id ligula porta felis euismod semper.
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur. Fusce dapibus, tellus ac cursus
							commodo.
						</p>
					</div>
				</div>
				<hr className="line my-5" />
				<div className="row my-5 py-5">
					<div className="col-7 card-text mt-5 pt-5">
						<h1 className="card-title">
							And lastly, this one.{" "}
							<span className="text-muted">Checkmate.</span>
						</h1>
						<p className="card-text part2 justify-content-right">
							Donec ullamcorper nulla non metus auctor fringilla.
							Vestibulum id ligula porta felis euismod semper.
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur. Fusce dapibus, tellus ac cursus
							commodo.
						</p>
					</div>
					<div className="col-5">
						<img
							className="card"
							src="http://placehold.it/500x500"
							alt="Card image"
						/>
					</div>
				</div>
			</div>
		);
	}
}

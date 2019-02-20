import React from "react";

export class Cardsround extends React.Component {
	render() {
		return (
			<div className="main my-5 text-center">
				<div className="row  align-items-center .justify-content-center">
					<div className="col-lg-4 text-secondary mb-5">
						<img
							className="col-6 rounded-circle py-0"
							src="http://placehold.it/140x140"
							alt="Card image cap"
						/>
						<div className="card-body py-0">
							<h2 className="card-title">Heading</h2>
							<p className="card-text pb-3">
								Donec sed odio dui. Etiam porta sem malesuada
								magna mollis euismod. Nullam id dolor id nibh
								ultricies vehicula ut id elit. Morbi leo risus,
								porta ac consectetur ac, vestibulum at eros.
								Praesent commodo cursus magna.
							</p>
						</div>
						<a
							href="#"
							className="btn btn-secondary .btn-outline-light">
							<div>View details {">"}</div>
						</a>
					</div>
					<div className="col-lg-4 text-center mb-5 text-secondary">
						<img
							className="col-6 card-img-top rounded-circle py-0"
							src="http://placehold.it/140x140"
							alt="Card image cap"
						/>
						<div className="card-body py-0">
							<h2 className="card-title">Heading</h2>
							<p className="card-text .justify-content-center pb-3">
								Duis mollis, est non commodo luctus, nisi erat
								porttitor ligula, eget lacinia odio sem nec
								elit. Cras mattis consectetur purus sit amet
								fermentum. Fusce dapibus, tellus ac cursus
								commodo, tortor mauris condimentum nibh.
							</p>
						</div>

						<a
							href="#"
							className="btn btn-secondary .btn-outline-light">
							<div>View details {">"}</div>
						</a>
					</div>
					<div className="col-lg-4 text-center text-secondary pt-4 mb-5">
						<img
							className="col-6 rounded-circle py-0"
							src="http://placehold.it/140x140"
							alt="Card image cap"
						/>
						<div className="card-body py-0">
							<h2 className="card-title">Heading</h2>
							<p className="card-text pb-2">
								Donec sed odio dui. Cras justo odio, dapibus ac
								facilisis in, egestas eget quam. Vestibulum id
								ligula porta felis euismod semper. Fusce
								dapibus, tellus ac cursus commodo, tortor mauris
								condimentum nibh, ut fermentum massa justo sit
								amet risus.
							</p>

							<a
								href="#"
								className="btn btn-secondary .btn-outline-light">
								<div>View details {">"}</div>
							</a>
						</div>
					</div>
				</div>
				<hr className="line my-5 pt-5" />
			</div>
		);
	}
}

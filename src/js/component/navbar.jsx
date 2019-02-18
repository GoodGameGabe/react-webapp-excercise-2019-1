import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to className="navbar-brand" href="#">
					Powered by SiteNav
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/" className="nav-link">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog" className="nav-link">
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/checkout" className="nav-link">
								Check Out
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/demo" className="nav-link">
								Demo
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/single" className="nav-link">
								Single
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/login" className="nav-link">
								Login
							</Link>
						</li>
						<li className="nav-item">
<<<<<<< HEAD
							<Link to="/Store" className="nav-link">
=======
							<Link to="/storeview" className="nav-link">
>>>>>>> 49c2396b96074c4bf15fe4f32343957939db81a5
								StoreView
							</Link>
						</li>

						<Context.Consumer>
							{({ store }) => {
								return (
									<li className="nav-item justify-content-end">
										{store.session[0].username}
									</li>
								);
							}}
						</Context.Consumer>
					</ul>
				</div>
			</nav>
		);
	}
}

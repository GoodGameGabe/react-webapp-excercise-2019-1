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
						<li className="nav-item active fix">
							<Link to="/" className="nav-link">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item fix">
							<Link to="/blog" className="nav-link">
								Blog
							</Link>
						</li>
						<li className="nav-item fix">
							<Link to="/checkout" className="nav-link">
								Check Out
							</Link>
						</li>
						<li className="nav-item fix">
							<Link to="/demo" className="nav-link">
								Demo
							</Link>
						</li>
						<li className="nav-item fix">
							<Link to="/single" className="nav-link">
								Single
							</Link>
						</li>
						<li className="nav-item fix">
							<Link to="/login" className="nav-link">
								Login
							</Link>
						</li>
						<li className="nav-item fix">
							<Link to="/store" className="nav-link">
								StoreView
							</Link>
						</li>
						<li className="nav-item space">
							<Context.Consumer>
								{({ store, actions }) => {
									{
										return store.session.length != 0 ? (
											<div className="row">
												<span className="col-md-4 control">
													{store.session[0].username}
												</span>
												<Link
													to={"/login"}
													className="nav-link ">
													<span
														className="col-md-4 adjust"
														onClick={() =>
															actions.logOut()
														}
													/>{" "}
													log out
												</Link>
											</div>
										) : (
											<Link
												to={"/login"}
												className="nav-link">
												<span>Please log in</span>
											</Link>
										);
									}
								}}
							</Context.Consumer>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

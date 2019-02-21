import React, { Component } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

export class Login extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					{
						return store.session.length != 0 ? (
							<LoggedIn />
						) : (
							<LoggedOut />
						);
					}
				}}
			</Context.Consumer>
		);
	}
}

export class LoggedIn extends React.Component {
	render() {
		return (
			<div className="justify-content-center text-center">
				<h1 className="text-center align-items-center">
					{"You're already logged in, fool!"}
				</h1>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<Link to={"/login"}>
								<button
									className="btn btn-danger"
									onClick={() => actions.logOut()}>
									Log Out
								</button>
							</Link>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

export class LoggedOut extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}

	emailInput = e => {
		this.setState({ email: e.target.value });
	};

	passwordInput = e => {
		this.setState({ password: e.target.value });
	};

	Checker = () => {
		var ayy = /^.{6,}$/;
		var lmao = this.state.password;
		var result = ayy.test(lmao);

		if (result) {
			return true;
		} else {
			return false;
		}
	
		var ayy2 = /^.{6,}$/;
		var lmao2 = this.state.email;
		var result2 = ayy2.test(lmao2);

		if (result2) {
			return true;
		} else {
			return false;
		}
	};

	render() {
		return (
			<div className="justify-content-center align-items-center row">
				<div className="text-center col-4">
					<form className="form-signin">
						<img
							className="mb-4 mt-4"
							src="https://i.kym-cdn.com/photos/images/original/001/279/124/286.jpg"
							alt=""
							width="72"
							height="72"
						/>
						<h1
							className="h3 mb-3 font-weight-normal"
							onClick={this.emailChecker}>
							Please sign in
						</h1>
						<label htmlFor="inputEmail" className="sr-only">
							Email address
						</label>
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<input
										type="email"
										id="inputEmail"
										className="form-control"
										placeholder="Email address"
										required=""
										autoFocus=""
										onChange={this.emailInput}
										value={this.state.email}
									/>
								);
							}}
						</Context.Consumer>
						<label htmlFor="inputPassword" className="sr-only">
							Password
						</label>
						<input
							type="password"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							required=""
							onChange={this.passwordInput}
							value={this.state.password}
						/>
						<div className="checkbox mb-3 mt-3">
							<label>
								<input type="checkbox" value="remember-me" />{" "}
								Remember Me
							</label>
						</div>
						<Context.Consumer>
							{({ store, actions }) => {
								return (

									<button
										className="btn btn-primary"
										onClick={e => {
											e.preventDefault();
											if (
												this.Checker();
											) {
												actions.logIn();
											}
										}}>
										Log In!{" "}
									</button>

								);
							}}
						</Context.Consumer>
						<p className="mt-5 text-muted">© 2017-2018</p>
					</form>
				</div>
			</div>
		);
	}
}

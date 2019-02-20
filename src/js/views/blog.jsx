import React from "react";

export class Blog extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
					<div className="col-md-6 px-0">
						<h1 className="display-4 font-italic">
							Title of a longer featured blog post ```\\\st
						</h1>
						<p className="lead my-3">
							Multiple lines of text that form the lede, informing
							new readers quickly and efficiently about what’s
							most interesting in this post’s contents.
						</p>

						<p className="lead mb-0">
							<a href="#" className="text-white font-weight-bold">
								Continue reading...
							</a>
						</p>
					</div>
				</div>
				{/* Featured post & Post title blocks */}
				<div className="row mb-2">
					<div className="col-md-6">
						<div className="card flex-md-row mb-4 shadow-sm h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-primary">
									World
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										Featured post
									</a>
								</h3>
								<div className="mb-1 text-muted">Nov 12</div>
								<p className="card-text mb-auto">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content.
								</p>
								<a href="#">Continue reading</a>
							</div>
							<svg
								className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block"
								width="200"
								height="248"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="xMidYMid slice"
								focusable="false"
								role="img"
								aria-label="Placeholder: Thumbnail">
								<title>Placeholder</title>
								<rect
									fill="#55595c"
									width="100%"
									height="100%"
								/>
								<text fill="#eceeef" dy=".3em" x="50%" y="50%">
									Thumbnail
								</text>
							</svg>
						</div>
					</div>
					<div className="col-md-6">
						<div className="card flex-md-row mb-4 shadow-sm h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-success">
									Design
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										Post title
									</a>
								</h3>
								<div className="mb-1 text-muted">Nov 11</div>
								<p className="card-text mb-auto">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content.
								</p>
								<a href="#">Continue reading</a>
							</div>
							<svg
								className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block"
								width="200"
								height="250"
								preserveAspectRatio="xMidYMid slice"
								focusable="false"
								role="img"
								aria-label="Placeholder: Thumbnail">
								<title>Placeholder</title>
								<rect
									fill="#55595c"
									width="100%"
									height="100%"
								/>
								<text fill="#eceeef" dy=".3em" x="50%" y="50%">
									Thumbnail
								</text>
							</svg>
						</div>
					</div>
<<<<<<< HEAD
=======
					<div className="container">
						<div className="row no-gutters">
							<div className="col-12 col-sm-6 col-md-8" />
							<div className="col-6 col-md-4" />
						</div>
					</div>
>>>>>>> 1d4a5f32c4deeae1895b694034878d58a913d4a7
				</div>
				<main role="main" className="container">
					<div className="row">
						<div className="col-md-8 blog-main">
							<h3 className="pb-4 mb-4 font-italic border-bottom">
								From the Firehouse
							</h3>
							<div className="blog-post">
								<h2 className="blog-post-title">
									Sample blog post{" "}
								</h2>
								<p className="blog-post-meta">
									January 1, 2014 by
									<a href="#">Mark</a>
								</p>
								<p>
									This blog post shows a few different types
									of content that’s supported and styled with
									Bootstrap. Basic typography, images, and
									code are all supported.
								</p>
								<hr />
								<p>
									Cum sociis natoque penatibus et magnis
									<a href="#">dis parturient montes</a>
									nascetur ridiculus mus. Aenean eu leo quam.
									Pellentesque ornare sem lacinia quam
									venenatis vestibulum. Sed posuere
									consectetur est at lobortis. Cras mattis
									consectetur purus sit amet fermentum.
								</p>
								<blockquote>
									<p>
										Curabitur blandit tempus porttitor.
										<strong>
											Nullam quis risus eget urna mollis
										</strong>
										ornare vel eu leo. Nullam id dolor id
										nibh ultricies vehicula ut id elit.
									</p>
								</blockquote>
								<p>
									Etiam porta
									<em>sem malesuada magna</em>
									mollis euismod. Cras mattis consectetur
									purus sit amet fermentum. Aenean lacinia
									bibendum nulla sed consectetur.
								</p>
								<h2>Heading</h2>
								<p>
									Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus dolor auctor. Duis mollis,
									est non commodo luctus, nisi erat porttitor
									ligula, eget lacinia odio sem nec elit.
									Morbi leo risus, porta ac consectetur ac,
									vestibulum at eros.
								</p>
								<h3>Sub-heading</h3>
								<p>
									Cum sociis natoque penatibus et magnis dis
									parturient montes, nascetur ridiculus mus.
								</p>
								<pre>
									<code>Example code block </code>
								</pre>
								<p>
									Aenean lacinia bibendum nulla sed
									consectetur. Etiam porta sem malesuada magna
									mollis euismod. Fusce dapibus, tellus ac
									cursus commodo, tortor mauris condimentum
									nibh, ut fermentum massa.
								</p>
								<h3>Sub-heading</h3>
								<p>
									Cum sociis natoque penatibus et magnis dis
									parturient montes, nascetur ridiculus mus.
								</p>
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	}
}

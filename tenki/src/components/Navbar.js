import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light">
			<div className="container-fluid d-flex flex-column flex-md-row">
				<form className="d-flex input-group">
					<button className="btn btn-outline-primary">GPS</button>
					<input
						className="form-control me-2"
						type="search"
						placeholder="Enter a location..."
						aria-label="Location input"
					/>
					<button className="btn btn-primary" type="submit">
						Search
					</button>
				</form>

				<ul className="nav nav-pills flex-row justify-content-around justify-content-md-start w-100 me-auto my-2 mb-lg-0">
					<li className="nav-item-dark">
						<a className="nav-link" href="#">
							Today
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Hourly
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Daily
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

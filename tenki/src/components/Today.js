import React from "react";

const Today = () => {
	return (
		<div className="container d-flex flex-column flex-xl-row">
			<div className="weather-overview text-center my-5">
				<div className="location-name">[Location Name]</div>
				<div className="weather-description">[brief weather description]</div>
				<div className="weather-icon">[icon]</div>
				<div className="weather-temperature">[temperature info]</div>
			</div>

			<div className="container-fluid weather-details text-center mb-3 px-2">
				<div className="row g-3">
					<div className="col-lg-4 col-6">
						<div className="card precipitation-card">
							<div className="card-header">Precipitation</div>
							<div className="card-body my-5">further info</div>
						</div>
					</div>
					<div className="col-lg-4 col-6">
						<div className="card humidity-card">
							<div className="card-header">Humidity</div>
							<div className="card-body my-5">further info</div>
						</div>
					</div>

					<div className="col-lg-4 col-6">
						<div className="card cloud-card">
							<div className="card-header">Cloud Cover</div>
							<div className="card-body my-5">further info</div>
						</div>
					</div>

					<div className="col-lg-4 col-6">
						<div className="card wind-card">
							<div className="card-header">Wind</div>
							<div className="card-body my-5">further info</div>
						</div>
					</div>

					<div className="col-lg-4 col-6">
						<div className="card moon-card">
							<div className="card-header">Moon Phase</div>
							<div className="card-body my-5">further info</div>
						</div>
					</div>

					<div className="col-lg-4 col-6">
						<div className="card tomorrow-card">
							<div className="card-header">Tomorrow</div>
							<div className="card-body my-5">further info</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Today;

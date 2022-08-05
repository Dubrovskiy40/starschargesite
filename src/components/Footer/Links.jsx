import { NavLink } from "react-router-dom"

const Links = () => {
	return (
		<div>
			<ul className="ul">
				<li className="link">
					<NavLink to="#">About App</NavLink>
				</li>

				<li className="link">
					<NavLink to="#">Store</NavLink>
				</li>

				<li className="link">
					<NavLink to="#">Info</NavLink>
				</li>
				<li className="link">
					<NavLink to="#">Contact</NavLink>
				</li>
			</ul>
			<ul className="ul">
				<li className="link">
					<NavLink to="#">FAQ</NavLink>
				</li>

				<li className="link">
					<NavLink to="#">Cookies</NavLink>
				</li>

				<li className="link">
					<NavLink to="#">Privacy Policy</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Links

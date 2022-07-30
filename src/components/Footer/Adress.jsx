import { NavLink } from "react-router-dom"

const Adress = () => {
	return (
		<div className="adress">
			<p>
				Your Name <br />
				St Name number 1 <br />
				City, Country
			</p>
			<p>+7 (926) 846-44-42</p>
			<NavLink to="#" className="btn">
				idenisov@starscharge.com
			</NavLink>
		</div>
	)
}

export default Adress

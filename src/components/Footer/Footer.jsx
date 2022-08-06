import Links from "./Links"
import Policy from "./Policy"
import Socials from "./Socials"

import "./_Footer.scss"

const Footer = () => {
	return (
		<footer className="footer">
			<Links />
			<Socials />
			<Policy />
		</footer>
	)
}

export default Footer

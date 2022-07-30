import Adress from "./Adress"
import Bottom from "./Bottom"
import Links from "./Links"
import Logo from "./Logo"
import "./style.scss"

const Footer = () => {
	return (
		<footer className="footer">
			<Logo />
			<div className="content">
				<Links />
				<Adress />
				<Bottom />
			</div>
		</footer>
	)
}

export default Footer

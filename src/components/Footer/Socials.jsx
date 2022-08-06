import { NavLink } from "react-router-dom"
import vk from "../../assets/images/footer/VK.png"
import tg from "../../assets/images/footer/Telegram.png"

const Socials = () => {
	return (
		<div className="socials">
			<li className="link">
				<NavLink className="img" to="#">
					<img src={tg} alt="Telegram" className="tg"></img>
				</NavLink>
			</li>
			<li className="link">
				<NavLink className="img" to="#">
					<img src={vk} alt="Вконтакте" className="vk"></img>
				</NavLink>
			</li>
		</div>
	)
}

export default Socials

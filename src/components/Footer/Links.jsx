import { NavLink } from "react-router-dom"

const Links = () => {
	return (
		<ul className="ul">
			<li>
				<NavLink className="link" to="#">
					О станции
				</NavLink>
			</li>

			<li>
				<NavLink className="link" to="#">
					Наша команда
				</NavLink>
			</li>

			<li>
				<NavLink className="link" to="#">
					Как это работает
				</NavLink>
			</li>
			<li>
				<NavLink className="link" to="#">
					Новости
				</NavLink>
			</li>
			<li>
				<NavLink className="link" to="#">
					Контакты
				</NavLink>
			</li>
		</ul>
	)
}

export default Links

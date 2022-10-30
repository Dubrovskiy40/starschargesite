import { Vk } from "./SVG/Vk";
import { Tg } from "./SVG/Tg";

const Socials = () => {
  return (
    <div className="socials">
      <li className="link">
        <a className="img" target="_blank" rel="noreferrer" href="https://t.me/+Q4YtW9gQfYFkMDhi">
          <Tg />
        </a>
      </li>
      <li className="link">
        <a className="img" target="_blank" rel="noreferrer" href="https://vk.com/starscharge">
          <Vk />
        </a>
      </li>
    </div>
  );
};

export default Socials;

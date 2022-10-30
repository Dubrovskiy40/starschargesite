import { Vk } from "./SVG/Vk";
import { Tg } from "./SVG/Tg";
import { Inst } from "./SVG/Inst";

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
      <li className="link">
        <a className="img" target="_blank" rel="noreferrer" href="https://instagram.com/starscharge?igshid=YmMyMTA2M2Y=">
          <Inst />
        </a>
      </li>
    </div>
  );
};

export default Socials;

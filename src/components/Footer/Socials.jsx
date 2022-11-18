import { Vk } from "./SVG/Vk";
import { Tg } from "./SVG/Tg";
import Skype from "./SVG/skype";
import WhatsApp from "./SVG/WhatsApp";

const Socials = ({ contacts }) => {
  const { whatsapp, telegram, skype, vk } = contacts;

  return (
    <div className="socials">
      <li className="link">
        <a className="img" target="_blank" rel="noreferrer" href={telegram}>
          <Tg />
        </a>
      </li>
      <li className="link">
        <a
          className="img"
          target="_blank"
          rel="noreferrer"
          href={vk || "https://vk.com/starscharge"}
        >
          <Vk />
        </a>
      </li>
      <li className="link">
        <a className="img" target="_blank" rel="noreferrer" href={skype}>
          <Skype />
        </a>
      </li>
      <li className="link">
        <a className="img" target="_blank" rel="noreferrer" href={whatsapp}>
          <WhatsApp />
        </a>
      </li>
    </div>
  );
};

export default Socials;

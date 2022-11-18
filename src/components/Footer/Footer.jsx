import Links from "./Links";
import Policy from "./Policy";
import Socials from "./Socials";
import { useState } from "react";
import { observer } from "mobx-react";
import MenuStore from "../../store/MenuStore";
import "./_Footer.scss";
import Contacts from "./Contacts";

const Footer = observer(({ contacts }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <footer className="footer">
      <Links
        items={MenuStore.items}
        active={modalActive}
        setActive={setModalActive}
      />
      <Contacts contacts={contacts} />
      <Socials contacts={contacts} />
      <Policy />
    </footer>
  );
});

export default Footer;

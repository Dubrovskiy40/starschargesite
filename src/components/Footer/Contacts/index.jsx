import { phoneFormating } from "../../../utils/phoneFormating";
import styles from "./styles.module.scss";

const Contacts = ({ contacts }) => {
  const oficePhone = contacts?.phone?.map((phone, i) => {
    if (!phone) return null;
    const [tel, formatedPhone] = phoneFormating(phone);

    return (
      <a href={`tel:${tel}`} key={phone + i}>
        {formatedPhone}
      </a>
    );
  });

  const mobilePhone = contacts?.mobile_phone?.map((phone, i) => {
    if (!phone) return null;
    const [tel, formatedPhone] = phoneFormating(phone);

    return (
      <a href={`tel:${tel}`} key={phone + i}>
        {formatedPhone}
      </a>
    );
  });

  const emails = contacts?.mail?.map((email, i) => {
    if (!email) return null;

    return (
      <a href={`mailto:${email}`} key={email + i}>
        {email}
      </a>
    );
  });

  return (
    <address className={styles.addressWrapper}>
      <div className={styles.address}>
        <p>адрес</p>
        <span className={styles.addressText}>
          <span className={styles.index}>{contacts.post_code}</span>,{" "}
          {contacts.address}
        </span>
      </div>
      <div className={styles.phones}>
        <p>тел.</p>
        {oficePhone}
        {mobilePhone}
      </div>
      <div className={styles.mails}>
        <p>mail</p>
        {emails}
      </div>
    </address>
  );
};

export default Contacts;

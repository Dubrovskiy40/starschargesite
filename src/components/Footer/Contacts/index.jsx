import styles from "./styles.module.scss";

const Contacts = ({ contacts }) => {
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
        {contacts.mobile_phone?.map((phone, i) => (
          <a href={`tel:${phone}`} key={phone}>
            {phone[0]} ({phone.slice(1, 4)}) {phone.slice(4, 7)}-
            {phone.slice(7, 9)}-{phone.slice(9)}
          </a>
        ))}
      </div>
      {/* <div className={styles.mails}>
        <p>mail</p>
        {contacts.mail.map((email, i) => (
          <a href={`mailto:${email}`} key={email}>
            {email}
          </a>
        ))}
      </div> */}
    </address>
  );
};

export default Contacts;

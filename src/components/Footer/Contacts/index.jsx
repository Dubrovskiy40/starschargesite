import styles from "./styles.module.scss";

const Contacts = () => {
  const data = {
    index: 121170,
    address: "г.Москва, Кутузовский проспект, д.36 стр 2, офис 319",
    phone: ["88002221416", "88002221416"],
    email: ["info@rucharge.com", "info@rucharge.com"],
  };

  return (
    <address className={styles.addressWrapper}>
      <div className={styles.address}>
        <p>адрес</p>
        <span className={styles.addressText}>
          <span className={styles.index}>{data.index}</span>, {data.address}
        </span>
      </div>
      <div className={styles.phones}>
        <p>тел.</p>
        {data.phone.map((phone, i) => (
          <a href={`tel:${phone}`}>
            {phone[0]} ({phone.slice(1, 4)}) {phone.slice(4, 7)}-
            {phone.slice(7, 9)}-{phone.slice(9)}
          </a>
        ))}
      </div>
      <div className={styles.mails}>
        <p>mail</p>
        {data.email.map((email, i) => (
          <a href={`mailto:${email}`}>{email}</a>
        ))}
      </div>
    </address>
  );
};

export default Contacts;

import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}> 23.10.1023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            ratione.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          perferendis magnam laborum odio quo. Rem quaerat aperiam numquam
          nostrum suscipit ullam, distinctio, inventore veniam quod maiores,
          illo debitis quam nihil!
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;

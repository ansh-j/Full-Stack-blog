import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo sit
              at asperiores fugiat rem incidunt delectus nulla numquam similique
              ratione, veritatis provident. Facilis, accusantium quas!
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              unde eum voluptate illo vel dolor officiis sapiente, harum
              provident sint doloremque, praesentium esse accusamus laudantium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              optio in eos laborum veritatis? Molestiae sed accusamus nisi odio
              accusantium eveniet, id cupiditate voluptatem tempore.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;

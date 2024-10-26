import "./Info.css";
import styles from "./Info.module.css";
import s from "./Info.module.scss";

console.log(styles);
// {
//   "info": "Info_info__KQZGj",
//   "myOtherButton": "Info_myOtherButton__TrgwE"
// }

export default function Info() {
  return (
    <>
      <div className={styles.info}>
        <h1>Hello from the Info component</h1>
        <h2>Hello from the Info component H2</h2>
        <button className={styles.myOtherButton}>Click me in the Info component</button>
      </div>
      <div className={s.card}>
        <h1 className={s.title}>Hello</h1>
      </div>
    </>
  );
}

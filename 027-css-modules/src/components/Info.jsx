import React from 'react'

import './Info.css'
import styles from './Info.module.css'

console.log(styles);
// {
//     "info": "Info_info__D48vc",
//     "myOtherButton": "Info_myOtherButton__GiQWF"
// }

function Info() {
  return (
    <div className={styles.info}>
    <h1 id={styles.id}>Hello from the Info components</h1>
    <h2>Hello</h2>
    <button className={styles.myOtherButton}>Click me in the Info component</button>
    </div>
  )
}

export default Info
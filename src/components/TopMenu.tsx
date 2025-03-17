import Image from 'next/image';
import styles from './topmenu.module.css';
import TopMenuItem from './TopMenuItem';

export default function TopMenu () {
  return (
    <div className={styles.menucontainer}>
        <TopMenuItem title='booking' pageRef='/booking'/>
      <img src="/img/logo.png" alt="Logo" className={styles.logoimg} 
      width={0} height={0} sizes='100vh'/>
    </div>
  );
};
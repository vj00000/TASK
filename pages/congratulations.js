import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Button from '../components/button';
export default function Congratulations() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title> Congratulations </title>
      </Head>

       <div>
        <h1 className={styles.Title}>CONGRATULATIONS </h1>
        <h3 className={styles.h3}>You have been added to WaitedList</h3>
       </div>
       <Link href='/display_data'>
        <Button  class="btn btn-danger" >
            Done
        </Button>
        </Link>
        </div>
       </>
   
   
  )
}

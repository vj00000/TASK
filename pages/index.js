import Head from "next/head";
import styles from "../styles/Home.module.css";
[];
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Financial Wellness Test </title>{" "}
      </Head>

      <main>
        <h1 className={styles.title}>
          {" "}
          They say, when Life gives you lemons, make lemonade
        </h1>

        <p className={styles.description}>
          But your lemonade might taste different from others considering how
          you play with your indegridients
        </p>

        <p className={styles.description}> Lets see how your lemonade tastes</p>
        <Link href="/FORM"> <button class="btn btn-danger" >JOIN NOW</button> </Link>
        <p className={styles.description}>
          Take the test & know which of the lemon personalities you resonate with
        </p>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

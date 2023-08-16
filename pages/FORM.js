import Head from 'next/head';
// import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Input from '../components/input';
import Button from '../components/button';
import { useState } from 'react';

export default function Form() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    // event.preventDefault()
 
    // Get data from the form.
    const data = {
      first: event.target.fullName.value,
      last: event.target.mail.value,
    }
    console.log("asf");
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
 
    // API endpoint where we send form data.
    const endpoint = '/FORM'
 
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
 
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)
 
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  const [form,setform] = useState({})
  const onchange = (e)=>{
    setform({
      ...form,
      [e.target.fullName] : e.target.value
    })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title> Email Form </title>
      </Head>

      <main>
      {/* <Layout> */}
        <header>
            <h2 className={styles.h2}>Join now and get AED50</h2>
        </header>
        
      <div >
        <form onSubmit={handleSubmit} action="/congratulations" method="post" autocomplete="on">
          <div className={styles.FORM}>
          <Input type="text" id="fullName" value={form.fullName} name="fullName" placeholder='Full Name'required /><br></br>
          </div>
          <div className={styles.FORM}> 
          <Input type="email" id="mail" value={form.fullName} name="mail" placeholder='Email' required /><br></br>
          </div>
          <div className={styles.FORM}>
          <Input type="number" id="number" value={form.fullName} name="number" placeholder='Contact No.' required /><br></br>
          </div>
          <div className={styles.FORM}>
            <textarea rows="4" cols="50" type="text" id="message" name="message" placeholder='Message' required /><br></br>
          </div>
          <div >
          <Button type="submit" class="btn btn-dark"  >Submit</Button>
          </div>
          </form>
        </div>
        {/* </Layout> */}
      </main>
      <style jsx>{`
        // main {
        //   padding: 5rem 0;
        //   flex: 1;
        //   display: flex;
        //   flex-direction: column;
        //   justify-content: center;
        //   align-items: center;
        // }
        // footer {
        //   width: 100%;
        //   height: 100px;
        //   border-top: 1px solid #eaeaea;
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        // }
        // footer img {
        //   margin-left: 0.5rem;
        // }
        // footer a {
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        //   text-decoration: none;
        //   color: inherit;
        // }
      //   code {
      //     background: #fafafa;
      //     border-radius: 5px;
      //     padding: 0.75rem;
      //     font-size: 1.1rem;
      //     font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      //       DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      //   }
      // `}</style>

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
  )
}

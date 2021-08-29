import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import Head from 'next/head'
const Contact = () => {
    return (
            <>
            <Head > 
                <title>Contact Haroon</title>
                <meta name="description"  content="Contact Haroon" />
            </Head>
            <ContactForm/>
        </>
    )
}


export default Contact

import React, { useEffect } from "react";
import PageHeaderContact from "../Component/ContactComponent/PageHeaderContact";
import ContactUsPage from "../Component/ContactComponent/ContactPage";

function ContactPage() {
  
  return <div className='overflow-hidden'>
    <PageHeaderContact />
    <ContactUsPage />
  </div>;
}

export default ContactPage;

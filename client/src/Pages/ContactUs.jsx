import React from 'react'
import { NavLink } from 'react-router-dom'

const ContactUs = () => {
  return (
    <>
      <div className='contactus justify-center'>
      <section className="mb-4">
  {/*Section heading*/}
  <h2 className="h1-responsive font-weight-bold text-center mt-12 mb-5 text-orange-700">Contact us</h2>
  {/*Section description*/}
  <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>
  <div className="row justify-center">
    {/*Grid column*/}
    <div className="col-md-9 mb-md-0 mb-5">
      <form id="contact-form" name="contact-form" action="mail.php" method="POST">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-0">
            <label htmlFor="name" className>Your name</label>
              <input type="text" id="name" name="name" className="form-control" />
              
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-0">
            <label htmlFor="email" className>Your email</label>
              <input type="text" id="email" name="email" className="form-control" />
              
            </div>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-0">
            <label htmlFor="subject" className>Subject</label>
              <input type="text" id="subject" name="subject" className="form-control" />
              
            </div>
          </div>
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-12">
            <div className="md-form">
            <label htmlFor="message">Your message</label>
              <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
              
            </div>
          </div>
        </div>
        {/*Grid row*/}
      </form>
      <div className="text-center text-md-left mt-24 mb-9">
        <NavLink className=" font-bold text-white m-b-9 px-9 py-3 transition ease-in-out delay-150 bg-orange-700 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-300 rounded-lg " onclick="document.getElementById('contact-form').submit();">Send</NavLink>
      </div>
      <div className="status" />
    </div>
    {/*Grid column*/}
    
  </div>
</section>

    </div>
    </>
  )
}

export default ContactUs
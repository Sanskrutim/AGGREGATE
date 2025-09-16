import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Aggregate
              </h6>
              <p>
              Welcome to your comprehensive online resource for all things agriculture! Whether you're a seasoned farmer, a curious hobbyist, or just interested in learning more about where your food comes from, this website is your gateway to a wealth of valuable information.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 '>Products</h6>
              <p>
                <NavLink to="/tools" className='text-reset'>
                  Tools
                </NavLink>
              </p>
              <p>
                <NavLink to="/fertilizers" className='text-reset'>
                  Fertilizers
                </NavLink>
              </p>
              <p>
                <NavLink to="./crops" className='text-reset'>
                  Crops
                </NavLink>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>links</h6>
              <p>
                <NavLink to='/privacy-policy' className='text-reset'>
                  Privacy Policy
                </NavLink>
              </p>
              <p>
                <NavLink to='/about-us' className='text-reset'>
                  AboutUs
                </NavLink>
              </p>
              <p>
                <NavLink to='contact-us' className='text-reset'>
                  ContactUs
                </NavLink>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Betul,Madhya Pradesh
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                sanskrutimansoriya4094@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 958 995 1665
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 700 775 1852
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Aggregate
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer

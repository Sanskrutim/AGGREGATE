import React from 'react'

const AboutUs = () => {
  return (
    <>
        <div className='heading text-orange-700 text-center mt-4'><h2>About Us</h2></div>
        <div className=' ml-2'>
        <br></br><p>
        Welcome to Aggregate, where our roots run deep and our commitment to sustainable agriculture blossoms. Founded in [Year], we are a passionate team of farmers, agronomists, and agricultural enthusiasts dedicated to cultivating a healthier, greener future.</p>
        </div>
        <div className='ml-2'>
        <div className='sub_heading'><h3>Our Mission</h3></div>
        <div className='about_content'><p>At Aggregate, our mission is simple yet profound: to nourish the world by harnessing the power of sustainable agriculture. We believe in responsible farming practices that not only yield high-quality produce but also respect and preserve the land for generations to come.</p>
        </div>

        <div className='sub_heading'><h3>Our Team</h3>
          <ul className='team_members text-left'>
            <li>Aman Verma</li>
            <li>Sanskruti Mansoriya</li>
            <li>Anubhav Verma</li>
            <li>Ronit Bhavsar</li>
            <li>Shreyash Swami</li>
            <li>Krishn Loniya</li>
            <li>Sudhanshu Kumar</li>
            <li>Abhinav Govind Raj</li>
            <li>Ankit Maurya</li>
            <li>Akhil Ayaluri</li>
          </ul>
        </div>

        <div className='sub_heading'><h3>Sustainability Initiatives</h3></div>
        <div className='about_content'><p>Aggregate is proud to spearhead various sustainability initiatives. From water conservation projects to renewable energy adoption, we are committed to making a positive impact on the planet while ensuring a thriving future for agriculture.</p></div>
        <br></br>
        </div>
    </> 
  )
}

export default AboutUs
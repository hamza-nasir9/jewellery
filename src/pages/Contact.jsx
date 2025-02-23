import React from 'react'
import Banner from '../component/Banner'
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

function Contact() {
  return (
    <div>
      <Banner subheading={"get in touch"} mainhead={"Contact Us"} btn={"shop now"} firstline={"We would love to hear from you! Whether you have questions about our products, need assistance, or just want to share your feedback, don’t hesitate to reach out. Our team is ready to assist you in any way we can."} />

      <div className="contact h-96 mt-20">
        <div className="text-query ml-52 w-96">
          <h1 className='text-6xl mb-5'>Message Us</h1>
          <p className='text-lg'>We're always happy to help. Drop us a message and we'll get back to you shortly!</p>
         <div className="loction flex my-4">
         <MdLocationPin className='text-2xl mx-2 hover:text-[#A86E3B]'/> <a href="" className='capitalize text-lg'>123 fifty avenue,newyork ny 0932000</a>
         </div>
         <div className="loction flex mb-4">
         <MdEmail className='text-2xl mx-2 hover:text-[#A86E3B]'/> <a href="" className='text-lg'>info@gmail.com</a>
         </div>
         <div className="loction flex">
         <MdCall className='text-2xl mx-2 hover:text-[#A86E3B]'/> <a href="" className='text-lg'>9-316-201-9877</a>
         </div>
        </div>
        <div className="register-form absolute top-[105%] end-32 p-10 bg-pink-100">
          <form action="">
         <div className='mb-3'>
         <input className='p-2' type="text" placeholder='First Name' />
            <input type="text" className='p-2 ml-2'  placeholder='Last Name' />
         </div>
          <div className='mb-3'>
          <input type="text" className='p-2 w-full' placeholder='Email' />
          </div>
            <textarea name="" id="" cols="30" className='w-full mb-4 p-2' rows="10"placeholder='Message' ></textarea>
            <button className='border border-1 border-black px-5 p-1'> Send</button>
          </form>
        </div>
      </div>

      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.2412168467304!2d67.0960106741434!3d24.92385124272043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33900191bd1d1%3A0xfb215820d7493a0!2sFizza%20Jewellers!5e0!3m2!1sen!2s!4v1733520144899!5m2!1sen!2s" className='w-full h-96'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact
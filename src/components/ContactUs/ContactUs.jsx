import React from 'react'
import { Field, Formik } from 'formik'
import { Form } from 'react-router'

const ContactUs = () => {
  return (
    <div className='ContactContainer'>

      <h4 className='flex justify-center items-center text-3xl'>Contact<span className='text-primary'> Us</span></h4><br />

      <div className='pl-5 mx-auto'>
        <Formik 
          initialValues={''}
          validationSchema={}
          >
            <Form className='contactForm'>
              <label htmlFor="name" >Name:</label>
              <Field type="text" name="name" id="name"/><br/>

              <label htmlFor="email">Email:</label>
              <Field type="email" name="name" id="name"/><br/>

              <label htmlFor="phone">Phone:</label>
              <Field type="number" name="phone" id="phone"/> <br/>

              <label htmlFor="address">Address:</label>
              <Field type="text" name="address" id="address"/> <br/>

              <label htmlFor="message">Message:</label>
              <Field type="text-area" name="message" id="message"/> <br/>
              <button 
                type="submit" 
                className="block mx-auto pr-5 pl-5 border-2 mt-4 border-primary rounded-3xl p-2 text-sm hover:bg-primary hover:text-black hover:transition-transform ease-in-out duration-300"
              >
                  SUBMIT
              </button>

              </Form>
        </Formik>
      </div>

    </div>
  )
}

export default ContactUs

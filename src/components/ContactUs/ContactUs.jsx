import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormSubmitSchema } from "../../schema/ContactUsSchema";
import emailjs from '@emailjs/browser';

const ContactUs = () => {

  const [loading, setLoading] = useState(true);
  const [submitStatus, setSubmitStatus] = useState(null);

  async function onSubmit(values, actions) {
    try {
      await emailjs.send(
        "service_ca8deig",
        "template_gcsczkj",
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          address: values.address,
          message: values.message,
        },
        "C0PbfOTEqsTy0jfs_"
      );

      setSubmitStatus("success");
      actions.resetForm();
    } catch (error) {
      setSubmitStatus(`error ${error}`);
    }
  }

  useEffect(() => {
    emailjs.init("C0PbfOTEqsTy0jfs_");
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <l-metronome size="40" speed="1.6" color="#CCFF00"></l-metronome>
      </div>
    );
  }

  return (
    <div className="ContactContainer">
      <h4 className="flex flex-col text-3xl text-center mb-5">
        Contact<span className="text-primary"> Us</span>
      </h4>

      <div className="pl-5 mx-auto w-full">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            address: "",
            message: "",
          }}
          validationSchema={FormSubmitSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="contactForm" autoComplete="off">
              <div className="flex flex-col items-start w-full">
                <label htmlFor="name">Name:</label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="w-4/5 max-w-xl text-lg px-4 bg-zinc-900 outline-none mb-2 border border-primary rounded-2xl placeholder:text-sm"
                  placeholder="Enter your name, e.g., Jane Doe..."
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                <br />

                <label htmlFor="email">Email:</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-4/5 max-w-xl text-lg px-4 bg-zinc-900 outline-none mb-2 border border-primary rounded-2xl placeholder:text-sm"
                  placeholder="Enter your email, e.g., JaneDoe@example.com..."
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                <br />

                <label htmlFor="phone">Phone:</label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  className="w-4/5 max-w-xl text-lg px-4 bg-zinc-900 outline-none mb-2 border border-primary rounded-2xl placeholder:text-sm"
                  placeholder="Enter your phone, e.g., (1) 071111101..."
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                <br />

                <label htmlFor="address">Address:</label>
                <Field
                  type="text"
                  name="address"
                  id="address"
                  className="w-4/5 max-w-xl text-lg px-4 bg-zinc-900 outline-none mb-2 border border-primary rounded-2xl placeholder:text-sm"
                  placeholder="Enter your address, e.g., Madag, Rulond..."
                />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                <br />

                <label htmlFor="message">Message:</label>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  className="w-4/5 max-w-xl text-lg px-4 bg-zinc-900 outline-none mb-2 border border-primary rounded-2xl h-24 placeholder:text-sm"
                  placeholder="Enter your message"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                <br />

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="items-center self-center block pr-5 pl-5 border-2 mt-4 border-primary rounded-3xl p-2 text-sm hover:bg-primary hover:text-black hover:transition-transform ease-in-out duration-300"
                >
                  {isSubmitting ? (
                    <p>
                      Submitting
                      <l-metronome size="20" speed="1.6" color="white"></l-metronome>
                    </p>
                  ) : (
                    "SUBMIT"
                  )}
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm mt-2">Failed to send message. Please try again.</p>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactUs;

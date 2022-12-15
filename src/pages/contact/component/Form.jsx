import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactModal from './contactModal';
import style from "./contactmodal.module.css";



const Form = () => {
  const [submitBtn, setSubmitBtn] = useState(false);
  const onSubmit = (values, actions) => {
      console.log(values);
      setSubmitBtn(true);
      actions.resetForm();

  };
  const { values, handleBlur, handleChange, touched, errors, handleSubmit } =
        useFormik({
            // form state
            initialValues: {
                full_name: "",
                email: "",
                message: "",
            },

            //   form validation
            validationSchema: Yup.object().shape({
                full_name: Yup.string()
                    .max(20, "Name must be 20 characters or less.")
                    .required("Please enter your first name"),
                email: Yup.string()
                    .email("Invalid email address")
                    .required("Email is required"),
                message: Yup.string().required("please enter your message"),
            }),

            onSubmit
        });

  return (
    <div className={style.formsk}>
      <div>
        <h2>Contact Us</h2>
        <p>(+234)-706-327-4951</p>
        <p>wale@nimbus.com.ng</p>
       
      </div>
      <form 
        onSubmit={handleSubmit}
        className='w-100 d-flex flex-column align-items-center'
      >
         <p>Let’s showcase your brand to the world</p>
        <input 
          type="text" 
          placeholder='Full Name'
          name="full_name" 
          className={
            touched.first_name && errors.first_name
                ? "input-error"
                : ""
        }
        value={values.full_name}
        onChange={handleChange}
        onBlur={handleBlur}
          />
          {touched.full_name && errors.full_name && (
              <small
                  style={{
                      color: "#EB5757",
                      paddingTop: "0.3rem"
                  }}
              >
                  {errors.full_name}
              </small>
          )} 
        
        <input 
          type='email' 
          placeholder='Email Address'
          name="email" 
          className={
            touched.email && errors.email
                ? "input-error"
                : ""
        }
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

        {touched.email && errors.email && (
            <small
                style={{
                    color: "#EB5757",
                    paddingTop: "0.3rem"
                }}
            >
                {errors.email}
            </small>
        )}
        <textarea 
          id="message"
          name="message"
          cols="30"
          rows="5"
          className={
              touched.message && errors.message
                  ? "textarea-error"
                  : ""
          }
          placeholder="Tell us about your Project"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
      ></textarea>
      {touched.message && errors.message && (
          <small
              style={{
                  color: "#EB5757",
                  paddingTop: "0.3rem"
              }}
          >
              {errors.message}
          </small>
      )}
        <button type='submit'>Send Message</button>
      </form>
      {submitBtn && <ContactModal setSubmitBtn={setSubmitBtn} />}
    </div>
  )
}

export default Form
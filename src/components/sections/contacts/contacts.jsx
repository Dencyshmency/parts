import React, {useState, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';  
import * as Yup from 'yup';  

const Contacts = () => {
const validationSchema = Yup.object().shape({  
  name: Yup.string()  
    .min(2, 'Имя должно содержать минимум 2 символа')  
    .max(50, 'Имя не должно превышать 50 символов')  
    .required('Обязательное поле'),  
  email: Yup.string()  
    .email('Неверный формат email')  
    .required('Обязательное поле'),  
  website: Yup.string()  
    .required('Обязательное поле'),  
  subjects: Yup.string()  
    .required('Обязательное поле'),  
  message: Yup.string()  
    .required('Обязательное поле'),  
});  

const [isSend, setSend] = useState('submit-wrapper');

const closeModal = () => {
  setSend('submit-wrapper')
}



const sendTelegramm = (item) => {
    const TOKEN = "7729549293:AAGi8xvie0dEr-JRKOLT33ZeI1Kss1aqB4M";  
    const CHAT_ID = "-4695249177";  
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;  


    let data = `<b>Name: </b>${item.name}\n`;
    data += `<b>Email: </b>${item.email}\n`;
    data += `<b>Website: </b>${item.website}\n`;
    data += `<b>Subjects: </b>${item.subjects}\n`;
    data += `<b>Message: </b>${item.message}\n`;


  fetch(URI_API, {  
    method: 'POST',  
    headers: {  
      'Content-Type': 'application/json'  
    },  
    body: JSON.stringify({  
      chat_id: CHAT_ID,  
      parse_mode: "html",  
      text: data,  
    })  
  })  
  .then(response => {  
    if (!response.ok) {  
      throw new Error(`HTTP error! status: ${response.status}`);  
    }  
    return response.json();  
  })  
  .then(data => {  
    console.log('Success:', data);  

    // Дополнительная обработка успешной отправки  
  })  
  .catch(error => {  
    console.error('Error:', error);  
    // Обработка ошибок  
  });  
}






    return (
        <>
        <section id="form-section">
            <div className="container">
                <div className="contacts-wrapper">
                    <h3 className="section-title">Contacts</h3>
                    <div className="contacts-content">
                        <div className="contacts-content-nav">
                            <p>Join us right now!</p>
                            <ul>
                                <li>Quick registration </li>
                                <li>+50% to income for 2 months (Only for new users. )</li>
                                <li>Lorem ipsum</li>
                            </ul>
                            <div className="contacts-content-nav-links">
                                <a href="" target="_blank" className="contact-login-btn">Log in</a>
                                <a href="" target="_blank" className="contact-registration-btn">Registration</a>
                            </div>
                        </div>
                        <div className="contacts-content-form">
                            <p>Fill out the application</p>
                            <Formik  
                                initialValues={{ name: '', email: '', website: '', subjects: '', message: '' }}  
                                validationSchema={validationSchema}  
                                onSubmit={(values, { setSubmitting, resetForm  }) => {  
                                    sendTelegramm(values);
                                    resetForm();
                                    setSubmitting(false)
                                    setSend('submit-wrapper open-wrapper')
                                }}  
                            >  
                            {({ isSubmitting, errors, touched, isValid, dirty }) => (  
                                <Form> 
                                    <div className='form-section'>
                                        <div>  
                                            <Field 
                                            type="text" 
                                            name="name" 
                                            placeholder="Name"
                                            className={touched.name && errors.name ? 'error-input' : ''}  
                                            />  
                                        </div>
                                        <div>  
                                            <Field 
                                            type="email" 
                                            name="email" 
                                            placeholder="E-mail"
                                            className={touched.email && errors.email ? 'error-input' : ''}
                                            />  
                                        </div>  
                                        <div>  
                                            <Field 
                                            type="text" 
                                            name="website" 
                                            placeholder="Website"
                                            className={touched.website && errors.website ? 'error-input' : ''}
                                            />  
                                        </div>  
                                        <div>  
                                            <Field 
                                            type="text" 
                                            name="subjects" 
                                            placeholder="Subjects"
                                            className={touched.subjects && errors.subjects ? 'error-input' : ''}
                                            />  
                                        </div>  
                                    </div> 
                                    <div>  
                                        <Field 
                                        component="textarea" 
                                        name="message" 
                                        placeholder="Message content"
                                        className={touched.message && errors.message ? 'error-input' : ''}
                                        />  
                                    </div>  
                                    <button type="submit" className={`${isValid && dirty ? 'active' : ''}`}  disabled={isSubmitting}>  
                                    Send  
                                    </button>  
                                </Form>  
                            )}  
                            </Formik>  
                        </div>
                    </div>
                </div>
            </div>
            <div className={isSend}>
              <div className="submit-content">
                <button className="close-submit-btn" onClick={closeModal}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.6665 13.3333L13.3332 2.66666" stroke="#898989" stroke-width="1.33333" stroke-linecap="round" />
                    <path d="M13.3335 13.3333L2.66683 2.66666" stroke="#898989" stroke-width="1.33333" stroke-linecap="round" />
                  </svg>
                </button>
                <p>Your application has been submitted!</p>
                <span>We will contact you within 10 minutes</span>
                <button className="ok-btn" onClick={closeModal}>Okay</button>
              </div>
            </div>
        </section>
        </>
    )
}

export default Contacts
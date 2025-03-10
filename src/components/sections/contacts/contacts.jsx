import React from 'react';
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
                                }}  
                            >  
                            {({ isSubmitting, errors, touched }) => (  
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
                                    <button type="submit" disabled={isSubmitting}>  
                                    Send  
                                    </button>  
                                </Form>  
                            )}  
                            </Formik>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contacts
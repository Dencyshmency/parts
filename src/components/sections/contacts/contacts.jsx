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
  text1: Yup.string()  
    .required('Обязательное поле'),  
  text2: Yup.string()  
    .required('Обязательное поле'),  
  text3: Yup.string()  
    .required('Обязательное поле'),  
});  

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
                                <a href="" className="contact-login-btn">Log in</a>
                                <a href="" className="contact-registration-btn">Registration</a>
                            </div>
                        </div>
                        <div className="contacts-content-form">
                            <p>Fill out the application</p>
                            <Formik  
                                initialValues={{ name: '', email: '', text1: '', text2: '', text3: '' }}  
                                validationSchema={validationSchema}  
                                onSubmit={(values, { setSubmitting }) => {  
                                setTimeout(() => {  
                                    alert(JSON.stringify(values, null, 2));  
                                    setSubmitting(false);  
                                }, 400);  
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
                                            name="text1" 
                                            placeholder="Website"
                                            className={touched.text1 && errors.text1 ? 'error-input' : ''}
                                            />  
                                        </div>  
                                        <div>  
                                            <Field 
                                            type="text" 
                                            name="text2" 
                                            placeholder="Subjects"
                                            className={touched.text2 && errors.text2 ? 'error-input' : ''}
                                            />  
                                        </div>  
                                    </div> 
                                    <div>  
                                        <Field 
                                        component="textarea" 
                                        name="text3" 
                                        placeholder="Message content"
                                        className={touched.text3 && errors.text3 ? 'error-input' : ''}
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
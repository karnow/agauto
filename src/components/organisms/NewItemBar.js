import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import * as Yup from 'yup';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 9;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.5s ease-in-out;
`;
const StyledTextArea = styled(Input)`
  margin: 30px 0 2px 0px;
  border-radius: 20px;
  height: 30vh;
`;
const StyledInput = styled(Input)`
  margin-top: 10px;
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;
const NewItemBar = ({ pageType, isVisible, handleNewItemBarToggle }) => {
  const sendDataToEmailApi = (values) => {
    const { navn, emailtelefon, message } = values;
    // console.log(navn, emailtelefon, message);

    emailjs
      .send(
        'gmail',
        'template_901n5jt',
        { navn: `${navn}`, emailtelefon: `${emailtelefon}`, message: `${message}` },
        'user_3hqjH4SM9prI82AjbjUwe'
      )
      .then(
        (result) => {
          console.log(result.text);
          NotificationManager.success('Message was sent');
        },
        (error) => {
          console.log(error.text);
          NotificationManager.error('Message was not sent');
          return false;
        }
      );

    return true;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const emailWasSent = sendDataToEmailApi(values);
    if (emailWasSent) {
      resetForm();
      handleNewItemBarToggle();
      setSubmitting(false);
    }

    // alert(JSON.stringify(values, null, 2));
    // console.log(values);
  };
  const validationSchema = Yup.object({
    navn: Yup.string().required('Required'),
    emailtelefon: Yup.string().email('Invalid Email Address').required('Required'),
    message: Yup.string().required('Required'),
  });

  return (
    <StyledWrapper isVisible={isVisible} activeColor={pageType}>
      <Heading>Kontaktinformation</Heading>
      <Formik
        initialValues={{ navn: '', emailtelefon: '', message: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, values, handleChange, handleBlur, isSubmitting }) => (
          <StyledForm>
            <StyledInput
              type='text'
              name='navn'
              placeholder='navn'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.navn}
            />
            {errors.navn ? (
              <p style={{ color: 'red', margin: '0', fontSize: '12px' }}>{errors.navn}</p>
            ) : null}
            <StyledInput
              type='text'
              name='emailtelefon'
              placeholder='email/telefon'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.emailtelefon}
            />
            {errors.emailtelefon ? (
              <p style={{ color: 'red', margin: '0', fontSize: '12px' }}>{errors.emailtelefon}</p>
            ) : null}
            <StyledTextArea
              name='message'
              as='textarea'
              placeholder='message'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message ? (
              <p style={{ color: 'red', margin: '0', fontSize: '12px' }}>{errors.message}</p>
            ) : null}
            <Button style={{ marginTop: '10px' }} disabled={isSubmitting} type='submit'>
              Send ind
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default NewItemBar;

{
}

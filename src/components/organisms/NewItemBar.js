import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 8;
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
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;
const StyledInput = styled(Input)`
  margin-top: 30px;
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;
const NewItemBar = ({ pageType, isVisible, handleNewItemBarToggle }) => {
  return (
    <StyledWrapper isVisible={isVisible} activeColor={pageType}>
      <Heading>Kontaktinformation</Heading>
      <Formik
        initialValues={{ title: '', content: '', articleUrl: '', twitterName: '', created: '' }}
        onSubmit={(values, { setSubmitting }) => {
          const type = `${pageType}s`;
          const data = {
            ...values,
            type,
          };
          console.log(data);
          handleNewItemBarToggle();
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <StyledForm>
            <StyledInput
              type='text'
              name='title'
              placeholder='title'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {pageType === 'twitter' && (
              <StyledInput
                type='text'
                name='twitterName'
                placeholder='twitter name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitterName}
              />
            )}
            {pageType === 'article' && (
              <StyledInput
                placeholder='link'
                type='text'
                name='articleUrl'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.articleUrl}
              />
            )}

            <StyledTextArea
              name='content'
              as='textarea'
              placeholder='description'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            <Button activeColor={pageType} type='submit'>
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

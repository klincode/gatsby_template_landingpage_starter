import React from "react";
import styled from "styled-components";
import { Button } from "../global";
const Form = () => {
  return (
    <FormWrapper>
      <FormLabel htmlFor='name'>
        Imię i Nazwisko:
        <FormInput type='text' id='name'></FormInput>
      </FormLabel>
      <label>
        Imię i Nazwisko:
        <input type='text' id='name' />
      </label>
      <label htmlFor='email'>
        E-mail:
        <input type='text' id='email' />
      </label>
      <label htmlFor='message'>
        Wiadomość:
        <textarea name='message' id='message' cols='30' rows='10'></textarea>
      </label>
      <Button primary>Wyślij</Button>
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLabel = styled.label``;

const FormInput = styled.input`
  border: 1px solid red;
`;

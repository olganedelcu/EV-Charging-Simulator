import styled from 'styled-components';

export const Form = styled.form`
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 600px;
`;

export const InputContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem;
  font-size: 1.25rem;
  color: #fff;
  background-color: #2980b9;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1f65a6;
  }
`;

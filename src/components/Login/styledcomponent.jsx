import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginBox = styled.form`
  background-color: #ffffff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
`

export const Logo = styled.img`
  width: 120px;
  align-self: center;
  margin-bottom: 24px;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #475569;
  margin-bottom: 6px;
`

export const Input = styled.input`
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  margin-bottom: 16px;
  outline: none;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  input {
    margin-right: 8px;
  }

  label {
    font-size: 14px;
    color: #1e293b;
  }
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
`

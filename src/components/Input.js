import styled from 'styled-components'

const Input = styled.input`
  padding: 20px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border: 0;
  border-radius: 15px;
  width: 88%;

  &:focus {
    border: none;
    outline: none;
    border-radius: 40px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default function InputComponent (props) {
  return (
    <Input {...props} />
  )
}
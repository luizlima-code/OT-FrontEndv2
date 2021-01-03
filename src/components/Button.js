import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  padding: 15px 25px;
  font-size: 14px;
  display: block;
  border-radius: 60px;
  margin: 15px 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export default function Button (props) {
  return <StyledButton {...props}/>
} 
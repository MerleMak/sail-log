import styled, { css } from 'styled-components';

export default function Button({ children, onClick, variant }) {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 15px;
  border-radius: 20px;
  border: none;
  font-size: 1.5rem;

  ${props =>
    props.variant === 'save' &&
    css`
      background-color: #f2b705;
      color: #012e40;
      position: fixed;
      bottom: 50px;
      right: 41vw;
    `}

  ${props =>
    props.variant === 'navigate' &&
    css`
      background-color: #f2b705;
      color: #012e40;
      position: fixed;
      bottom: 50px;
      right: 13vw;
    `}
`;

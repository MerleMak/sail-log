import styled, { css } from 'styled-components';

export default function Button({ children, onClick, variant, className }) {
  return (
    <StyledButton variant={variant} onClick={onClick} className={className}>
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
    `}

  ${props =>
    props.variant === 'navigate' &&
    css`
      background-color: #f2b705;
      color: #012e40;
    `}
    ${props =>
    props.variant === 'invisible' &&
    css`
      background-color: inherit;
      border: none;
      position: absolute;
      padding: 5px;
      right: 10px;
      :hover {
        cursor: pointer;
      }
    `}
    ${props =>
    props.variant === 'confirm' &&
    css`
      background-color: seagreen;
      color: #012e40;
    `}
    ${props =>
    props.variant === 'deny' &&
    css`
      background-color: crimson;
      color: #012e40;
    `}
`;

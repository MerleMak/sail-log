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
  box-shadow: 1px 2px 2px black;

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
      box-shadow: none;
      :hover {
        cursor: pointer;
      }
    `}
    ${props =>
    props.variant === 'confirm' &&
    css`
      background-color: #bf0603;
      color: white;
    `}
    ${props =>
    props.variant === 'deny' &&
    css`
      background-color: #f2b705;
      color: #012e40;
    `}
`;

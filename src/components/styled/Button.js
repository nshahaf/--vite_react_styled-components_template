import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: white;
  padding: ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.fontSizes.medium};
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

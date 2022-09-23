import styled from 'styled-components';

const ButtonSubmit = styled.button`
  background: #f39c12;
  border: none;
  border-radius: 8px;
  width: ${props => props.width || '30px'};
  height: ${props => props.height || '30px'};
  margin-right: ${props => props.margin || '0px'};
`;

const Button = props => {
  return (
    <ButtonSubmit {...props} onClick={props.onClick}>
      {props.children}
    </ButtonSubmit>
  );
};
export default Button;

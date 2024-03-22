import styled from 'styled-components';

const ButtonS = styled.button`
  color: ${({ esra }) => esra ? "green" : "yellow"};

  background-color: ${({ elif, esra }) => esra ? "red" : elif ? "darkred" : "aqua"};

  padding: 1rem 1.5rem;
  border-radius: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  &:hover{
   cursor: pointer; 
   transform: scale(0.8);
  }
`;

export const TomatoButtonS = styled(ButtonS)`
color:${({ yeter }) => yeter ? "tomato" : "green"};
width: 300px;
background-color: blueviolet;
&:hover{
    transform:scale(1.2);

}

`

export default ButtonS;

import styled from 'styled-components';

const ButtonSSS = styled.button`
 background-color:${({ omer }) => omer ? "#FB6D48" : "#FDAF7B"} ;
 color:${({ kadir }) => kadir ? "#D37676" : "#FFAF45"}       ;
 border: 1px solid #891652 ;
 border-radius: 5px;
 padding: 1rem 1.2rem;
 font-size: 1.1rem;
 margin: 2rem 0.5rem;
 cursor: pointer;
 &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
export const DetayButon = styled(ButtonSSS)`
border-left: 3px solid #240A34;
border-radius: 20px 0;
color:#401F71 ;
background-color:#EABE6C ;




`

export default ButtonSSS;


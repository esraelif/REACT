import styled from 'styled-components';

const DisplaySSS = styled.div`
 background-color: #B0C5A4;
 display: flex;

 justify-content: space-between;
 align-items: center;
 padding: 0 20px;
 border-radius: 5px;
 @media screen and (max-width:${({ theme }) => theme.responsive}) {
     flex-direction: column; 
 }
`;

export default DisplaySSS;


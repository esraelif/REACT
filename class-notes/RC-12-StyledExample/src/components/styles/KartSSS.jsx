import styled from 'styled-components';

const KartSSS = styled.div`
 background-color: #FDAF7B;
 border-radius: 15px;
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 60px;
  display: flex;
  //Card.js de(nida) tanımladık.
  flex-direction: ${({ nida }) => nida};
  //App.js de(responsive and golge) tanımladık
  box-shadow:${({ theme }) => theme.golge};
  @media screen and (max-width:${({ theme }) => theme.responsive}) {
    flex-direction: column;
    background-color:#D2D180 ;
    
  };

`;

export default KartSSS;





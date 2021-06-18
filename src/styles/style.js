import styled from 'styled-components'

export const StyledContainer = styled.div`
   padding: 50px 20px;
   width: 100%;
   min-height: 100vh;
   height: 100%;

   background: #222831;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   header {
      width: 100%;

      text-align: center;
   }

   @media (max-width: 768px) {
      header {
         > svg {
            width: 300px;
         }
      }
   }
`

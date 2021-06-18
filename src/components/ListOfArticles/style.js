import styled from 'styled-components'

export const StyledListOfArticles = styled.section`
   width: 100%;
   max-width: 800px;
   margin-top: 60px;

   display: grid;
   grid-template-columns: 1fr;
   grid-gap: 13px;
   justify-items: center;

   .empty {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 1rem;
      color: #fff;
   }

   .no-linked {
      cursor: no-drop;
   }
`

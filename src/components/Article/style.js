import styled from 'styled-components'

export const StyledArticle = styled.a`
   text-decoration: none;
   width: 100%;
   background: #fff;
   padding: 20px;
   border-radius: 8px;
   cursor: pointer;
   position: relative;
   box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.5);

   display: grid;
   grid-template-columns: auto auto;
   justify-content: space-between;
   grid-gap: 10px;

   transition: all 0.25s;

   .position {
      width: 25px;
      height: 25px;
      border-radius: 50%;

      position: absolute;
      top: -10px;
      left: -10px;
      padding: 10px;
      background: #f05454;
      border: 1px solid #fff;

      display: flex;
      justify-content: center;
      align-items: center;

      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      color: #fff;
   }

   .info {
      display: flex;
      flex-direction: column;

      .title-article {
         font-family: 'Roboto', sans-serif;
         font-weight: 500;
         font-size: 1rem;
         color: #30475e;
      }

      .author-article {
         margin-top: 5px;
         font-family: 'Roboto', sans-serif;
         font-weight: 500;
         font-size: 0.875rem;
         color: #666;
      }
   }

   .btn {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      .date-article {
         margin-right: 20px;
         font-family: 'Roboto', sans-serif;
         font-weight: 500;
         font-size: 0.875rem;
         color: #222;
      }

      button {
         opacity: 0;
         visibility: hidden;
         cursor: pointer;
         border: none;
         outline: none;
         appearance: none;
         font: none;
         background: transparent;

         width: 35px;
         height: 35px;
         border-radius: 50%;

         display: flex;
         justify-content: center;
         align-items: center;

         transition: all 0.25s;

         > svg {
            color: #888;
            transition: all 0.25s;
         }

         &:hover {
            > svg {
               color: #f05454;
            }
         }
      }
   }

   &:visited {
      .info {
         .title-article {
            color: #7f8c8d;
         }
         .author-article {
            color: #95a5a6;
         }
      }
   }

   &:hover {
      background: #f05454;

      .info {
         .title-article {
            color: #fff;
         }
         .author-article {
            color: #222831;
         }
      }

      .btn {
         button {
            opacity: 1;
            visibility: visible;
            background: #fff;
         }
      }
   }

   @media (max-width: 768px) {
      .info {
         grid-column: span 2;
         align-items: center;

         .title-article,
         .author-article {
            text-align: center;
         }
      }

      .btn {
         grid-column: span 2;
         justify-content: space-between;

         .date-article {
            margin-right: 0;
         }
      }
   }
`

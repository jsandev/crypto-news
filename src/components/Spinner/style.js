import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
`

export const StyledBasicSpipnner = styled.div`
   width: 22px;
   height: 22px;
   border: 3px solid rgba(255, 255, 255, 0.35);
   border-radius: 50%;
   border-left-color: #f05454;

   animation: ${spinner} 1s ease infinite;
`

import React from 'react'

import { ListOfArticles } from './components/ListOfArticles'

import { LogoWhite } from './icons'
import { StyledContainer } from './styles/style'

function App() {
   return (
      <StyledContainer>
         <header>
            <LogoWhite width={500} />
         </header>
         <ListOfArticles />
      </StyledContainer>
   )
}

export default App

import React from 'react'

import { StyledArticle } from './style'
import { Trash } from '../../icons'

export const Article = ({ position, link, title, author, createdAt, onDelete }) => {
   const handleDelete = e => {
      e.preventDefault()
      onDelete(position)
   }

   return (
      <StyledArticle href={link} target='_blanck' className={link === null && 'no-linked'}>
         <span className='position'>{position + 1}</span>
         <div className='info'>
            <h1 className='title-article'>{title}</h1>
            <h4 className='author-article'>Author: {author}</h4>
         </div>
         <div className='btn'>
            <small className='date-article'>
               {new Date(createdAt).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit'
               })}
            </small>
            <button onClick={handleDelete}>
               <Trash width={14} />
            </button>
         </div>
      </StyledArticle>
   )
}

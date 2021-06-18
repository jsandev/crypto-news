import { useEffect, useState, useCallback } from 'react'
import { Article } from '../Article'
import { Spinner } from '../Spinner'
import axios from 'axios'

import { StyledListOfArticles } from './style'

export const ListOfArticles = () => {
   const [data, setData] = useState(null)
   const [positionArticle, setPositionArticle] = useState(null)

   const drawData = useCallback(async () => {
      const url = 'https://hn.algolia.com/api/v1/search_by_date?query=cryptocurrency'
      const { data } = await axios.get(url)

      setData(
         data.hits
            .filter(hit => hit.title !== null || hit.story_title !== null)
            .filter((_, i) => i < 10)
      )
   }, [])

   useEffect(() => {
      drawData()
   }, [])

   useEffect(() => {
      if (positionArticle !== null) {
         const newList = data.slice()
         newList.splice(positionArticle, 1)

         setData(newList)
         setPositionArticle(null)
      }
   }, [positionArticle])

   return (
      <StyledListOfArticles>
         {data === null ? (
            <Spinner />
         ) : data.length === 0 ? (
            <h3 className='empty'>Empty!!</h3>
         ) : (
            data.map((hit, index) => {
               return (
                  <Article
                     key={hit.created_at_i}
                     link={hit.url || hit.story_url}
                     title={hit.title || hit.story_title}
                     author={hit.author}
                     createdAt={hit.created_at}
                     position={index}
                     onDelete={setPositionArticle}
                  />
               )
            })
         )}
      </StyledListOfArticles>
   )
}

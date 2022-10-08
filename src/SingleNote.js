import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from './Context'
const SingleNote = () => {
  const { item } = useGlobalContext();
  const { id } = useParams();
  const updateItem = item.filter((elem) => {
    return elem.id === id;
  })
  useEffect(()=>{
    document.title=`Notes/${id}`
  },updateItem)
  
  return (
    <>
      {
        updateItem.map((elem) => {
          return (
            <>
              <div className='container p-4 m-4  text-center align-item-center singleNOte' key={elem.id}>
                <h2><span>Title: </span>{elem.title}</h2>
                <h4><span>Detail: </span>{elem.detail}</h4>
              </div>
              <Link to={"/"}>
                <button className='btn btn-outline-success  text-center'>Notes</button>
              </Link>
            </>
          )
        })
      }
    </>
  )
}

export default SingleNote
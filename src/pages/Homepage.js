import React from 'react';
import useFatch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const{ loading, error, data } = useFatch('http://http://localhost:1337/reviews')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  return (
  <div>
    {data.data.map((review) => (
      <div key={review.attributes.id} className="review-card" >
      <div className="rating">{review.rating}</div>
      <h2>{review.title}</h2>

      <small>Console list</small>

      <p>{review.body}</p>
      <Link to={`/details/${review.id}`}>Read more...</Link>
      </div>
    ))}
  </div>
  )
}
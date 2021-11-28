import React from 'react'
import { useSearchParams} from 'react-router-dom'
export default () => {
  console.log(useSearchParams()[0].get('id'));
  return (
    <div className="work">
      <h1>work</h1>
    </div>
  )
}
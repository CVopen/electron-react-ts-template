import React from 'react'
import {useParams } from 'react-router-dom'

export default (props: any) => {
  console.log(useParams());
  return (
    <h1>found</h1>
  )
}
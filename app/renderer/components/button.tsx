import React from 'react'
import Container from './styles'

export default () => {
  const click = () => {
    console.log('tset');
  }
  return <Container><button onClick={click}>点我</button></Container>
}
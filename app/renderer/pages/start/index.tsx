import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {RootStore} from '../../store/const'
import {Button} from 'antd'

export default () => {
  const navigate = useNavigate()

  const count = useSelector((state: RootStore) => {
    return state.app.count
  })
  const dispath = useDispatch()
  console.log(count, dispath);
  const toWork = () => {
    console.log(123);
    navigate('/work')
  }

  const add = () => {
    dispath({type: 'SET_COUNT', value: 1 })
  }
  return (
    <div className="start">
      <Link to="work">to work</Link>
      xxxxxx
      <Link to="/">to /</Link>
      <h1 onClick={toWork}>start</h1>
      <h1>{count}</h1>
      <Button onClick={add}>add</Button>
      {/* <Outlet /> */}
    </div>
  )
}
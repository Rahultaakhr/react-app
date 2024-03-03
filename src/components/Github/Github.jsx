import React, { useEffect, useState } from 'react'

function Github() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://api.github.com/users/rahultaakhr")
    .then(response=>response.json())
    .then(data=>{
     setData(data)
    })
  },[])
  return (
  <div className=' grid items-center'>
      <div className=' pb-2 text-center  bg-gray-300'>Github followers: {data.followers}</div>
      <div className=' pb-2 text-center  bg-gray-300'>Github following: {data.following}</div>
      <div className=' pb-2 text-center  bg-gray-300'>Github public reposetries: {data.public_repos}</div>
      <div className=' pb-2 text-center  bg-gray-300'>X username: {data.twitter_username}</div>
  </div>
  )
}

export default Github
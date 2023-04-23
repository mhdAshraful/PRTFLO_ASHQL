import React from 'react'
// import NavBar from './NavBar'
import NavigationBar from './NavigationBar'



export const Header = ({ width }) => {
  return (
    <header id='header'>
      <NavigationBar width={width} />
    </header>
  )
}

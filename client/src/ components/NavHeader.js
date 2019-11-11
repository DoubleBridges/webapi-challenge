import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavHeader = () => {

  const [activeItem, setactiveItem] = useState('home');

  const handleMenuClick = e => setactiveItem(e.target.name)

  return (
    <Menu fixed='top' inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleMenuClick}
        as={Link}
        to='/'
      />
      <Menu.Item
        name='projects'
        active={activeItem === 'projects'}
        onClick={handleMenuClick}
        as={Link}
        to='/projects'
      />
    </Menu>
  )
}

export default NavHeader
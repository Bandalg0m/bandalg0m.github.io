import React from 'react'

import header from './Header.module.scss'

import Itphylosophy from '../../assets/img/it-philosfy.svg'
import liga from '../../assets/img/liga-logo.svg'
import user_icon from '../../assets/img/user-icon.svg'

const Header = () => {
  return (
    <>
      <nav className={header.header}>
        <div className={header.logo}>
          <div className={header.logo__text}>MeetUps</div>
          <div className={header.logo__block}>
            <img className={header['logo__img--phylosophy']} src={Itphylosophy} alt="It-phylosophy" />
            <img className={header['logo__img--liga']} src={liga} alt="Liga" />
          </div>
        </div>
        <div className={header['header-controls']}>
          <img className={header['header-controls__item']} src={user_icon} alt="user icon" />
        </div>
      </nav>
    </>
  )
}

export default Header;
import React from 'react';
import { ReactComponent as HUDIcon} from '../../assets/images/HUDicon.svg'
import '../../assets/styles/main.scss';

const NavIcon = () => {
  return (
    <div className='NavIcon'>
      <HUDIcon className='HUDIcon' />
    </div>
  );
};

export default NavIcon;

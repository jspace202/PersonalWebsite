import React from 'react';
import '../../assets/styles/main.scss'
import { useNavigate } from 'react-router-dom';


function Item ({route, image, title, text}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  }

  return (
    <div className='Item' onClick={handleClick}>
      <div className='ItemPic'>
        <img src={`${process.env.PUBLIC_URL}/${image}`} alt="Project Image"/>
      </div>
      <div className='description'>
        <text>{title}</text>
        <text>{text}</text>
      </div>
    </div>
  );
};

export default Item;
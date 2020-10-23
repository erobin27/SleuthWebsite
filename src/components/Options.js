import React from 'react';
import { Button } from './Button';
import './Options.css';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineBarChart } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Options() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='options__section'>
        <div className='options__wrapper'>
          <div className='options__container'>
            <Link to='/Map' className='options__container-card'>
              <div className='options__container-cardInfo'>
                <div className='icon'>
                  <FaMapMarkedAlt />
                </div>
                <h3>Map</h3>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  View Map
                </Button>
              </div>
            </Link>
            <Link to='/Chart' className='options__container-card'>
              <div className='options__container-cardInfo'>
                <div className='icon'>
                  <AiOutlineBarChart />
                </div>
                <h3>Chart</h3>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  View Charts
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Options;

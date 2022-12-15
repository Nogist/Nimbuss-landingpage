import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../../assets/2m.webp'

const InnProject = () => {
  return (
    <div className='innproject w-100 d-flex flex-column align-items-center justify-content-center py-10'>
      <h2>Nimbus Aid project</h2>
      <h6></h6>
      <div className='innproject-domain w-100 d-flex flex-wrap py-10'>
        <div className='innproject-img'>
          <img src={picture} alt="/" />

        </div>
          <div className='innproject-writing'>
            <p>
            Since its launch in 2016, the Nimbus Aid Project has supported businesses and non-profit organisations committed in educating, enabling, and empowering their communities.
            </p>
            <p>
              The Nimbus Aid Project, formerly known as "Nominate A Charity," is part of Nimbus Media Ltd's commitment to giving back to the community and society.
            </p>
            <p>
              Every year, Nigerians are invited to nominate an organisation that has demonstrated a dedication to educating, enabling, and empowering their communities. A winner is selected via public voting and rewarded with marketing and awareness support on Nimbus digital screens across Nigeria...<Link to='/project'>read more</Link>
            </p>
          </div>
      </div>

    </div>
  )
}

export default InnProject
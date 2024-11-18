import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function FooterC() {
  return (
    <MDBFooter style={{height: '72px', marginTop: '101px'}} bgColor='black' className='text-center text-lg-left'>
      <div className='text-center p-3'>
        <p className='text-light'>
        VoiceIt
        </p>
        {/* <p className='text-light'>&copy; {new Date().getFullYear()}</p> */}
      </div>
    </MDBFooter>
  );
}

import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <div className='b--dark-green courier tc'>
        <p>1.Paste the url of the photo</p>
        <p>2.Click the Detect button   </p>
      </div>
      <div className='center'>
        <div className='center pa4 br3 shadow-5 form'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-gold' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
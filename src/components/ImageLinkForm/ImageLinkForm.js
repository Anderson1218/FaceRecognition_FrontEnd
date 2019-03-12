import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className='tc f3'>
        {'1.Paste the url of the photo'}
        <br/>
        {'2.Click the Detect button'}
      </p>
      <div className='center'>
        <div className='center pa4 br3 shadow-5 form'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
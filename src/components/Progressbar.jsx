import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';
import './Progressbar.css'

function Progressbar() {
  const first = 34;
  const second = 17;
  const third = 7;
  const fourth = 47;
  
//   return <ProgressBar now={now} label={`${now}%`} visuallyHidden />;
return(
    <div className='progressbar'>
        <h1 className='title-text'>progress in projects</h1>
        
        <div className='first-box'>
            <samp className='title'>pro1</samp>
            <div className='first-bar'>
                <samp className='first-per pro1'>
                {/* <span className='persent'>90%</span> */}
                <ProgressBar variant='info' now={first} label={`${first}%`}/>
                </samp>
            </div>
        </div>
        <div className='first-box'>
            <samp className='title'>pro2</samp>
            <div className='first-bar'>
                <samp className='first-per pro2'>
                {/* <span className='persent'>60%</span> */}
                <ProgressBar variant='info' now={second} label={`${second}%`}/>
                </samp>
            </div>
        </div>
        <div className='first-box'>
            <samp className='title'>pro3</samp>
            <div className='first-bar'>
                <samp className='first-per pro3'>
                {/* <span className='persent'>40%</span> */}
                <ProgressBar variant='info' now={third} label={`${third}%`}/>
                </samp>
            </div>
        </div>
        <div className='first-box'>
            <samp className='title'>pro4</samp>
            <div className='first-bar'>
                <samp className='first-per pro4'>
                {/* <span className='persent'>70%</span> */}
                <ProgressBar variant='info' now={fourth} label={`${fourth}%`}/>
                </samp>
            </div>
        </div>
    </div>
)
}

export default Progressbar;
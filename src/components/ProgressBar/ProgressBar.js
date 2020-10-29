import React from 'react';
import PropTypes from 'prop-types';
import './progressbar.scss';

const ProgressBar = (props) => {
  const { percentComplete, submitIsEnabled } = props;
  return (
    <div className='pb'>
      <div className='pb__percent' style={{ width: `${percentComplete}%` }} />
      <div className='pb__label'>{`${Math.round(percentComplete)}% complete`}</div>
      <button disabled={submitIsEnabled}>
        <div className='btn'>
          <div className='btn__hover' />
          <span>Submit</span>
        </div>
      </button>
    </div>
  );
};

ProgressBar.propTypes = {
  percentComplete: PropTypes.number,
  submitIsEnabled: PropTypes.bool,
};

export default ProgressBar;

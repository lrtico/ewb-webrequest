import React from 'react';
import PropTypes from 'prop-types';
import './buttons.scss';

export const PillButton = (props) => {
  const { buttonLabel, handleNextQuestion } = props;

  return (
    <div className='btn' onClick={handleNextQuestion}>
      <div className='btn__hover' />
      <span>{buttonLabel}</span>
    </div>
  );
};

PillButton.propTypes = {
  buttonLabel: PropTypes.string,
};

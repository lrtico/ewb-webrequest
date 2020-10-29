import React from 'react';
import PropTypes from 'prop-types';
import './wizard.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import getCurrentDate from '../../utils/getCurrentDate';

const setRequirementsComplete = (...args) => {
  console.log('setRequirementsComplete argument = ', args);
  let complete = 0;
  args.map((arg) => (arg !== '' ? complete++ : null));
  return `${complete} out of ${args.length} requirements complete`;
};

const Wizard = (props) => {
  // console.log('Wizard props = ', props);
  const { requestType, existingUrl, updateExistingUrlIsActive } = props;
  return (
    <div className='wizard'>
      <div className={props.requestorIsActive ? 'accordion accordion--isExpanded' : 'accordion'}>
        <div className='accordion__title--wrapper' onClick={() => props.handleAccordion('requestor')}>
          <div className={props.requestorIsActive ? 'accordion__title accordion__title--active' : 'accordion__title'}>
            {props.requestorIsActive ? <div className='wizard__icon wizard__icon--active wizard__icon--step' /> : <ArrowForwardIcon className='wizard__icon wizard__icon--step' />}
            <h2>Requestor</h2>
            <span>{setRequirementsComplete(props.requestedFor)}</span>
            <ExpandMoreIcon className='wizard__icon wizard__icon--expand' />
          </div>
        </div>
        <div className='accordion__items'>
          <div className='accordion__item'>
            <span>Created by: </span>
            <span className='accordion__item__value accordion__item__value--autofill'>{props.requestCreatedBy}</span>
          </div>
          <div className={props.requestedForIsActive ? 'accordion__item accordion__item--active' : 'accordion__item'}>
            <label htmlFor='requested-for-summary'>
              <span className='required'>*</span>Requested for:
            </label>
            <input type='text' id='requested-for-summary' className='accordion__item__value' value={props.requestedFor} disabled={true} />
          </div>
          <div className='accordion__item'>
            <span>Date created: </span>
            <span className='accordion__item__value accordion__item__value--autofill'>{getCurrentDate()}</span>
          </div>
          <div className='accordion__item'>
            <span>Department: </span>
            <span className='accordion__item__value accordion__item__value--autofill'>{props.requestedDepartment}</span>
          </div>
          <div className={props.requestorPhoneIsActive ? 'accordion__item accordion__item--active' : 'accordion__item'}>
            <label htmlFor='requestor-phone'>Phone number:</label>
            <input type='text' id='requestor-phone' className='accordion__item__value' value={props.requestorPhone} disabled={true} />
          </div>
        </div>
      </div>
      {/* TODO: make new component for Request block */}
      <div className={props.requestIsActive ? 'accordion accordion--isExpanded' : 'accordion'}>
        <div className='accordion__title--wrapper' onClick={() => props.handleAccordion('request')}>
          <div className={props.requestIsActive ? 'accordion__title accordion__title--active' : 'accordion__title'}>
            {props.requestIsActive ? <div className='wizard__icon wizard__icon--active wizard__icon--step' /> : <ArrowForwardIcon className='wizard__icon wizard__icon--step' />}
            <h2>Request</h2>
            <span>{setRequirementsComplete(props.requestedCompletionDate, props.requestTitle, props.requestWebsite, props.requestType)}</span>
            <ExpandMoreIcon className='wizard__icon wizard__icon--expand' />
          </div>
        </div>
        <div className='accordion__items'>
          <div className={props.requestedCompletionDateIsActive ? 'accordion__item accordion__item--active' : 'accordion__item'}>
            <label htmlFor='requested-for-w'>
              <span className='required'>*</span>Requested completion date:
            </label>
            <input type='text' id='requested-for-w' className='accordion__item__value' value={props.requestedCompletionDate} disabled={true} />
          </div>
          <div className={props.removalDateIsActive ? 'accordion__item accordion__item--active' : 'accordion__item'}>
            <span>Removal date: </span>
            <span className='accordion__item__value accordion__item__value--autofill'>{props.removalDate}</span>
          </div>
          <div className={props.requestTitleIsActive ? 'accordion__item accordion__item--active' : 'accordion__item'}>
            <label htmlFor='request-title-w'>
              <span className='required'>*</span>Request title:
            </label>
            <input type='text' id='request-title-w' className='accordion__item__value' value={props.requestTitle} disabled={true} />
          </div>
          <div className={props.selectWebsiteIsActive ? 'accordion__item accordion__item--active' : 'accordion__item'}>
            <label htmlFor='select-website-w'>
              <span className='required'>*</span>Website:
            </label>
            <input type='text' id='select-website-w' className='accordion__item__value' value={props.selectWebsite} disabled={true} />
          </div>
          <div className='accordion__item'>
            <label htmlFor='request-type-w'>
              <span className='required'>*</span>Request type:
            </label>
            <input type='text' id='request-type' className='accordion__item__value' value={requestType} disabled={true} />
          </div>
          {requestType === 'Existing page' ? (
            <div className='accordion__item'>
              <label htmlFor='existing-url-w'>Existing URL:</label>
              <input type='text' id='existing-url-w' className='accordion__item__value' value={existingUrl} disabled={true} />
            </div>
          ) : null}
        </div>
      </div>
      {/* TODO: make new component for Attachments block */}
      <div className='accordion'>
        <div className='accordion__title--wrapper'>
          <div className='accordion__title'>
            <ArrowForwardIcon className='wizard__icon wizard__icon--step' />
            <h2>Attachments</h2>
            <span className='accordion__items__amount'>3</span>
            <ExpandMoreIcon className='wizard__icon wizard__icon--expand' />
          </div>
        </div>
        <div className='accordion__items'>
          <div className='accordion__item' />
        </div>
      </div>
      {/* TODO: make new component for Notes block */}
      <div className='accordion'>
        <div className='accordion__title--wrapper'>
          <div className='accordion__title'>
            <ArrowForwardIcon className='wizard__icon wizard__icon--step' />
            <h2>Notes</h2>
            <span className='accordion__items__amount'>6</span>
            <ExpandMoreIcon className='wizard__icon wizard__icon--expand' />
          </div>
        </div>
        <div className='accordion__items'>
          <div className='accordion__item' />
        </div>
      </div>
      {/* TODO: make new component for Summary block */}
      <div className='accordion'>
        <div className='accordion__title--wrapper'>
          <div className='accordion__title'>
            <ArrowForwardIcon className='wizard__icon wizard__icon--step' />
            <h2>Summary</h2>
            <ExpandMoreIcon className='wizard__icon wizard__icon--expand' />
          </div>
        </div>
        <div className='accordion__items'>
          <div className='accordion__item' />
        </div>
      </div>
      {/* TODO: make new component for History block */}
      <div className='accordion'>
        <div className='accordion__title--wrapper'>
          <div className='accordion__title'>
            <ArrowForwardIcon className='wizard__icon wizard__icon--step' />
            <h2>History</h2>
            <ExpandMoreIcon className='wizard__icon wizard__icon--expand' />
          </div>
        </div>
        <div className='accordion__items'>
          <div className='accordion__item' />
        </div>
      </div>
    </div>
  );
};

Wizard.propTypes = {
  requestedFor: PropTypes.string,
  setRequestedFor: PropTypes.func,
};

export default Wizard;

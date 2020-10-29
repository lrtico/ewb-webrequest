import React from 'react';
import PropTypes from 'prop-types';
import { PillButton } from '../Buttons/Buttons';
import './form.scss';

const Form = (props) => {
  console.log('Form.js props = ', props);
  const {
    selectWebsite,
    selectPageType,
    updateExistingUrlIsActive,
    requestType,
    existingUrl,
    addNewPageNameIsActive,
    newPageName,
    setNewPageName,
    uploadAttachmentsIsActive,
    setExistingUrl,
    setPageTypeCommunityEvent,
    handleShowSelectPageType,
    handleShowAddNewPage,
    handleShowAttachments,
  } = props;
  return (
    <div className='form'>
      <div className='form__header'>
        <span className='form__request-number'>#14476</span>
        <span>Status: </span>
        <span className='form__status'>Not Approved</span>
      </div>
      <div className='form__section'>
        {/* TODO: convert to functional component */}
        <div className={props.requestedForIsActive ? 'form__section__question form__section__question--active' : 'form__section__question'}>
          <label htmlFor='requested-for'>
            <span className='required'>*</span>Requested for:
          </label>
          <input type='text' id='requested-for' className='accordion__item__value' value={props.requestedFor} onChange={props.setRequestedFor} />
          <PillButton buttonLabel='Next' handleNextQuestion={props.handleShowRequestorPhoneNumber} />
        </div>
        {/* TODO: convert to functional component */}
        <div className={props.requestorPhoneIsActive ? 'form__section__question form__section__question--active' : 'form__section__question'}>
          <label htmlFor='requested-phone'>Phone number:</label>
          <input type='phone' id='requested-phone' className='accordion__item__value' value={props.requestedPhone} onChange={props.setRequestorPhone} />
          <PillButton buttonLabel='Next' handleNextQuestion={props.handleShowRequestedCompletionDate} />
        </div>
        {/* TODO: convert to functional component */}
        <div className={props.requestedCompletionDateIsActive ? 'form__section__question form__section__question--active' : 'form__section__question'}>
          <label htmlFor='requested-completion-date'>
            <span className='required'>*</span>Requested completion date:
          </label>
          <input type='date' id='requested-completion-date' className='accordion__item__value' value={props.requestedCompletionDate} onChange={props.setRequestedCompletionDate} />
          <PillButton buttonLabel='Next' handleNextQuestion={props.handleShowRemovalDate} />
        </div>
        {/* TODO: convert to functional component */}
        <div className={props.removalDateIsActive ? 'form__section__question form__section__question--active' : 'form__section__question'}>
          <label htmlFor='removal-date'>Removal date:</label>
          <input type='date' id='removal-date' className='accordion__item__value' value={props.removalDate} onChange={props.setRemovalDate} />
          <PillButton buttonLabel='Next' handleNextQuestion={props.handleShowRequestTitle} />
        </div>
        {/* TODO: convert to functional component */}
        <div className={props.requestTitleIsActive ? 'form__section__question form__section__question--active' : 'form__section__question'}>
          <label htmlFor='request-title'>
            <span className='required'>*</span>Request Title:
          </label>
          <input type='text' id='request-title' className='accordion__item__value' value={props.requestTitle} onChange={props.setRequestTitle} />
          <PillButton buttonLabel='Next' handleNextQuestion={props.handleShowSelectWebsite} />
        </div>
        {/* TODO: convert to functional component */}
        <div className={props.selectWebsiteIsActive ? 'form__section__question form__section__question--active' : 'form__section__question'}>
          <div className='form__section__question__title--checkbox'>
            <span className='required'>*</span>Selected a website you would like to edit:
          </div>
          <div className='form__section__question__checkboxes'>
            <div className={selectWebsite === 'EastWestBank.com' ? 'form__section__question__checkbox form__section__question__checkbox--active' : 'form__section__question__checkbox'}>
              <label htmlFor='select-website-ewb'>
                <span>EastWestBank.com</span>
                <input type='radio' id='select-website-ewb' name='select-website' value='EastWestBank.com' className='accordion__item__value' onClick={(event) => props.setSelectWebsite(event)} />
              </label>
            </div>
            <div className={selectWebsite === 'ReachFurther.com' ? 'form__section__question__checkbox form__section__question__checkbox--active' : 'form__section__question__checkbox'}>
              <label htmlFor='select-website-rf'>
                <span>ReachFurther.com</span>
                <input type='radio' id='select-website-rf' name='select-website' value='ReachFurther.com' className='accordion__item__value' onClick={(event) => props.setSelectWebsite(event)} />
              </label>
            </div>
          </div>
          <PillButton buttonLabel='Next' handleNextQuestion={props.handleShowSelectPageType} />
        </div>
        {/* TODO: convert to functional component page type */}
        <div className={props.selectPageTypeIsActive ? 'form__section__question form__section__question--active' : 'form__section__question'}>
          <div className='form__section__question__title--checkbox'>
            <span className='required'>*</span>Select the type of page this request is for:
          </div>
          <div className='form__section__question__checkboxes'>
            <div className={requestType === 'Existing page' ? 'form__section__question__checkbox form__section__question__checkbox--active' : 'form__section__question__checkbox'}>
              <label htmlFor='update-existing-url'>
                <span>Update an existing page</span>
                <input type='radio' id='update-existing-url' name='select-page-type' value='Existing page' className='accordion__item__value' onClick={(event) => props.handleShowExistingUrl(event)} />
              </label>
            </div>
            <div className={requestType === 'New page' ? 'form__section__question__checkbox form__section__question__checkbox--active' : 'form__section__question__checkbox'}>
              <label htmlFor='add-new-page'>
                <span>Add a new page</span>
                <input type='radio' id='add-new-page' name='select-page-type' value='New page' className='accordion__item__value' onClick={(event) => handleShowAddNewPage(event)} />
              </label>
            </div>
            <div className={requestType === 'Community event' ? 'form__section__question__checkbox form__section__question__checkbox--active' : 'form__section__question__checkbox'}>
              <label htmlFor='add-community-event'>
                <span>Add a new community event</span>
                <input type='radio' id='add-community-event' name='select-page-type' value='Community event' className='accordion__item__value' onClick={(event) => setPageTypeCommunityEvent(event)} />
              </label>
            </div>
          </div>
          <PillButton buttonLabel='Next' handleNextQuestion={handleShowAttachments} />
        </div>
        {/* TODO: convert to functional component update existing page's url */}
        <div className={updateExistingUrlIsActive ? 'form__section__question form__section__question--active' : 'form__section__question'}>
          <label htmlFor='existing-url'>
            <span className='required'>*</span>Existing page's URL:
          </label>
          <input type='text' id='existing-url' className='accordion__item__value' value={existingUrl} onChange={setExistingUrl} />
          <PillButton buttonLabel='Next' handleNextQuestion={handleShowAttachments} />
          <PillButton buttonLabel='Back' handleNextQuestion={handleShowSelectPageType} />
        </div>
        {/* TODO: convert to functional component add new page's name */}
        <div className={addNewPageNameIsActive ? 'form__section__question form__section__question--active' : 'form__section__question'}>
          <label htmlFor='new-page-name'>
            <span className='required'>*</span>New page's name:
          </label>
          <input type='text' id='new-page-name' className='accordion__item__value' value={newPageName} onChange={setNewPageName} />
          <PillButton buttonLabel='Next' handleNextQuestion={handleShowAttachments} />
          <PillButton buttonLabel='Back' handleNextQuestion={handleShowSelectPageType} />
        </div>
        {/* TODO: convert to functional component attachments */}
        <div className={uploadAttachmentsIsActive ? 'form__section__question form__section__question--active' : 'form__section__question'}>
          <label htmlFor='existing-url'>Upload Attachments:</label>
          <input type='text' id='existing-url' className='accordion__item__value' value={existingUrl} onChange={setExistingUrl} />
          <PillButton buttonLabel='Next' handleNextQuestion={handleShowAttachments} />
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {};

export default Form;

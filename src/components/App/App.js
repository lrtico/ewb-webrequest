import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Wizard from '../Wizard/Wizard';
import Form from '../Form/Form';
import ProgressBar from '../ProgressBar/ProgressBar';

class App extends Component {
  state = {
    loading: true,
    requestorIsActive: true,
    requestCreatedBy: 'Jackson Powell',
    requestedFor: '',
    requestedForIsActive: true,
    requestedForIsAnswered: false,
    requestorPhone: '',
    requestorPhoneIsActive: false,
    requestedDepartment: 'Marketing',
    requestIsActive: false,
    requestedCompletionDate: '',
    requestedCompletionDateIsActive: false,
    requestedCompletionDateIsAnswered: false,
    removalDate: '',
    removalDateIsActive: false,
    requestTitle: '',
    requestTitleIsActive: false,
    requestTitleIsAnswered: false,
    selectWebsite: '',
    selectWebsiteIsActive: false,
    selectWebsiteIsAnswered: false,
    requestType: '',
    selectPageTypeIsActive: false,
    existingUrl: '',
    updateExistingUrlIsActive: false,
    newPageName: '',
    addNewPageNameIsActive: false,
    uploadAttachmentsIsActive: false,
    requestorAccordionIsExpanded: false,
    requestAccordionIsExpanded: false,
    attachmentsAccordionIsExpanded: false,
    notesAccordionIsExpanded: false,
    summaryAccordionIsExpanded: false,
    historyAccordionIsExpanded: false,
    submitIsEnabled: true,
    percentComplete: 0,
    totalRequiredIsAnswered: 0,
    totalRequired: 6,
  };

  changeRequestedFor = (event) => {
    // console.log('changeCreatedBy value changed', event.target.value);
    // this.state.requestedFor === '' ?? this.setState({ totalRequiredIsAnswered: 1 });

    this.setState({
      requestedFor: event.target.value,
      requestedForIsActive: true,
      // requestedForIsAnswered: true,
    });
  };

  changeRequestorPhone = (event) => {
    // console.log('changeRequestorPhone value changed', event.target.value);
    this.setState({
      requestorPhone: event.target.value,
    });
  };

  changeRequestedCompletionDate = (event) => {
    // console.log('changeRequestedCompletionDate value changed', event.target.value);
    this.setState({
      requestedCompletionDate: event.target.value,
      requestedCompletionDateIsActive: true,
    });
  };

  changeRemovalDate = (event) => {
    // console.log('changeRemovalDate value changed', event.target.value);
    this.setState({
      removalDate: event.target.value,
    });
  };

  changeRequestTitle = (event) => {
    // console.log('changeRemovalDate value changed', event.target.value);
    this.setState({
      requestTitle: event.target.value,
    });
  };

  changeSelectWebsite = (event) => {
    // console.log('changeSelectWebsite passed in arg = ', event.target.value);
    this.setState({ selectWebsite: event.target.value });
  };

  changePageType = (event) => {
    console.log('changePageType passed in arg = ', event.target.value);
    this.setState({ requestType: event.target.value });
  };

  changeExistingUrl = (event) => {
    // console.log('changeExistingUrl passed in arg = ', event.target.value);
    this.setState({ existingUrl: event.target.value });
  };

  changeNewPageName = (event) => {
    // console.log('changeNewPageName passed in arg = ', event.target.value);
    this.setState({ newPageName: event.target.value });
  };

  expandAccordion = (section) => {
    console.log('expandAccordion called by ', section);

    switch (section) {
      case 'requestor':
        this.setState({
          requestorIsActive: !this.state.requestorIsActive,
          requestedForIsActive: true,
          requestorPhoneIsActive: false,
        });
        break;
      case 'request':
        this.setState({
          requestIsActive: !this.state.requestIsActive,
        });
        break;
      default:
        this.setState({
          requestorIsActive: false,
          requestIsActive: false,
          attachmentsAccordionIsExpanded: false,
          notesAccordionIsExpanded: false,
          summaryAccordionIsExpanded: false,
          historyAccordionIsExpanded: false,
        });
    }
  };

  showRequestorPhoneNumber = () => {
    const { requestedFor, totalRequiredIsAnswered, requestedForIsAnswered, totalRequired } = this.state;

    if (requestedFor === '' && requestedForIsAnswered === true) {
      // Subtract from progress bar
      let answered = totalRequiredIsAnswered;
      answered--;
      let percent = (answered / totalRequired) * 100;
      // console.log('showRequestorPhoneNumber requestedForIsAnswered true, percentComplete = ', Math.round(percent));
      this.setState({
        requestedForIsActive: false,
        requestorPhoneIsActive: true,
        requestedForIsAnswered: false,
        totalRequiredIsAnswered: answered,
        percentComplete: percent,
      });
    } else if (requestedFor !== '' && requestedForIsAnswered === false) {
      // Add to progress bar
      let answered = totalRequiredIsAnswered;
      answered++;
      let percent = (answered / totalRequired) * 100;
      console.log('showRequestorPhoneNumber requestedForIsAnswered false, percentComplete = ', percent);
      this.setState({
        requestedForIsActive: false,
        requestorPhoneIsActive: true,
        percentComplete: percent,
        totalRequiredIsAnswered: answered,
        requestedForIsAnswered: true,
      });
    } else {
      this.setState({
        requestedForIsActive: false,
        requestorPhoneIsActive: true,
      });
    }
  };

  showRequestedFor = () => {
    this.setState({
      requestedForIsActive: true,
      requestorPhoneIsActive: false,
    });
  };

  showRequestedCompletionDate = () => {
    this.setState({
      requestedCompletionDateIsActive: true,
      requestorPhoneIsActive: false,
      requestIsActive: true,
    });
  };

  showRemovalDate = () => {
    // const { requestedCompletionDate, totalRequiredIsAnswered, requestedCompletionDateIsAnswered, totalRequired } = this.state;
    this.setState({
      requestedCompletionDateIsActive: false,
      removalDateIsActive: true,
    });
  };

  showRequestTitle = () => {
    this.setState({
      requestTitleIsActive: true,
      removalDateIsActive: false,
    });
  };

  showSelectWebsite = () => {
    this.setState({
      selectWebsiteIsActive: true,
      requestTitleIsActive: false,
    });
  };

  showSelectPageType = () => {
    this.setState({
      selectPageTypeIsActive: true,
      selectWebsiteIsActive: false,
      updateExistingUrlIsActive: false,
      addNewPageNameIsActive: false,
    });
  };

  showExistingUrl = (event) => {
    console.log('showExistingUrl event = ', event.target.value);
    this.setState({
      updateExistingUrlIsActive: true,
      selectPageTypeIsActive: false,
      requestType: event.target.value,
    });
  };

  showAddNewPage = (event) => {
    console.log('showAddNewPage event = ', event.target.value);
    this.setState({
      addNewPageNameIsActive: true,
      selectPageTypeIsActive: false,
      requestType: event.target.value,
    });
  };

  showAttachments = () => {
    this.setState({
      selectPageTypeIsActive: false,
      selectWebsiteIsActive: false,
      updateExistingUrlIsActive: false,
      uploadAttachmentsIsActive: true,
    });
  };

  // showNextQuestion = () => {
  //   // console.log('showNextQuestion go now!');
  //   const { requestedFor, requestedForIsActive, requestorPhoneIsActive, totalRequiredIsAnswered, requestedForIsAnswered, totalRequired } = this.state;

  //   if (requestedFor === '') {
  //     this.setState({ totalRequiredIsAnswered: 0 });
  //   } else {
  //     this.setState({ totalRequiredIsAnswered: 1 });
  //   }

  //   if (requestedForIsActive) {
  //     if (requestedFor !== '' && requestedForIsAnswered === true) {
  //     } else if (requestedForIsAnswered === false) {
  //       // let percent = (totalRequiredIsAnswered / totalRequired) * 100;
  //       // console.log('showNextQuestion  requestedForIsActive requestedForIsAnswered true, percentComplete = ', percent);
  //       this.setState({
  //         requestedForIsActive: false,
  //         requestorPhoneIsActive: true,
  //         // percentComplete: percent,
  //       });
  //     } else if (requestedFor === '' && requestedForIsAnswered === false) {
  //       let answered = totalRequiredIsAnswered;
  //       answered++;
  //       let percent = (answered / totalRequired) * 100;
  //       console.log('showNextQuestion  requestedForIsActive requestedForIsAnswered false, percentComplete = ', percent);
  //       this.setState({
  //         requestedForIsActive: false,
  //         requestorPhoneIsActive: true,
  //         percentComplete: percent,
  //       });
  //     }
  //   } else if (requestorPhoneIsActive) {
  //     this.setState({
  //       requestedForIsActive: true,
  //       requestorPhoneIsActive: false,
  //     });
  //   } else {
  //     return console.log('No showNextQuestion match');
  //   }
  // };

  render() {
    // console.log('App state = ', this.state);
    const {
      requestCreatedBy,
      currentDate,
      requestedDepartment,
      requestedForIsActive,
      requestorIsActive,
      requestedFor,
      requestorPhoneIsActive,
      requestIsActive,
      removalDate,
      removalDateIsActive,
      requestTitle,
      requestTitleIsActive,
      selectWebsite,
      selectWebsiteIsActive,
      selectPageTypeIsActive,
      requestType,
      existingUrl,
      updateExistingUrlIsActive,
      newPageName,
      addNewPageNameIsActive,
      uploadAttachmentsIsActive,
      requestorAccordionIsExpanded,
      requestorPhone,
      requestedCompletionDate,
      requestedCompletionDateIsActive,
      percentComplete,
      submitIsEnabled,
    } = this.state;
    return (
      <div className='app'>
        <div className='app__left-col'>
          <Header />
          <Wizard
            requestCreatedBy={requestCreatedBy}
            requestedFor={requestedFor}
            requestedForIsActive={requestedForIsActive}
            requestorPhoneIsActive={requestorPhoneIsActive}
            requestorPhone={requestorPhone}
            currDate={currentDate}
            requestedDepartment={requestedDepartment}
            requestorIsActive={requestorIsActive}
            requestIsActive={requestIsActive}
            requestorAccordionIsExpanded={requestorAccordionIsExpanded}
            requestedCompletionDate={requestedCompletionDate}
            requestedCompletionDateIsActive={requestedCompletionDateIsActive}
            removalDate={removalDate}
            removalDateIsActive={removalDateIsActive}
            requestTitle={requestTitle}
            requestTitleIsActive={requestTitleIsActive}
            selectWebsite={selectWebsite}
            selectWebsiteIsActive={selectWebsiteIsActive}
            requestType={requestType}
            existingUrl={existingUrl}
            updateExistingUrlIsActive={updateExistingUrlIsActive}
            setRequestorPhone={this.changeRequestorPhone}
            handleAccordion={this.expandAccordion}
            setRequestedFor={this.changeRequestedFor}
            setRequestedCompletionDate={this.changeRequestedCompletionDate}
          />
        </div>
        <div className='app__right-col'>
          <Form
            requestedFor={requestedFor}
            requestedForIsActive={requestedForIsActive}
            requestorPhoneIsActive={requestorPhoneIsActive}
            requestorPhone={requestorPhone}
            requestedCompletionDate={requestedCompletionDate}
            requestedCompletionDateIsActive={requestedCompletionDateIsActive}
            removalDate={removalDate}
            removalDateIsActive={removalDateIsActive}
            requestTitle={requestTitle}
            requestTitleIsActive={requestTitleIsActive}
            selectWebsite={selectWebsite}
            selectWebsiteIsActive={selectWebsiteIsActive}
            requestType={requestType}
            selectPageTypeIsActive={selectPageTypeIsActive}
            updateExistingUrlIsActive={updateExistingUrlIsActive}
            existingUrl={existingUrl}
            newPageName={newPageName}
            addNewPageNameIsActive={addNewPageNameIsActive}
            uploadAttachmentsIsActive={uploadAttachmentsIsActive}
            setRequestedFor={this.changeRequestedFor}
            setRequestorPhone={this.changeRequestorPhone}
            setRequestedCompletionDate={this.changeRequestedCompletionDate}
            setRemovalDate={this.changeRemovalDate}
            setRequestTitle={this.changeRequestTitle}
            setSelectWebsite={this.changeSelectWebsite}
            setExistingUrl={this.changeExistingUrl}
            setNewPageName={this.changeNewPageName}
            setPageTypeCommunityEvent={this.changePageType}
            handleShowRequestedFor={this.showRequestedFor}
            handleShowRequestorPhoneNumber={this.showRequestorPhoneNumber}
            handleShowRequestedCompletionDate={this.showRequestedCompletionDate}
            handleShowRemovalDate={this.showRemovalDate}
            handleShowRequestTitle={this.showRequestTitle}
            handleShowSelectWebsite={this.showSelectWebsite}
            handleShowSelectPageType={this.showSelectPageType}
            handleShowExistingUrl={this.showExistingUrl}
            handleShowAddNewPage={this.showAddNewPage}
            handleShowAttachments={this.showAttachments}
          />
          <ProgressBar submitIsEnabled={submitIsEnabled} percentComplete={percentComplete} />
        </div>
      </div>
    );
  }
}

export default App;

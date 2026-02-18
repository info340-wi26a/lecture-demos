import React, { useState } from 'react';

import USERS from '../data/users.json';

export function ComposeForm(props) {
  const { currentChannel, currentUser, addMessageFunction } = props;

  const [inputtedText, setInputtedText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting form");

    //1. get the message the user typed
    console.log("submit message", inputtedText);
    
    //2. add a message
     const user = currentUser;
     const message = inputtedText;
     const channel = currentChannel;
     addMessageFunction(user, message, channel);

    setInputtedText('');

  }

  const handleChange = (event) => {
    //console.log(event.target.value);
    setInputtedText(event.target.value);
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          value={inputtedText}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-secondary">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}
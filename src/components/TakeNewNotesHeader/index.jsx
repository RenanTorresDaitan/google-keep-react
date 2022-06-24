import React, { useState } from 'react';
import db from '../../models/DBManager';
import Button from '../Button';
import Notecard from '../Notecard';
import './styles.css';

function TakeNewNotesHeader() {
  const [displayHeader, setDisplayHeader] = useState(true);
  const handleDisplayHeader = () => {
    db.createNewNoteItem({ noteTime: { creationDate: Date.now() } });
    setDisplayHeader((prevState) => !prevState);
  };
  return (
    <div style={{ display: 'block', margin: 'auto' }}>
      {displayHeader && (
        <div className="newnote__header">
          <Button
            className="newnote__take-a-note"
            handleClick={() => handleDisplayHeader()}
            label="Take a note..."
            btnText="Take a note..."
          />
          <Button
            className="newnote__new-list icon-button icon-size"
            label="New list"
            handleClick={() => handleDisplayHeader()}
          />
        </div>
      )}
    </div>
  );
}

export default TakeNewNotesHeader;

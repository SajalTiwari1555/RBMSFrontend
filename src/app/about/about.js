// components/ShowHideComponent.js
"use client";
import React, { useState } from 'react';
import { HiddenComponent, NewComponent } from './about2';

const ShowHideComponent = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [showNewComponent, setShowNewComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
    setShowNewComponent(false); // Close the new component when toggling the hidden component
  };

  const openNewComponent = () => {
    setShowComponent(false); // Close the hidden component when opening the new component
    setShowNewComponent(true);
  };

  return (
    <div>
      <h1>Show/Hide Component Example</h1>
      <button onClick={toggleComponent}>Toggle Component</button>
      {showComponent && <HiddenComponent onNewComponentClick={openNewComponent} />}
      {showNewComponent && <NewComponent />}
    </div>
  );
};

export default ShowHideComponent;

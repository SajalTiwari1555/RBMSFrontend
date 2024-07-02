// components/HiddenComponent.js
import Link from 'next/link';
import React from 'react';

const NewComponent = () => (
  <div>
    <h2>This is the new component</h2>
    <p>This component replaces the previous one when clicked.</p>
  </div>
);

const HiddenComponent = ({ onNewComponentClick }) => (
  <div className="flex flex-col">
    <h2>This is the hidden component</h2>
        <Link href="/blogs"><span>seo</span></Link>
        <div>

        {/* <button onClick={onNewComponentClick}>Open New Component</button> */}
        </div>
  </div>
);

export { HiddenComponent, NewComponent };

import React from 'react';

import { HeaderBar } from './Header.jsx';
import { ChatPane } from './ChatPane.jsx';

function App(props) {
  return (
    <div>
      <HeaderBar />
      <div className="p-2">
        <ChatPane />
      </div>
    </div>
  );
}

export default App;
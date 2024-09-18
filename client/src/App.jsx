import React from 'react';
import "./index.css";
import Body from './Component/Body';
import {Toaster} from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Body/>
      <Toaster/>
    </div>
  );
}

export default App
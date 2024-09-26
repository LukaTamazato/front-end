import React, { useState } from 'react';
import SYSidebar from './components/sidebar/SYSidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SYLayout from './layouts/SYLayout';

const App = () => {
  return (
    <div>
      <Router>
        <SYLayout />
      </Router>
    </div>
  );
};

export default App;

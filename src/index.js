import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 삽입된 코드!!
if(process.env.NODE_ENV === "development"){  // development인지 production인지 체크가능
  const {worker} = require("./mocks/browser");  // 개발환경에서만 mocking library 사용할 수 있도록
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <App />
  // <React.StrictMode>
    
  // </React.StrictMode>
);


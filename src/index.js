import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Provider기능 비구조화할당
import { Provider } from 'react-redux';
//생성된 store파일 가져오기
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* App을 Provider로 감사써 사용해야함, 이 작업을 안해주면 내 프로젝트는 스토어가 뭔지 아예 모르는 똥멍청이임*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

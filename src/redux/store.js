import { configureStore } from '@reduxjs/toolkit'; //가장 기본이 되는 설정파일, 기존의 root reducer라고 생각하면 편하다. 아무데나 만들어도 상관은 없음.
import userReducer from './user'; //userReducer라는 이름으로 redux/user.js 파일호출.

//persist 를 위한 설정 추가
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
});

// persist추가하면서 변경함
// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

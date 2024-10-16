//기존 createReducer와 createAction이 합쳐진 형태.
import { createSlice } from '@reduxjs/toolkit';

const initialValue = { name: '', age: 0, email: '' }; //초기값

export const userSlice = createSlice({
  //이름은 마음대로 지정해도됨.
  name: 'user',
  //초기값 설정
  initialState: { value: initialValue },
  //상태가 변할때 실행될 내용
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialValue;
    },
  },
});
export const { login, logout } = userSlice.actions; //리듀서의 login을 내보냄
export default userSlice.reducer;

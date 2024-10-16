import React from 'react';
//우선 임포트 시켜준다.
import { useSelector } from 'react-redux';

export default function User() {
  //먼저 생성한 store.js파일의 user키값
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <h1>Profile Page</h1>
      <div> Name : {user.name}</div>
      <div> Age : {user.age}</div>
      <div> Email : {user.email}</div>
    </div>
  );
}

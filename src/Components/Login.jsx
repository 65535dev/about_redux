import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/user';

export default function Login() {
  const dispatch = useDispatch(); //export로 내보낸 action을 이용 가능
  const func = () => {
    dispatch(login({ name: '사용자', age: 20, email: 'practice@email.com' })); //먼저 작성해둔 login action에 Object를 보내서 변경
  };
  const func2 = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button onClick={func}>Login</button>
      <button onClick={func2}>LogOut</button>
    </div>
  );
}

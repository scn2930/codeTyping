import { useRouter } from 'next/router';
import { HeaderStyle } from './style';

const Header = () => {
  const router = useRouter();
  const routingPage = (type: string) => {
    if (type === 'home') {
      router.push('/');
    } else if (type === 'practice') {
      router.push('/practice');
    } else if (type === 'game') {
      router.push('/game');
    } else if (type === 'ranking') {
      router.push('/ranking');
    } else if (type === 'signup') {
      router.push('/signup');
    } else if (type === 'login') {
      router.push('/login');
    }
  };

  return (
    <HeaderStyle>
      <div className="nav">
        <div className="left">
          <div
            onClick={() => {
              routingPage('home');
            }}
          >
            CodeType
          </div>
        </div>
        <div className="right">
          <li
            onClick={() => {
              routingPage('practice');
            }}
          >
            타자 연습
          </li>
          <li
            onClick={() => {
              routingPage('game');
            }}
          >
            게임
          </li>
          <li
            onClick={() => {
              routingPage('ranking');
            }}
          >
            랭킹
          </li>
          <li
            onClick={() => {
              routingPage('signup');
            }}
          >
            회원가입
          </li>
          <li
            onClick={() => {
              routingPage('login');
            }}
          >
            로그인
          </li>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;

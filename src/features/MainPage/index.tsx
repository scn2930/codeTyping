import { Button } from 'antd';
import { MainStyle, ButtonStyle } from './style';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const texts = ['그동안 코딩 따라 치기 바쁘셨죠?', '마땅한 서비스가 없었나요?', '이제 codeTyping이 도와드릴게요'];

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState('enter');
  const [showButtons, setShowButtons] = useState(false);
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

  useEffect(() => {
    // Set a timer to transition to the next text
    const timer = setTimeout(
      () => {
        if (animationState === 'enter') {
          setAnimationState('exit');
        } else if (currentIndex < texts.length - 1) {
          setAnimationState('enter');
          setCurrentIndex(currentIndex + 1);
        } else {
          // 애니메이션이 완료된 후 버튼 표시
          setShowButtons(true);
        }
      },
      animationState === 'enter' ? 2000 : 1000
    ); // Change timing based on animation state

    return () => clearTimeout(timer);
  }, [currentIndex, animationState]);

  return (
    <MainStyle>
      {!showButtons ? (
        <div className="textWrap">
          <div
            className={`text ${animationState === 'enter' ? 'text-enter' : 'text-exit'}`}
            style={{ opacity: animationState === 'enter' ? 1 : 0 }}
          >
            {texts[currentIndex]}
          </div>
        </div>
      ) : (
        <ButtonStyle>
          <div className="buttonWrap">
            <div className="button">
              <div className="btnTop">
                <Button
                  onClick={() => {
                    routingPage('practice');
                  }}
                >
                  타자 연습하러 가기
                </Button>
                <Button
                  onClick={() => {
                    routingPage('game');
                  }}
                >
                  게임하러 가기
                </Button>
              </div>
              <div className="btnBottom">
                <Button
                  onClick={() => {
                    routingPage('ranking');
                  }}
                >
                  랭킹 확인 하러 가기
                </Button>
              </div>
            </div>
          </div>
        </ButtonStyle>
      )}
    </MainStyle>
  );
};

export default MainPage;

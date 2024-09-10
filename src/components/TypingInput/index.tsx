import { Input } from 'antd';
import { useEffect, useState, useRef } from 'react';
import { TypingInputStyle } from './style';

interface CodeProps {
  code: string;
  indexNumber: number;
  startTime: number;
  setStartTime: any;
  endTime: number;
  setEndTime: any;
  typing: number;
  setTyping: any;
  errorCount: number;
  setErrorCount: any;
  accuracy: number;
  setAccuracy: any;
  pastTime: number;
  setPastTime: any;
  inputCount: number;
  focusIndex: number;
  setFocusIndex: any;
}

const TypingInput = (props: CodeProps) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [color, setColor] = useState(true);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef: any = useRef();

  const inputChange = (e: string) => {
    let errors = 0;
    if (!isTyping) {
      setIsTyping(true);
      props.setStartTime(Date.now());
    }
    setText(e);
    if (e === props.code) {
      setIsTyping(false);
      props.setEndTime(Date.now());
      props.setAccuracy(100);
    } else {
      e.split('').map((x: string, i: number) => {
        if (x !== props.code[i]) {
          errors++;
          setColor(false);
          props.setErrorCount(errors);
        } else {
          setColor(true);
          props.setErrorCount(errors);
        }
      });
      if (errors !== 0) {
        setColor(false);
      }
    }
  };

  const updateTime = () => {
    if (props.startTime) {
      const now = Date.now();
      const pastTime = Math.floor((now - props.startTime) / 1000);
      props.setPastTime(pastTime);
    }
  };

  //경과 시간
  useEffect(() => {
    let interval: any;
    if (isTyping) {
      interval = setInterval(updateTime, 1000);
    } else {
      props.setPastTime(0);
    }
    return () => clearInterval(interval);
  }, [isTyping]);

  // 정확도 계산
  useEffect(() => {
    const typing = props.code.split('');
    const textArr = text.split('');
    const onText = typing.reduce((count, item, index) => {
      if (index < textArr.length && item === textArr[index]) {
        return count + 1;
      }
      return count;
    }, 0);
    const ok = Number((onText / typing.length) * 100).toFixed(2);
    props.setAccuracy(ok);
    // infinity 방지
    if (props.pastTime > 0) {
      props.setTyping(Math.floor(Number((onText / props.pastTime) * 60)));
    } else {
      props.setTyping(0);
    }
  }, [text]);

  // input focus이동
  useEffect(() => {
    const type = document.getElementById(`num${props.focusIndex}`);
    if (type) {
      (type as HTMLInputElement)?.focus();
    }
  }, [props.focusIndex]);

  const activeEnter = (e: any) => {
    if (text.length !== 0 && e.key === 'Enter') {
      if (props.focusIndex < props.inputCount - 1) {
        props.setFocusIndex(props.focusIndex + 1);
      } else {
        clearInterval(intervalRef.current);
        setTime(0);
        setRunning(false);
        alert(`${time}`);
      }
      setIsTyping(false);
    }
  };
  // 전체시간 기록
  // const startStopwatch = () => {
  //   if (!running) {
  //     intervalRef.current = setInterval(() => {
  //       setTime((prevTime) => prevTime + 1000);
  //     }, 1000);
  //     setRunning(true);
  //   } else {
  //     clearInterval(intervalRef.current);
  //     setRunning(false);
  //   }
  // };

  // const resetStopwatch = () => {
  //   clearInterval(intervalRef.current);
  //   setTime(0);
  //   setRunning(false);
  // };

  const target: any = document.getElementById(`num0`);
  if (target?.value?.length === 1) {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
      setRunning(true);
    }
    console.log('time', time);
  }

  window.addEventListener('copy', (e: any) => {
    e.preventDefault();
    e.clipboardData.setData('Text', '복사 금지!!');
  });

  return (
    <TypingInputStyle>
      <div className="codeWrap">
        <div>
          <p>{props.code}</p>
          <Input
            className={`${color === true ? ' black' : ' red'} `}
            id={`num${props.indexNumber}`}
            onChange={(e) => inputChange(e.target.value)}
            onKeyDown={(e) => activeEnter(e)}
            autoFocus={props.focusIndex === props.indexNumber}
          />
        </div>
      </div>
    </TypingInputStyle>
  );
};

export default TypingInput;

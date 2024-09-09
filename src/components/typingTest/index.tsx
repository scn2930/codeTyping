import { useState, useEffect, useRef } from 'react';

const sampleText = '타자 연습을 위한 샘플 텍스트입니다. 이 문장을 정확하게 입력해 보세요.';

const TypingTest: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [errorCount, setErrorCount] = useState(0);
  const [accuracy, setAccuracy] = useState<number>(100);

  const inputRef = useRef<HTMLInputElement>(null);
  console.log('inputRef', inputRef);

  useEffect(() => {
    if (isTyping) {
      if (inputText === sampleText) {
        setIsTyping(false);
        const endTime = new Date().getTime();
        const timeElapsed = (endTime - (startTime || endTime)) / 1000;
        alert(`타자 연습 완료! 시간: ${timeElapsed.toFixed(2)}초, 정확도: ${accuracy.toFixed(2)}%`);
      }
    }
  }, [inputText, isTyping]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isTyping) {
      setStartTime(new Date().getTime());
      setIsTyping(true);
    }
    const value = event.target.value;
    setInputText(value);
    calculateAccuracy(value);
  };

  const calculateAccuracy = (text: string) => {
    let errors = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== sampleText[i]) errors++;
    }
    const percentage = ((text.length - errors) / sampleText.length) * 100;
    setErrorCount(errors);
    setAccuracy(percentage);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>타자 연습</h1>
      <p style={{ marginBottom: '10px' }}>{sampleText}</p>
      <input
        ref={inputRef}
        type="text"
        value={inputText}
        onChange={handleChange}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <p>오타 수: {errorCount}</p>
      <p>정확도: {accuracy.toFixed(2)}%</p>
    </div>
  );
};

export default TypingTest;

import React from "react";

// 이벤트 핸들러를 props로 받음으로서 UI와 로직을 분리합니다.
// 컴포넌트의 재사용성을 높이는 좋은 방법입니다.
// 관례상 이벤트 핸들러 props은 on으로 시작하고 그 뒤에 대문자가 와야 합니다.
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  const handlePlayClick = () => {
    alert(`Playing ${movieName}!`);
  };

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

export default function Event2() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

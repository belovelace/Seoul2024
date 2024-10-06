document.addEventListener('DOMContentLoaded', function() {
  // '시작' 버튼 클릭 시 이벤트
  const startButton = document.querySelector('.start-btn');
  const message = document.getElementById('startMessage');

  if (!startButton) {
      console.error("'.start-btn' 클래스를 가진 버튼을 찾을 수 없습니다.");
      return;
  }

  if (!message) {
      console.error("id 'startMessage'를 가진 요소를 찾을 수 없습니다.");
      return;
  }

  startButton.addEventListener('click', function() {
      console.log("시작 버튼 클릭됨"); // 디버깅용 로그

      if (!message.textContent) {
          message.textContent = "시작합니다!";
          message.classList.add('show');
          console.log("메시지 표시");

     // 2.5초 후에 페이지 이동 실행
    setTimeout(function() {
    location.href = 'Http://127.0.0.1:8686/home';
    }, 1500); // 2500ms = 2.5초

      } else {
          // 이미 메시지가 표시된 경우 숨기기
          message.textContent = "";
          message.classList.remove('show');
          console.log("메시지 숨김");
      }
  });
});

/////// 관리자 로그인
document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 기본 제출 동작 방지

  const adminId = document.getElementById('adminId').value;
  const adminPassword = document.getElementById('adminPassword').value;

  // 간단한 로그인 처리 예시
  if (adminId === 'admin' && adminPassword === 'password') { // 예시로 'admin'과 'password'로 로그인
      alert('로그인 성공!');
      // 로그인 성공 후 페이지 이동 또는 추가 작업 수행
  } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
  }
});





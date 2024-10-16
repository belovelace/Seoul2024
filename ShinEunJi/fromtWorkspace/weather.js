/* 비동기적으로 현재 위치를 알아내어 지정된 요소에 출력한다. */
function whereami(elt) {
  // 이 객체를 getCurrentPosition() 메서드의 세번째 인자로 전달한다.
  var options = {
      // 가능한 경우, 높은 정확도의 위치(예를 들어, GPS 등) 를 읽어오려면 true로 설정
      // 그러나 이 기능은 배터리 지속 시간에 영향을 미친다.
      enableHighAccuracy: false, // 대략적인 값이라도 상관 없음: 기본값

      // 위치 정보가 충분히 캐시되었으면, 이 프로퍼티를 설정하자,
      // 위치 정보를 강제로 재확인하기 위해 사용하기도 하는 이 값의 기본 값은 0이다.
      maximumAge: 30000,     // 5분이 지나기 전까지는 수정되지 않아도 됨

      // 위치 정보를 받기 위해 얼마나 오랫동안 대기할 것인가?
      // 기본값은 Infinity이므로 getCurrentPosition()은 무한정 대기한다.
      timeout: 15000    // 15초 이상 기다리지 않는다.
  }

  if(navigator.geolocation) // geolocation 을 지원한다면 위치를 요청한다.
      navigator.geolocation.getCurrentPosition(success, error, options);
  else
      elt.innerHTML = "이 브라우저에서는 Geolocation이 지원되지 않습니다.";


  // geolocation 요청이 실패하면 이 함수를 호출한다.
  function error(e) {
      // 오류 객체에는 수치 코드와 텍스트 메시지가 존재한다.
      // 코드 값은 다음과 같다.
      // 1: 사용자가 위치 정보를 공유 권한을 제공하지 않음.
      // 2: 브라우저가 위치를 가져올 수 없음.
      // 3: 타임아웃이 발생됨.
      elt.innerHTML = "Geolocation 오류 "+e.code +": " + e.message;
  }


  // geolocation 요청이 성공하면 이 함수가 호출된다.
  function success(pos) {

      console.log(pos); // [디버깅] Position 객체 내용 확인

      // 항상 가져올 수 있는 필드들이다. timestamp는 coords 객체 내부에 있지 않고,
      // 외부에서 가져오는 필드라는 점에 주의하다.
      var msg = "당신은 " +
          new Date(pos.timestamp).toLocaleString() + "에 " +
          " 위도 " + pos.coords.latitude +
          " 경도 " + pos.coords.longitude + "에서 "+
          " 약 " + pos.coords.accuracy + " 미터 떨어진 곳에 있습니다.";

      elt.innerHTML = msg;     // 모든 위치 정보를 출력한다.
  }
}


// 나의 위치정보를 출력할 객체 구하기
var elt = document.getElementById("myLocationInfo");

// 나의 위치정보 출력하기
whereami(elt);

///////////////////////////////////////////////////////////////
const API_KEY = 'c58f2f7ae27ce4dff25e242731f3e3a1';

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  console.log(`You live in ${latitude} and ${longitude}`);

  // 템플릿 리터럴을 사용하여 URL을 수정
  fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
  )
  .then(response => response.json())
  .then(data => {
      const temperature = data.main.temp;
      const weather = data.weather[0].main;
      console.log(`온도 : ${temperature}, 날씨 : ${weather}`);

      // HTML 요소에 데이터 출력
      const weatherElement = document.getElementById('weather');
      weatherElement.innerText = `온도: ${temperature}°C, 날씨: ${weather}`;
  })
  .catch(error => console.error('Error:', error)); // 오류 처리 추가
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


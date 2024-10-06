document.addEventListener("DOMContentLoaded", function() {
    // Geolocation API를 사용하여 현재 위치 정보를 가져옴
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
    } else {
        console.error("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
    }
});

// Geolocation 성공 시 호출되는 함수
function onGeoSuccess(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // 현재 위치의 위도와 경도로 지도 표시
    showMap(latitude, longitude);
}

// Geolocation 실패 시 호출되는 함수
function onGeoError(error) {
    console.error("Geolocation 오류 " + error.code + ": " + error.message);

    // 기본값: 서울의 위도와 경도로 지도 표시
    var latitude = 37.5665;
    var longitude = 126.9780;
    showMap(latitude, longitude);
}

////////////////////////카카오 맵 API////////////////////////////////////
function showMap(latitude, longitude) {
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(latitude, longitude),
			level: 3
		};

		var map = new kakao.maps.Map(container, options);

		// 마커를 표시할 위치와 title 객체 배열입니다
        var positions = [
            {
                title: '복우물공원',
                latlng: new kakao.maps.LatLng(37.455081, 127.128220)
            },
            {
                title: '협동공원',
                latlng: new kakao.maps.LatLng(37.635346, 127.126036)
            },
            {
                title: '텃밭',
                latlng: new kakao.maps.LatLng(33.450879, 126.569940)
            },
            {
                title: '근린공원',
                latlng: new kakao.maps.LatLng(33.451393, 126.570738)
            }
        ];

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < positions.length; i ++) {

            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage // 마커 이미지
            });
        }
}//showmap








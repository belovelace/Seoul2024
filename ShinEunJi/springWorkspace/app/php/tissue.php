<?php

header("Access-Control-Allow-Origin: *"); // 모든 출처 허용
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // 허용할 HTTP 메서드
header("Access-Control-Allow-Headers: Content-Type"); // 허용할 헤더

// 나머지 코드...

// 데이터베이스 정보 설정
$servername = "localhost"; // 서버명
$username = "root"; // XAMPP의 기본 사용자 이름
$password = "1111"; // 비밀번호 (기본적으로 비어 있음)
$dbname = "seoul2024"; // 사용할 데이터베이스 이름


// 데이터베이스 연결
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// POST 방식으로 전송된 데이터 받기
$machin_num = $_POST['CODE'];
$state_num = $_POST['STATE_NUM'];


// SQL 쿼리 작성:  데이터 조회
$sql = "SELECT * FROM machin WHERE CODE = ? AND STATE_NUM = ? ";

// Prepared statement 생성
$stmt = $conn->prepare($sql);

// 파라미터 바인딩
$stmt->bind_param("ssss", $machin_num,$state_num);

// 쿼리 실행
$stmt->execute();

// 결과 저장
$result = $stmt->get_result();

// 결과를 배열로 저장
$response = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $response[] = $row;
    }
} else {
    // 조회된 데이터가 없는 경우
    $response = array("message" => "No data found");
}

// JSON 형식으로 출력
echo json_encode($response);

// 연결 종료
$stmt->close();
$conn->close();
?>

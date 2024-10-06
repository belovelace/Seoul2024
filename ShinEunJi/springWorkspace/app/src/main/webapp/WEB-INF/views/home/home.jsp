<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css/home.css">
   <!-- Google Fonts 추가 (선택 사항) -->
   <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Grandiflora+One&display=swap" rel="stylesheet">
</head>
<body>

    <%@ include file="/WEB-INF/views/util/header.jsp" %>

    <div class="menu">
      <button id="viewAllParks" onclick="location.href='Http://127.0.0.1:8686/parkList';">모든 공원 조회</button>
      <button id="viewTrashStatus" onclick="location.href='Http://127.0.0.1:8686/tissueList';">휴지 상태로 조회</button>
      <button id="viewGoStart" onclick="location.href='Http://127.0.0.1:8686';">시작화면 이동</button>
    </div>

    <div class="map-container">
        <!-- 여기에는 카카오 api 지도 들어감 -->
      <%@ include file="/WEB-INF/views/map/map.jsp" %>
    </div>

<footer>
<p>&copy; 2024 사용자 홈 페이지</p>
</footer>

</body>
</html>
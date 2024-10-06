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
    <header class="header">
        <h1>잘 풀리는 팀</h1>
    </header>

    <div class="map-container">
        <!-- 여기에는 카카오 api 지도 들어감 -->
      <%@ include file="/WEB-INF/views/util/map.jsp" %>
    </div>


</body>
</html>
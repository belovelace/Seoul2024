<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="/css/parkList.css">
</head>
<body>

   <%@ include file="/WEB-INF/views/util/header.jsp" %>

  <section class="search-section">
    <input type="text" id="searchInput" placeholder="공원이름 또는 주소로 검색..." onkeyup="filterParks()">
  </section>

    <section class="parks-list" id="parksList">
        <div class="park-item">
            <h2 class="park-name">한강공원</h2>
            <p class="park-address">서울특별시 영등포구 여의동</p>
            <p class="park-restroom">화장실 정보: 있음</p>
            <a href="#" class="details-button">상세보기</a>
        </div>
        <div class="park-item">
            <h2 class="park-name">올림픽공원</h2>
            <p class="park-address">서울특별시 송파구 올림픽로</p>
            <p class="park-restroom">화장실 정보: 없음</p>
            <a href="#" class="details-button">상세보기</a>
        </div>
        <!-- 추가 공원 항목을 여기에 추가하세요 -->
    </section>
    </main>



</body>
</html>
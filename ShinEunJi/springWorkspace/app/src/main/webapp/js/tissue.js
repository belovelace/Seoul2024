// 페이지 로드 시 기본 데이터 가져오기 (필요 시)
document.addEventListener('DOMContentLoaded', function() {
    fetchTissueData();
});

function fetchTissueData() {
    const input = document.getElementById('searchInput').value.trim();

    // 입력값이 없을 경우 경고 메시지 표시
    if (input === '') {
        alert('검색어를 입력해주세요.');
        return;
    }

    // 입력값을 분석하여 CODE 또는 MACHIN_NUM을 설정
    let postData = {};
    if (input.toUpperCase().startsWith('1')) { // 예시: CODE가 'A'로 시작한다고 가정
        postData.CODE = input.toUpperCase();
    } else {
        postData.MACHIN_NUM = input;
    }

    // 나머지 POST 데이터는 필요에 따라 설정
    // 실제 애플리케이션에서는 사용자의 위치 정보를 동적으로 가져와 설정해야 합니다.
    postData.LATITUDE = '37.5665'; // 예시 위도
    postData.LONGITUDE = '126.9780'; // 예시 경도

    fetch('http://127.0.0.1:8686/php/tissue.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(postData)
    })
        .then(response => response.json())
        .then(data => {
            displayTissueData(data);
        })
        .catch(error => {
            console.error('Error fetching tissue data:', error);
            document.getElementById('tissueList').innerHTML = '<p>데이터를 불러오는 데 실패했습니다.</p>';
        });
}

function displayTissueData(data) {
    const tissueList = document.getElementById('tissueList');
    tissueList.innerHTML = ''; // 기존 내용 초기화

    if (Array.isArray(data) && data.length > 0) {
        data.forEach(item => {
            const tissueItem = document.createElement('div');
            tissueItem.className = 'tissue-item';

            const restroomCode = document.createElement('h2');
            restroomCode.className = 'restroom-code';
            restroomCode.textContent = `화장실 코드: ${item.tissueCode}`;

            const stallNumber = document.createElement('p');
            stallNumber.className = 'stall-number';
            stallNumber.textContent = `${item.machineNum}번 칸`;

            const tissueStatus = document.createElement('p');
            tissueStatus.className = 'tissue-status';
            tissueStatus.textContent = `휴지 잔여 상태: ${item.tissue_status}`;

            tissueItem.appendChild(restroomCode);
            tissueItem.appendChild(stallNumber);
            tissueItem.appendChild(tissueStatus);

            tissueList.appendChild(tissueItem);
        });
    } else if (data.message) {
        tissueList.innerHTML = `<p>${data.message}</p>`;
    } else {
        tissueList.innerHTML = '<p>데이터가 없습니다.</p>';
    }
}

function filterTissueStatus() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const tissues = document.getElementById('tissueList').getElementsByClassName('tissue-item');

    for (let i = 0; i < tissues.length; i++) {
        const code = tissues[i].getElementsByClassName('restroom-code')[0].innerText.toLowerCase();
        const stall = tissues[i].getElementsByClassName('stall-number')[0].innerText.toLowerCase();
        if (code.includes(input) || stall.includes(input)) {
            tissues[i].style.display = "";
        } else {
            tissues[i].style.display = "none";
        }
    }
}
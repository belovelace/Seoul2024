function displayTissueData(data) {
    const tissueList = document.getElementById('tissueList');
    tissueList.innerHTML = ''; // 기존 내용 초기화

    if (Array.isArray(data) && data.length > 0) {
        data.forEach(item => {
            const tissueItem = document.createElement('div');
            tissueItem.className = 'tissue-item';

            const restroomCode = document.createElement('h2');
            restroomCode.className = 'restroom-code';
            restroomCode.textContent = `화장실 코드: ${item.tissue_code}`;

            const stallNumber = document.createElement('p');
            stallNumber.className = 'stall-number';
            stallNumber.textContent = `${item.machine_num}번 칸`;

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
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const tissues = document.getElementById('tissueList').getElementsByClassName('tissue-item');

    for (let i = 0; i < tissues.length; i++) {
        const code = tissues[i].getElementsByClassName('restroom-code')[0].innerText.toLowerCase();
        const stall = tissues[i].getElementsByClassName('stall-number')[0].innerText.toLowerCase();
        if (code.includes(filter) || stall.includes(filter)) {
            tissues[i].style.display = "";
        } else {
            tissues[i].style.display = "none";
        }
    }
}
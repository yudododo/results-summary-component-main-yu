let data = [];

axios.get('./data.json')
    .then(function (response) {
        data = response.data;
        renderData();
    });

function renderData() {
    const content = document.querySelector(".content");

    // 清空原有內容
    content.innerHTML = '';

    data.forEach(function (item, index) {
        // 創建一個新的 div 元素
        const newItem = document.createElement('div');

        // 設定新元素的內容，使用模板字串
        newItem.innerHTML = `
            <div class="item${index}">
                <div class="category">
                    <img src="${item.icon}"" alt="">
                    <h4>${item.category}</h4>
                </div> 
                <h4 class="score">${item.score}  / 100</h4>
                </div>
            </div>
        `;

        // 將新元素加入 content 元素
        content.appendChild(newItem);
    });
}



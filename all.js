let data = [];

axios.get('./data.json')
    .then(function (response) {
        data = response.data;
        renderData();
    });

function renderData() {
    const content = document.querySelector(".content");
    str = '';
    data.forEach(function (item, index) {
        str += `
            <div class="item${index}">
                <div class="category">
                    <img src="${item.icon}"" alt="">
                    <h4>${item.category}</h4>
                </div> 
                <h4 class="score">${item.score}  / 100</h4>
                </div>
            </div>
        `;
        content.innerHTML = str;
    });
}



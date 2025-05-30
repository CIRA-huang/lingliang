document.addEventListener("DOMContentLoaded", () => {
  fetch("data/data.json")
    .then(response => response.json())
    .then(data => {
      document.getElementById("site-title").textContent = data.siteTitle;

      const page = document.body.dataset.page;
      if (page === "history") {
        const main = document.getElementById("main-content");
        data.history.forEach(item => {
          const div = document.createElement("div");
          div.className = "history-item";
          div.innerHTML = `
            <h3>${item.title}</h3>
            <p>時間：${item.date}</p>
            <div class="history-images">
              <div><strong>施工前</strong><br><img src="${item.before}" alt="before"></div>
              <div><strong>施工中</strong><br><img src="${item.during}" alt="during"></div>
              <div><strong>施工後</strong><br><img src="${item.after}" alt="after"></div>
            </div>
          `;
          main.appendChild(div);
        });
      }
    });
});

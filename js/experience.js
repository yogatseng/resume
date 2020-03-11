const createExperience = function () {
  // 頭
  const head = document.createElement("DIV");
  head.classList.add("row");
  head.classList.add("start");
  const headItem = document.createElement("DIV");
  headItem.classList.add("item-bullet");
  head.appendChild(headItem);
  document.getElementById("experience-cascade").appendChild(head);

  const ExpData = [{
    date: "2017/08 - 2020/01",
    title: "前端工程師",
    company: "科智企業股份有限公司",
    work: [{
      icon: "table",
      name: "可視化報表",
      description: "使用者操作表單查詢，透過API查詢資料，並以datatables為基礎繪製可檢視、編輯、過濾的報表。",
      tools: ["HTML", "css", "RWD", "Bootstrap 3", "jQuery", "datatables"]
    },
    {
      icon: "chart-line",
      name: "客製化圖表",
      description: "使用者操作表單查詢，透過API查詢資料，並以jQuery flot為基礎繪製客製化圖表。",
      tools: ["HTML", "css", "RWD", "Bootstrap 3", "jQuery", "jQuery flot"]
    },
    {
      icon: "wrench",
      name: "網頁編輯工具",
      description: "將系統常用功能模組化後，透過拖拉方式讓使用者排版元件位置，並可做元件名稱、顯示文字、連動的元件等設定。",
      tools: ["HTML", "css", "RWD", "Bootstrap 3", "jQuery", "jQuery UI"]
    },
    {
      icon: "calendar-alt",
      name: "排程編輯工具",
      description: "以FullCalendar為基礎，建立一個依班次與機台為單位、可拖拉、可編輯工單的排程工具。",
      tools: ["HTML", "css", "RWD", "Bootstrap 3", "jQuery", "FullCalendar"]
    },
    {
      icon: "chart-pie",
      name: "輪播看板",
      description: "以各種圖表繪製客製看板並定時更新顯示內容，藉此達到輪播功能。",
      tools: ["HTML", "css", "RWD", "Bootstrap 3", "jQuery", "jQuery flot", "d3.js"]
    }
    ]
  }, {
    date: "2013/09 - 2017/06",
    title: "資訊工程系學士",
    company: "虎尾科技大學",
    work: [{
      icon: "desktop",
      name: "互動式直播教學系統",
      description: "以windowsAPI實現純軟體的廣播系統。老師端可看到學生是否在使用電腦、目前使用的程式與使用時間，可透過資料庫分析出學生整學期的學習狀況，提供老師參考評量。<br>(負責範圍：學生的使用狀況、資料庫以及設定功能)",
      tools: ["c", "windowsAPI"]
    },
    {
      icon: "gamepad",
      name: "遊戲「1010!」",
      description: "將下方三個物件放入上方框格中，在垂直和水平方向建立並消除整行方塊，阻止方塊填滿整個畫面。",
      tools: ["java", "java Swing"]
    }
    ]
  }];

  for (let i = 0; i < ExpData.length; i++) {
    const node = document.createElement("DIV");
    node.classList.add("row");
    const nodeItem = document.createElement("DIV");
    nodeItem.classList.add("item-bullet");
    node.appendChild(nodeItem);

    const item = document.createElement("DIV");
    item.classList.add("item");
    const date = document.createElement("DIV");
    date.classList.add("item-date");
    date.textContent = ExpData[i].date;
    item.appendChild(date);
    const title = document.createElement("DIV");
    title.classList.add("item-title");
    title.textContent = ExpData[i].title;
    item.appendChild(title);
    const company = document.createElement("DIV");
    company.classList.add("item-company");
    company.textContent = ExpData[i].company;
    item.appendChild(company);
    const description = document.createElement("DIV");
    description.classList.add("item-description");
    item.appendChild(description);
    const descriptionUL = document.createElement("UL");
    description.appendChild(descriptionUL);

    for (let workIndex = 0; workIndex < ExpData[i].work.length; workIndex++) {
      const descriptionLI = document.createElement("LI");
      descriptionLI.textContent = ExpData[i].work[workIndex].name;
      descriptionLI.setAttribute("data-exp-index", i);
      descriptionLI.setAttribute("data-work-index", workIndex);
      descriptionUL.appendChild(descriptionLI);
    }

    node.appendChild(item);

    document.getElementById("experience-cascade").appendChild(node);
  }

  // 尾
  const footer = document.createElement("DIV");
  footer.classList.add("row");
  footer.classList.add("end");
  const footerItem = document.createElement("DIV");
  footerItem.classList.add("item-bullet");
  footer.appendChild(footerItem);
  document.getElementById("experience-cascade").appendChild(footer);

  // 詳細內容
  const onDescriptionClick = () => {
    const descriptionList = document.querySelectorAll("#experience-cascade .item-description li");
    const descriptions = [...descriptionList];

    descriptions.forEach(image => {
      image.addEventListener("click", event => {
        descriptionOpen(event.target);
      })
    })
  };

  const descriptionOpen = image => {
    const expIndex = image.getAttribute("data-exp-index");
    const workIndex = image.getAttribute("data-work-index");

    const workList = ExpData[expIndex].work[workIndex].tools.map((data) => {
      return `<li><i class="fas fa-check"></i>${data}</li>`;
    });
    const openedImage = `<div class='aw-backdrop'>` +
      `<div class="bulletin-board">` +
      `  <header>` +
      `    <span><i class="fas fa-${ExpData[expIndex].work[workIndex].icon}"></i></span>` +
      `    <h2>${ExpData[expIndex].work[workIndex].name}</h2>` +
      `    <p>${ExpData[expIndex].work[workIndex].description}</p>` +
      `  </header>` +
      `  <ul>${workList.join("")}</ul>` +
      `</div>` +
      `<span class="aw-backdrop-close">×</span></div>`;

    document.body.insertAdjacentHTML("beforeend", openedImage);
    document.body.classList.add("open-aw-backdrop");
    onDescriptionCloseClick();
  };

  const onDescriptionCloseClick = () => {
    const closeButton = document.querySelector(".aw-backdrop-close");
    const backdrop = document.querySelector(".aw-backdrop");

    closeButton.addEventListener("click", () => {
      descriptionClose();
    })

    backdrop.addEventListener("click", (event) => {
      if (event.target.classList.contains("aw-backdrop")) {
        descriptionClose();
      }
    })
  };

  const descriptionClose = () => {
    const backdrop = document.querySelector(".aw-backdrop");
    backdrop.remove();
    document.body.classList.remove("open-aw-backdrop");
  };

  onDescriptionClick();
};

createExperience();
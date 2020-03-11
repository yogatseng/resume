const createSkill = function () {
  const layoutSkill = {
    title: "Web layout",
    data: [{
      skill: "HTML",
      percent: 70
    }, {
      skill: "css",
      percent: 80
    }, {
      skill: "RWD",
      percent: 80
    }, {
      skill: "Bootstrap 3",
      percent: 90
    }],
    color: "yellow"
  };
  const jsSkill = {
    title: "JavaScript",
    data: [{
      skill: "jQuery",
      percent: 90
    }, {
      skill: "jQuery UI",
      percent: 80
    }, {
      skill: "jQuery flot",
      percent: 90
    }, {
      skill: "datatables",
      percent: 70
    }, {
      skill: "d3.js",
      percent: 40
    }, {
      skill: "FullCalendar",
      percent: 85
    }, {
      skill: "react.js",
      percent: 40
    }],
    color: "red"
  };
  const devSkill = {
    title: "Dev Helper",
    data: [{
      skill: "git / svn",
      percent: 20
    }, {
      skill: "java",
      percent: 30
    }, {
      skill: "mySQL",
      percent: 40
    }, {
      skill: "Webpack",
      percent: 30
    }],
    color: "blue"
  };

  function createCard(cardData) {
    const card = document.createElement("DIV");
    const body = document.createElement("DIV");
    body.classList.add("card-body");

    const title = document.createElement("H2");
    title.classList.add("card-title");
    title.textContent = cardData.title;
    body.appendChild(title);

    for (let i = 0; i < cardData.data.length; i++) {
      const text = document.createElement("DIV");
      text.classList.add("card-text");

      const textspan = document.createElement("SPAN");
      textspan.textContent = cardData.data[i].skill;

      const progress = document.createElement("DIV");
      progress.classList.add("progress");

      const progressbar = document.createElement("DIV");
      progressbar.classList.add("progress-bar");
      progressbar.classList.add(`progress-${cardData.color}`);
      progressbar.setAttribute("style", `width: ${cardData.data[i].percent}%;`);
      progress.appendChild(progressbar);

      text.appendChild(textspan);
      text.appendChild(progress);

      body.appendChild(text);
    }

    // 建立card內容
    card.classList.add("card");
    card.classList.add(`card-${cardData.color}`);
    card.appendChild(body);

    // 載入
    document.getElementById("skill-progress-chart").appendChild(card);
  }
  createCard(layoutSkill);
  createCard(jsSkill);
  createCard(devSkill);
};

createSkill();
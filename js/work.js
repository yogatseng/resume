const createWork = function () {
  const workList = [{
    name: "weather",
    tools: ["d3.js", "Open Data API串接", "JSON資料處理", "透過setTimeout定期更新API"]
  },
  {
    name: "todo",
    tools: ["react", "react-redux", "webpack"]
  }
  ];
  
  for (let workIndex = 0; workIndex < workList.length; workIndex++) {
    const gallery = document.createElement("DIV");
    gallery.classList.add("gallery");

    const a = document.createElement("A");
    a.href = `https://yogatseng.github.io/${workList[workIndex].name}/`;
    a.target = "_blank";

    const galleryDiv = document.createElement("DIV");
    const img = document.createElement("IMG");
    img.src = `image/works-${workList[workIndex].name}.jpg`;

    galleryDiv.appendChild(img);
    a.appendChild(galleryDiv);

    const galleryDes = document.createElement("UL");
    for (let toolIndex = 0; toolIndex < workList[workIndex].tools.length; toolIndex++) {
      const des = document.createElement("LI");
      des.innerText = workList[workIndex].tools[toolIndex];

      const i = document.createElement("I");
      i.classList.add("fas");
      i.classList.add("fa-check");
      des.prepend(i);

      galleryDes.appendChild(des);
    }
    a.appendChild(galleryDes);

    gallery.appendChild(a);
    document.getElementById("work-gallery").appendChild(gallery);
  }
};

createWork();
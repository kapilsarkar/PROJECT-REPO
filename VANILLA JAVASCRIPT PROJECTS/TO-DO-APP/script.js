const nameBox = document.querySelector(".nameBox");
const nameBtn = document.querySelector(".nameBtn");
const nameTxt = document.querySelector(".nameTxt");
const closeIcon = document.querySelector(".close-icon");
const workType = document.querySelector(".work-type");
const dateTime = document.querySelector(".dateTime");

let date = new Date().toJSON().slice(0, 10);
dateTime.innerHTML = date;

function nameInput() {
  nameTxt.innerHTML = `Welcome:${nameBox.value} `;
}

function openWorkType() {
  workType.classList.add("open");
}

nameBtn.addEventListener("click", (e) => {
  if (nameBox.value != "") {
    nameInput();
    openWorkType();
  }
});

closeIcon.addEventListener("click", (e) => {
  workType.classList.remove("open");
});

const category = document.getElementsByName("category");
const taskAddInput = document.querySelector(".taskAddInput");
const taskAddBtn = document.querySelector(".taskAddBtn");

const myData = JSON.parse(localStorage.getItem("myData")) || [];

const addData = (myName, task, category, date) => {
  myData.push({ myName, task, category, date });
  localStorage.setItem("myData", JSON.stringify(myData));
  return myName, task, category, date;
};

taskAddBtn.addEventListener("click", (e) => {
  for (let i = 0; i < category.length; i++) {
    if (category[i].checked && nameBox.value != "") {
      addData(nameBox.value, taskAddInput.value, category[i].value, date);
      taskResult.innerHTML = "Task Added";
    }
  }
  //findData();
});
const showAllBtn = document.querySelector(".showAllBtn");

showAllBtn.addEventListener("click", (e) => {
  findData();
  taskResult.innerHTML = "";
});
const taskShow = document.querySelector(".taskShow");
const taskResult = document.querySelector(".taskResult");

function findData() {
  myData.filter((e) => {
      
    if (e.myName === nameBox.value) {
      console.log(e.myName);

      const taskList = document.createElement("div");
      taskList.className = "taskList";
      taskShow.appendChild(taskList);
      const allTaskList = document.createElement("div");
      allTaskList.className = "allTaskList";
      taskList.appendChild(allTaskList);
      const showTask = document.createElement("p");
      showTask.className = "showTask";
      allTaskList.appendChild(showTask);
      showTask.innerHTML = e.task;
      const showCategory = document.createElement("p");
      showCategory.className = "showCategory";
      showCategory.innerHTML = e.category;
      allTaskList.appendChild(showCategory);
      const showDate = document.createElement("p");
      showDate.className = "showDate";
      showDate.innerHTML = e.date;
      allTaskList.appendChild(showDate);
      const editDelDiv = document.createElement("div");
      editDelDiv.className = "editDelDiv";
      taskList.appendChild(editDelDiv);
      //Edit Button
      const editTaskBtn = document.createElement("button");
      editTaskBtn.innerText = "Edit";
      editTaskBtn.className = "editTaskBtn";
      editDelDiv.appendChild(editTaskBtn);
      //Delete Button
      const deleteTaskBtn = document.createElement("button");
      deleteTaskBtn.innerText = "Delete";
      deleteTaskBtn.className = "deleteTaskBtn";
      editDelDiv.appendChild(deleteTaskBtn);

      editTaskBtn.addEventListener("click", (e) => {
        console.log(e);
      });
    }
  });
}

const input = document.querySelector(".input");
const container = document.querySelector(".container");
const btnAdd = document.querySelector(".btnAdd");
const containerTask = document.querySelector(".containerTask");
btnAdd.addEventListener("click", (e) => {
  if (input.value == "") {
    alert("Please Enter Some Task");
  } else {
    //Add Task
    let inputValue = input.value;
    let h2 = document.createElement("h2");
    h2.innerHTML = inputValue;
    h2.className = "TaskList";
    containerTask.appendChild(h2);

    //Delete Task
    let Del = document.createElement("button");
    Del.className = "DeleteBtn";
    Del.innerText = "Delete";
    h2.appendChild(Del);
    input.value = "";
    Del.addEventListener("click", (e) => {
      h2.remove();
    });

    //Edit task
    const Edit = document.createElement("button");
    Edit.innerText = "Edit";
    Edit.classList = "EditBtn";
    h2.appendChild(Edit);

    Edit.addEventListener("click", function (e) {
      let UpdateBox = document.createElement("input");
      UpdateBox.id = "Update";
      Edit.remove();
      const UpdateBtn = document.createElement("button");
      UpdateBtn.innerText = "Update";
      UpdateBtn.className = "UpdateBtn";

      UpdateBtn.addEventListener("click", (e) => {
        if (UpdateBox.value == "") {
          alert("Please Update Your Task");
        } else {
          let updateValue = UpdateBox.value;
          h2.innerText = updateValue;

          h2.appendChild(Del);
          h2.appendChild(Edit);
        }
      });

      h2.appendChild(UpdateBtn);
      h2.appendChild(UpdateBox);
    });
  }
});

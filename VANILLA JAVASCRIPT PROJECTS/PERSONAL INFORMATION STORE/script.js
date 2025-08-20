const fullNameInput = document.querySelector(".fullName");
const contactNoInput = document.querySelector(".contactNo");
const emailInput = document.querySelector(".email");
const containerSaveText = document.querySelector(".containerSaveText");
const closeIcon = document.querySelector(".close-icon");
const btnSave = document.querySelector(".btnSave");

//CODE FOR SAVING PERSONAL DETAILS ---

const myData = JSON.parse(localStorage.getItem("myData")) || [];

const addData = (fullName, contactNo, email) => {
  myData.push({
    fullName,
    contactNo,
    email,
  });

  localStorage.setItem("myData", JSON.stringify(myData));

  return fullName, contactNo, email;
};

btnSave.addEventListener("click", (e) => {
  if (
    fullNameInput.value == "" &&
    contactNoInput.value == "" &&
    emailInput.value == ""
  ) {
    alert("Please Enter All Data");
  } else {
    addData(fullNameInput.value, contactNoInput.value, emailInput.value);
    containerSaveText.classList.add("open");
  }
  closeIcon.addEventListener("click", () => {
    containerSaveText.classList.remove("open");
  });
  fullNameInput.value = "";
  contactNoInput.value = "";
  emailInput.value = "";
});
//CODE FOR SEARCH PERSONAL DATA--
const searchBoxInput = document.querySelector(".searchName");
const searchDetails = document.querySelector(".searchDetails");
const searchEmail = document.querySelector(".searchEmail");
const clearSearchBtn = document.querySelector(".clearSearchBtn");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", (e) => {
  myData.filter((sr) => {
    if (sr.fullName === searchBoxInput.value) {
      searchDetails.style.display = "block";
      searchDetails.innerText = `Your Contact Number is : ${sr.contactNo}`;
      searchEmail.style.display = "block";
      searchEmail.innerText = `Your Email Id is : ${sr.email} `;
    }
   
  });
});
//CODE FOR CLEARING SEARCH DETAILS OF PERSONAL DATA---
clearSearchBtn.addEventListener("click", () => {
  searchBoxInput.value = "";
  searchDetails.innerText = "";
  searchEmail.innerText = "";
  searchDetails.style.display = "none";
  searchEmail.style.display = "none";
});

//CODE FOR EXPENSES---

const expensesNameInput = document.querySelector(".expensesInputName");
const electricBillInput = document.querySelector(".electricBill");
const foodBillInput = document.querySelector(".foodBill");
const houseBillInput = document.querySelector(".houseBill");
const noOfMonthInput = document.querySelector(".noOfMonth");
const saveExBtn = document.querySelector(".saveExBtn");
const secondSectionSaveText = document.querySelector(".secondSectionSaveText");
const closeIcon2 = document.querySelector(".close-icon2");

const exData = JSON.parse(localStorage.getItem("exData")) || [];

const exaddData = (exName, eBill, fdBill, hsBill, noOfMonth) => {
  exData.push({
    exName,
    eBill,
    fdBill,
    hsBill,
    noOfMonth,
  });
  localStorage.setItem("exData", JSON.stringify(exData));

  return exName, eBill, fdBill, hsBill, noOfMonth;
};

saveExBtn.addEventListener("click", (e) => {
  if (
    electricBillInput.value == "" &&
    foodBillInput.value == "" &&
    houseBillInput.value == "" &&
    noOfMonthInput.value == ""
  ) {
    alert("Please Enter All Data");
  } else {
    exaddData(
      expensesNameInput.value,
      parseInt(electricBillInput.value),
      parseInt(foodBillInput.value),
      parseInt(houseBillInput.value),
      parseInt(noOfMonthInput.value)
    );
    secondSectionSaveText.classList.add("open");
  }
  closeIcon2.addEventListener("click", () => {
    secondSectionSaveText.classList.remove("open");
  });
  expensesNameInput.value = "";
  electricBillInput.value = "";
  foodBillInput.value = "";
  houseBillInput.value = "";
  houseBillInput.value = "";
  noOfMonthInput.value = "";
});

//CODE FOR SEARCH EXPENSES DATA--

const searchExNameInput = document.querySelector(".searchExName");
const ebillDetails = document.querySelector(".ebillDetails");
const fdBillDetails = document.querySelector(".fdBillDetails");
const hsBillDetails = document.querySelector(".hsBillDetails");
const nofDays = document.querySelector(".nofDays");
const totalExbill = document.querySelector(".totalExbill");
const billperDay = document.querySelector(".billperDay");

const searchExBtn = document.querySelector(".searchExBtn");
const clearExSearchBtn = document.querySelector(".clearExSearchBtn");

searchExBtn.addEventListener("click", () => {
  exData.filter((ex) => {
    if (ex.exName === searchExNameInput.value) {
      ebillDetails.style.display = "block";
      ebillDetails.innerText = `Your E- Bill is : ${ex.eBill} `;
      fdBillDetails.style.display = "block";
      fdBillDetails.innerText = `Your Food Bill is : ${ex.fdBill}`;
      hsBillDetails.style.display = "block";
      hsBillDetails.innerText = `Your House Rent is : ${ex.hsBill}`;
      nofDays.style.display = "block";
      nofDays.innerText = `Total No Of Days in a Month is ${ex.noOfMonth}`;
      totalExbill.style.display = "block";
      let totBill = exData.reduce((acc, item) => {
        return (
          acc +
          eval(
            parseInt(item.eBill) + parseInt(item.fdBill) + parseInt(item.hsBill)
          )
        );
      }, 0);
      totalExbill.innerText = `Your Total Bill Including Tax is : ${totBill}`;
      billperDay.style.display = "block";
      billperDay.innerText = `Your PerDay Bill is ${parseInt(
        totBill / ex.noOfMonth
      )}`;
    }
  });
});

clearExSearchBtn.addEventListener("click", () => {
  searchExNameInput.value = "";
  ebillDetails.innerText = "";
  ebillDetails.style.display = "none";
  fdBillDetails.innerText = "";
  fdBillDetails.style.display = "none";
  hsBillDetails.innerText = "";
  hsBillDetails.style.display = "none";
  nofDays.innerText = "";
  nofDays.style.display = "none";
  totalExbill.innerText = "";
  totalExbill.style.display = "none";
  billperDay.innerText = "";
  billperDay.style.display = "none";
});

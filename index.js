let msgEl = document.getElementById("msg");
let saveButonEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");
let storgeKey = ("userInput");

saveButonEl.onclick = function() {
    let msgvalue = msgEl.value;
    localStorage.setItem(storgeKey, msgvalue);
};
clearBtnEl.onclick = function() {
    msgEl.value = "";
    localStorage.removeItem(storgeKey);
};
let storUser = localStorage.getItem(storgeKey);
if (storUser !== null) {
    msgEl.value = storUser;
} else {
    msgEl.value = "";
}
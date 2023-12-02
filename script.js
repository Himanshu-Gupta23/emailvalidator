// alert("Script working");

submitBtn.addEventListener("click", async (e) => {
  //   alert("click working")
  e.preventDefault();
  let apiKey = "ema_live_HLhZ5FjNavg6VFIg6EjbUNyTp9V8fPhPc0FwFVtm";
  let email = document.getElementById("email").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;

  let res = await fetch(url);
  let result = await res.json();

  let str = ``;

  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str = str + `<div><strong> ${key}:</strong>&nbsp;  ${result[key]}</div>`;
    }
  }

  resultCont.innerHTML = str;
});

let result = {
  tag: "",
  free: true,
  role: false,
  user: "find.singhal",
  email: "find.singhal@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

function updateTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(" .date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMM D0 YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  let hongKongElement = document.querySelector("#hong-kong");
  let hongKongDateElement = hongKongElement.querySelector(" .date");
  let hongKongTimeElement = hongKongElement.querySelector(".time");
  let hongKongTime = moment().tz("Asia/Hong_Kong");

  hongKongDateElement.innerHTML = hongKongTime.format("MMM D0 YYYY");
  hongKongTimeElement.innerHTML = hongKongTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(" .date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMM D0 YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

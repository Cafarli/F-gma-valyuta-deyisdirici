// BY USING fetch method

let choices = document.querySelectorAll(".choicelist");

const input = document.querySelector(".workplace .first .input-area");
const input_p1 = document.querySelector(".workplace .first .input p");
const input_p2 = document.querySelector(".workplace .second .input p");
const result = document.querySelector(".workplace .second .input-area");
input_value = input.value;
input.value = 1;
converting();

input.addEventListener("input", converting);

function converting() {
  input_value = document.querySelector(".workplace .first .input-area").value;

  const fromCur = document.querySelector(".workplace .first .active").innerText;
  const toCur = document.querySelector(".workplace .second .active").innerText;

  fetch(`https://api.exchangerate.host/convert?from=${fromCur}&to=${toCur}`)
  .then(data => data.json())
  .then(function(response){
    let convert_cur = Math.round((1 / response.result) * 10000) / 10000;
    let cur = Math.round(response.result * 10000) / 10000;
    result.value = Math.round(response.result * input_value * 10000) / 10000;
    input_p1.innerText = `1 ${fromCur} = ${cur} ${toCur}`;
    input_p2.innerText = `1 ${toCur} = ${convert_cur} ${fromCur}`;
    console.log(input_p1.innerText)
  })
  .catch(function(){
    document.querySelector('.error').style.visibility = 'visible';
  })
}


choices.forEach((item) => {
  let items = item.children;
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", (e) => {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
      }
      e.target.classList.add("active");
    });
    items[i].addEventListener("click", converting);
  }
});


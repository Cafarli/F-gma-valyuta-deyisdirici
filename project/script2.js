// BY USING fetch method

let choices = document.querySelectorAll(".choicelist");

const input = document.querySelector(".workplace .first .input-area");
const input2 = document.querySelector(".workplace .second .input-area");
const input_p1 = document.querySelector(".workplace .first .input .convert");
const input_p2 = document.querySelector(".workplace .second .input .convert");
input_value = input.value;
input2_value = input2.value;
input.value = 1;
converting("");

input2.addEventListener("input", () => {
  converting("base");
});
input.addEventListener("input", () => {
  converting("");
});
input.addEventListener("input", function (e) {
  if(!!isNaN(parseInt(input.value))){
    input.value = parseInt(input.value.toString().replace('+', '').replace('-', ''));
    document.querySelector('.first .warning').style.visibility = 'visible'
    setTimeout(()=>{
    document.querySelector('.first .warning').style.visibility = 'hidden';
  },1000) 
}
});

input2.addEventListener("input", function (e) {
    if(!!isNaN(parseInt(input2.value))){
      input2.value = parseInt(input2.value.toString().replace('+', '').replace('-', ''));
      document.querySelector('.second .warning').style.visibility = 'visible'
      setTimeout(()=>{
      document.querySelector('.second .warning').style.visibility = 'hidden';
    },1000) 
  }
});

function converting(enumData) {
  input_value = document.querySelector(".workplace .first .input-area").value;

  const fromCur = document.querySelector(".workplace .first .active").innerText;
  const toCur = document.querySelector(".workplace .second .active").innerText;

  fetch(`https://api.exchangerate.host/convert?from=${fromCur}&to=${toCur}`)
    .then((data) => data.json())
    .then(function (response) {
      let convert_cur = Math.round((1 / response.result) * 10000) / 10000;

      if (enumData === "base") {
        input.value = "";
        input.value += Math.round(response.result * input2.value * 10000) / 10000;
      } else if (enumData === "") {
        input2_value = Math.round(response.result * input_value * 10000) / 10000;
        input2.value = "";

        input2.value = input2_value;
      }
      let cur = Math.round(response.result * 10000) / 10000;
      input_p1.innerText = `1 ${fromCur} = ${cur} ${toCur}`;
      input_p2.innerText = `1 ${toCur} = ${convert_cur} ${fromCur}`;
    })
    .catch(function (error) {
      document.querySelector(".error").style.visibility = "visible";
      document.querySelector('.exc').animate([
        // keyframes
        { transform: 'translateY(0px) translateX(0px)' },
        { transform: 'translateY(400px) translateX(300px)' },
        { transform: 'translateY(250px) translateX(750px)' },
        { transform: 'translateY(350px) translateX(1100px)' },
        { transform: 'translateY(0px) translateX(1200px)' },
        { transform: 'translateY(0px) translateX(0px)' }
      ], {
        // timing options
        duration: 20000,
        iterations: Infinity
      });
      document.querySelector(".send").animate([
        // keyframes
        { transform: 'translateY(0px) translateX(0px)' },
        { transform: 'translateY(250px) translateX(500px)' },
        { transform: 'translateY(500px) translateX(850px)' },
        { transform: 'translateY(150px) translateX(300px)' },
        { transform: 'translateY(450px) translateX(0px)' },
        { transform: 'translateY(0px) translateX(0px)' }
      ], {
        // timing options
        duration: 22000,
        iterations: Infinity
      });

      document.querySelector(".circle").animate([
        // keyframes
        { transform: 'translateY(0px) translateX(0px)' },
        { transform: 'translateY(100px) translateX(-100px)' },
        { transform: 'translateY(400px) translateX(-250px)' },
        { transform: 'translateY(-300px) translateX(-600px)' },
        { transform: 'translateY(460px) translateX(-800px)' },
        { transform: 'translateY(160px) translateX(-1000px)' },
        { transform: 'translateY(200px) translateX(-10px)' },
        { transform: 'translateY(0px) translateX(0px)' }
      ], {
        // timing options
        duration: 22000,
        iterations: Infinity
      });


      document.querySelector(".cog").animate([
        // keyframes
        { transform: 'translateY(0px) translateX(0px)' },
        { transform: 'translateY(350px) translateX(300px)' },
        { transform: 'translateY(-150px) translateX(-350px)' },
        { transform: 'translateY(200px) translateX(-500px)' },
        { transform: 'translateY(400px) translateX(0px)' },
        { transform: 'translateY(-100px) translateX(400px)' },
        { transform: 'translateY(0px) translateX(0px)' }
      ], {
        // timing options
        duration: 22000,
        iterations: Infinity
      });


      document.querySelector(".hour").animate([
        // keyframes
        { transform: 'translateY(0px) translateX(0px)' },
        { transform: 'translateY(400px) translateX(-500px)' },
        { transform: 'translateY(250px) translateX(100px)' },
        { transform: 'translateY(-100px) translateX(-240px)' },
        { transform: 'translateY(150px) translateX(-600px)' },
        { transform: 'translateY(100px) translateX(600px)' },
        { transform: 'translateY(500px) translateX(300px)' },
        { transform: 'translateY(0px) translateX(0px)' }
      ], {
        // timing options
        duration: 22000,
        iterations: Infinity
      });

      document.querySelector(".warning").animate([
        // keyframes
        { transform: 'translateY(0px) translateX(0px)' },
        { transform: 'translateY(400px) translateX(-200px)' },
        { transform: 'translateY(250px) translateX(-650px)' },
        { transform: 'translateY(-200px) translateX(700px)' },
        { transform: 'translateY(400px) translateX(200px)' },
        { transform: 'translateY(150px) translateX(-100px)' }
      ], {
        // timing options
        duration: 22000,
        iterations: Infinity
      });

      document.querySelector(".refresh").animate([
        // keyframes
        { transform: 'translateY(0px) translateX(0px)' },
        { transform: 'translateY(400px) translateX(350px)' },
        { transform: 'translateY(250px) translateX(-700px)' },
        { transform: 'translateY(-150px) translateX(230px)' },
        { transform: 'translateY(100px) translateX(600px)' },
        { transform: 'translateY(450px) translateX(0px)' },
        { transform: 'translateY(-50px) translateX(-550px)' },
        { transform: 'translateY(0px) translateX(0px)' }
      ], {
        // timing options
        duration: 22000,
        iterations: Infinity
      });
    });
}

let choicesFirst = document.querySelectorAll(".first .choices .choicelist .choice");
let choicesSecond = document.querySelectorAll(" .second .choices .choicelist .choice");

choicesFirst.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (let i = 0; i < choicesFirst.length; i++) {
      choicesFirst[i].classList.remove("active");
    }
    e.target.classList.add("active");
    converting("");
  });
});

choicesSecond.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (let i = 0; i < choicesSecond.length; i++) {
      choicesSecond[i].classList.remove("active");
    }
    e.target.classList.add("active");
    converting("");
  });
});

const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByClassName("button");
var equals = false;
for (let i of button) {
  i.addEventListener("click", () => {
    if (equals) {
      input.value = "";
      equals = false;
    }
    if (i.value === "=") {
      if (input.value) {
        input.value = `${input.value} = ${eval(input.value)}`;
        equals = true;
      }
    } else {
      input.value += i.value;
    }
    switch (i.value) {
      case "c":
        input.value = "";
        break;
      case "sqrt":
        input.value = Math.sqrt(parseInt(input.value));
    }
  });
}

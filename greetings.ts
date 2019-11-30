function sum(a: number, b: number): number {
  return a + b;
}

const el: HTMLElement = document.getElementById("result") as HTMLElement;
let result;

function divide(a: number, b: number): number {
  return a / b;
}

result = divide(10, 3);

el.innerHTML = result.toString();




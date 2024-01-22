function calculate() {
    const operator = document.getElementById('operator').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
      resultElement.textContent = 'Будь ласка, введіть коректні числа.';
    } else {
      let result;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          result = 'Невідома операція';
      }
      resultElement.textContent = `${num1} ${operator} ${num2} = ${result}`;
    }
  }

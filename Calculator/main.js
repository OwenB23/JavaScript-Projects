// creates an objest to keep track of files
const calculator = {
  Display_Value: "0",
  First_operand: null,
  Wait_Second_Operand: false,
  operator: null,
};

// This modifies values each time a button is clicked on
function Input_Digit(digit) {
  const { Display_Value, Wait_Second_Operand } = calculator;

  if (Wait_Second_Operand === true) {
    calculator.Display_Value = digit;
    calculator.Wait_Second_Operand = false;
  } else {
    calculator.Display_Value =
      Display_Value === "0" ? digit : Display_Value + digit;
  }
}

// This section handles the decimal points
function Input_Decimal(dot) {
  if (calculator.Wait_Second_Operand === true) return;
  if (!calculator.Display_Value.includes(dot)) {
    calculator.Display_Value += dot;
  }
}

// This section handles operators
function Handle_Operator(Next_Operator) {
  const { First_operand, Display_Value, operator } = calculator;
  const Value_of_Input = parseFloat(Display_Value);
  if (operator && calculator.Wait_Second_Operand) {
    calculator.operator = Next_Operator;
    return;
  }
  if ((First_operand = null)) {
    calculator.First_operand = Value_of_Input;
  } else if (operator) {
    const Value_Now = First_operand || 0;
    let result = Perform_Calculations[operator](Value_Now, Value_of_Input);
    result = Number(result).toFixed(9);
    result = (result * 1).toString();
    calculator.Display_Value = parseFloat(result);
    calculator.First_operand = parseFloat(result);
  }
  calculator.Wait_Second_Operand = true;
  calculator.operator = Next_Operator;
}

const Perform_Calculations = {
  "/": (First_operand, Second_Operand) => First_operand / Second_Operand,
  "*": (First_operand, Second_Operand) => First_operand * Second_Operand,
  "+": (First_operand, Second_Operand) => First_operand + Second_Operand,
  "-": (First_operand, Second_Operand) => First_operand - Second_Operand,
  "=": (First_operand, Second_Operand) => Second_Operand,
};

function calculator_Reset() {
  calculator.Display_Value = "0";
  calculator.First_operand = null;
  calculator.Wait_Second_Operand = false;
  calculator.operator = null;
}

// This function updates the calculator screen with the contents of Display_value
function Update_Display() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.Display_Value;
}
Update_Display();

// This section monitors button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    Handle_Operator(target.value);
    Update_Display();
    return;
  }
  if (target.classList.contains("decimal")) {
    Input_Decimal(target.value);
    Update_Display();
    return;
  }
  // Ensures that AC clears all inputs from Calculator screen.
  if (target.classList.contains("all-clear")) {
    calculator_Reset();
    Update_Display();
    return;
  }
  Input_Digit(target.value);
  Update_Display();
});

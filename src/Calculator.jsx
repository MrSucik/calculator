import { useState } from "react";
import { Button, MenuItem, Select } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { Field } from "./Field";

const calculate = (a, b, operation) => {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      throw new Error(`Unsupported operation ${operation}`);
  }
};

const Calculator = () => {
  const { enqueueSnackbar: showMessageBox } = useSnackbar();
  const [selectedOperation, setSelectedOperation] = useState("+");
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const isValidNumber = (input) => input !== "" && !isNaN(input);
  const handleButtonClick = () => {
    const inputValid = isValidNumber(numberOne) && isValidNumber(numberTwo);
    if (!inputValid) {
      showMessageBox("Provide valid numbers", { variant: "error" });
      return;
    }
    const result = calculate(
      parseFloat(numberOne),
      parseFloat(numberTwo),
      selectedOperation
    );
    const resultValid = !isNaN(result) && result !== Infinity;
    showMessageBox(`The result is: ${result}`, {
      variant: resultValid ? "success" : "warning",
    });
  };
  return (
    <>
      <Field
        placeholder="Number One"
        value={numberOne}
        onChange={({ target }) => setNumberOne(target.value)}
      />
      <Field
        placeholder="Number Two"
        value={numberTwo}
        onChange={({ target }) => setNumberTwo(target.value)}
      />
      <Select
        variant="outlined"
        value={selectedOperation}
        onChange={({ target }) => setSelectedOperation(target.value)}
      >
        <MenuItem value="+">+</MenuItem>
        <MenuItem value="-">-</MenuItem>
        <MenuItem value="/">/</MenuItem>
        <MenuItem value="*">*</MenuItem>
      </Select>
      <Button color="primary" variant="contained" onClick={handleButtonClick}>
        Calculate
      </Button>
    </>
  );
};

export default Calculator;

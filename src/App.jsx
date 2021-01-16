import { useState } from "react";
import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import { useSnackbar } from "notistack";

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

const App = () => {
  const { enqueueSnackbar: showMessageBox } = useSnackbar();
  const [selectedOperation, setSelectedOperation] = useState("+");
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const handleButtonClick = () => {
    if (isNaN(numberOne) || isNaN(numberTwo)) {
      showMessageBox("Provide valid numbers", { variant: "error" });
      return;
    }
    const result = calculate(
      parseFloat(numberOne) || 0,
      parseFloat(numberTwo) || 0,
      selectedOperation
    );
    showMessageBox(`The result is: ${result}`, { variant: "success" });
  };
  return (
    <>
      <TextField
        type="number"
        variant="outlined"
        placeholder="Number One"
        size="small"
        value={numberOne}
        onChange={({ target }) => setNumberOne(target.value)}
      />
      <TextField
        type="number"
        variant="outlined"
        placeholder="Number Two"
        size="small"
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

export default App;

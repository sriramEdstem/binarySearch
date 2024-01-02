import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStart,
  setEnd,
  setNumbers,
  setOutput,
  setTime,
  setCount,
} from "../redux/binarySlice";

const Input = () => {
  const [inputArray, setInputArray] = useState([]);
  const [target, setTarget] = useState("");
  const dispatch = useDispatch();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const start = useSelector((state) => state.binary.start);

  const handleInput = (e) => {
    const value = e.target.value;
    const array = value
      .split(",")
      .filter((item) => item.trim() !== "")
      .map((item) => parseInt(item.trim(), 10));
    setInputArray(array);
    dispatch(setNumbers(array));
  };

  const binarySearch = async (arr, target) => {
    const startTime = performance.now();

    dispatch(setNumbers(inputArray));
    let low = 0;
    dispatch(setStart(0));
    let high = arr.length - 1;
    dispatch(setEnd(arr.length - 1));
    let count = 0;
    while (low <= high) {
      await delay(300);
      count = count + 1;
      console.log(start, "hi");
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        dispatch(setStart(mid));
        dispatch(setEnd(mid));
        dispatch(setOutput(mid));
        const endTime = performance.now();
        let executionTimeWithoutDelay = endTime - startTime;
        let adjustedExecutionTime = executionTimeWithoutDelay - 300 * count;
        console.log(adjustedExecutionTime);
        dispatch(setTime(adjustedExecutionTime));
        dispatch(setCount(count));
        return mid;
      } else if (arr[mid] < target) {
        low = mid + 1;
        dispatch(setStart(low));
      } else {
        high = mid - 1;
        dispatch(setEnd(high));
      }
    }
    dispatch(setOutput(null));
  };

  const handleSearch = () => {
    const targetNumber = parseInt(target, 10);
    binarySearch(inputArray, targetNumber);
  };

  return (
    <div>
      <div>
        <label>Input Sorted</label>
        <textarea onChange={handleInput} />
      </div>
      <div>
        <label>Search Elemnt:</label>
        <input
          type="text"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Input;

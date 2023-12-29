import { useSelector } from "react-redux";

const CustomOutput = () => {
  const start = useSelector((state) => state.binary.start);
  const end = useSelector((state) => state.binary.end);
  const outputArray = useSelector((state) => state.binary.numbers);
  const output = useSelector((state) => state.binary.output);
  const time = useSelector((state) => state.binary.time);
  const count = useSelector((state) => state.binary.count);

  return (
    <div>
      <div>
        {output == 0 || output ? `Found at position ${output}` : "Not Found"}
      </div>
      <div>{time ? `Time taken ${time} millisecond` : ""}</div>
      <div>{count ? ` Iterations ${count}` : ""}</div>
      <div className="container">
        {outputArray?.map((value, index) => (
          <div
            key={index}
            className={`array ${
              index < start || index > end ? "inactive" : ""
            }`}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomOutput;

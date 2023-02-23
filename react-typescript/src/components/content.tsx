import { coursePart } from "../types";
import Part from "./part";

const Content: React.FC<{courseParts: coursePart[]}> = ({ courseParts }) => {
  return (
    <div>
      {courseParts.map((part, i) => (
        <Part key={i} part={part} />
      ))}
    </div>
  );
}
export default Content;
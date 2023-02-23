import { coursePart } from '../types'
interface partProps {
  part: coursePart;
}

const Part: React.FC<{ part: coursePart }> = ({part}) => {
  switch(part.kind) {
    case 'basic':
      return (
        <div>
          <h3>{part.name}</h3>
          <p>{part.description}</p>
          <p>Exercises: {part.exerciseCount}</p>
        </div>
      );
    case 'group':
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Project Exercises {part.groupProjectCount}</p>
          <p>Exercises: {part.exerciseCount}</p>
        </div>
      )
    case 'background':
      return (
        <div>
          <h3>{part.name}</h3>
          <p>{part.description}</p>
          <p>Exercises: {part.exerciseCount}</p>
          <p>Background material: {part.backroundMaterial}</p>
        </div>
      );
    default: 
      return assertNever(part)
  }
}

const assertNever = (value: never): never => {
  throw new Error(
    `unhadled discriminated union memeber: ${JSON.stringify(value)}`
  )
}

export default Part;

interface coursePartBase {
  name: string;
  exerciseCount: number;
}

interface coursePartBasic extends coursePartWithDescription {
  kind: 'basic'
}

interface coursePartGroup extends coursePartBase {
  groupProjectCount: number;
  kind: 'group'
}


interface coursePartBackround extends coursePartWithDescription {
backroundMaterial: string;
kind: "background"
}

interface coursePartWithDescription extends coursePartBase {
  description: string;
}

 export type coursePart = coursePartBasic | coursePartGroup | coursePartBackround;

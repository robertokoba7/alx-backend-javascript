export module rowTypes {
  export type RowId = number;

// Create an interface that contains the given 3 fields:

  export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
  }
}

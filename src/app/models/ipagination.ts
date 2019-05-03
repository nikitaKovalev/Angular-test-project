import { ITask } from './itask';

export interface IPagination {
  count: number;
  next: boolean;
  previous: boolean;
  results: Array<ITask>;
}

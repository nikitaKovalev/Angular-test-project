export interface ITask {
  id: number;
  subject: string;
  description: string;
  created_at: string;
  done: boolean;
  due_date: string;
  due_time: string;
  seen_at: string;
}

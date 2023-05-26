export interface Todo {
  id: number;
  describition: string;
  title: string;
  checked: boolean;
  time: {
    time: string;
    date: string;
  };
}

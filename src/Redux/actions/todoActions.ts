import { Todo } from "../../components/interfaces";
export const AddTodo = (todo: Todo) => (dispatch: any, getState: any) => {
  //with Redux-thunk nested arrow functions
  const { Todo: thisState } = getState();

  dispatch({
    type: "ADD_TODO",
    payload: [todo, ...thisState.todo_array],
  });
};
export const RemoveTodo = (id: number) => (dispatch: any, getState: any) => {
  const { Todo: thisState } = getState();
  
  dispatch({
    type: "REMOVE_TODO",
    payload: thisState.todo_array.filter((item: Todo) => {
      return item.id !== id;
    }),
  });
};
export const EditTodoCheckbox =
  (id: number, checked: boolean) => (dispatch: any, getState: any) => {
    const { Todo: thisState } = getState();

    dispatch({
      type: "EDIT_CHECKBOX",
      payload: thisState.todo_array.map((item: Todo) => {
        if (item.id === id) item.checked = checked;
        return item;
      }),
    });
  };

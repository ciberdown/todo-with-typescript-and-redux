import { getThisTime } from "../../components/accordion";
const initial_value = [
  {
    id: 1,
    title: "do somthing",
    describition:
      "asdfsdf  sadf dsf gdfg j sa dlfjkashdfgkl asklg jhklas dflihaskdljfh k",
    time: getThisTime(),
    checked: false,
  },
];

const TodoReducer = (state = { todo_array: initial_value }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todo_array: action.payload };
    case "REMOVE_TODO":
      return { todo_array: action.payload };
    case "EDIT_CHECKBOX":
      return { todo_array: action.payload };
    default:
      return state;
  }
};
export default TodoReducer;

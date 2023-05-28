import { getThisTime } from "../../components/accordion";
const initial_value = [
  {
    id: 1,
    title: "Cops called for speaking Spanish",
    describition:
      `Story
      My friend, our toddlers and I were shopping at Michael's. We were speaking Spanish. Then 5 cops showed up inside the store and accused us of shoplifting. I gave them my id ...`,
    time: getThisTime(),
    checked: true,
  },  {
    id: 2,
    title: "meet Amin at 3:00 pm",
    describition:
      "",
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

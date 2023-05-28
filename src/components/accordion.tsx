import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
import { Todo } from "./interfaces";
import { useDispatch } from "react-redux";
import { EditTodoCheckbox, RemoveTodo } from "../Redux/actions/todoActions";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import { accordion_styles as styles } from "../theme/styles";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const getThisTime = (): { date: string; time: string } => {
  const myDate = new Date();
  
  const date: string = `${myDate.getFullYear()}/${myDate.getMonth()}/${myDate.getDate()}`;
  const time: string = `${myDate.getHours()}:${myDate.getMinutes()}`;
  return { date: date, time: time };
};

export default function ControlledAccordions() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const handleCheckbox = (e: any, id: number) => {
    const checked: boolean = e.target.checked;
    dispatch(EditTodoCheckbox(id, checked));
  };
  const deleteHandle = (id: number) => {
    dispatch(RemoveTodo(id));
  };
  return (
    <div style={styles.main}>
      {state.Todo.todo_array.map((item: Todo) => (
        <div key={item.id} style={styles.mapDiv}>
          <Accordion
            sx={{
              width: "100%",
              backgroundColor: item.checked
                ? styles.checked_color
                : styles.unChecked_color,
              color: styles.text_color,
            }}
            
            expanded={
              expanded === item.id.toString() && item.describition !== "" //des not empty
            }
            onChange={handleChange(item.id.toString())}
          >
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={styles.date}>{item.time.date}</Typography>
              <Typography sx={styles.title}>{item.title}</Typography>
              {item.checked && (
                <Typography sx={{ mr: "10px" }}>Done!</Typography>
              )}
              {item.describition !== "" ? (
                <ExpandMoreIcon sx={{ width: styles.arrow_icon_width }} />
              ) : (
                <Typography sx={{ mr: styles.arrow_icon_width }}></Typography>
              )}
              <Typography sx={styles.time}>{item.time.time}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={styles.desc}>{item.describition}</Typography>
            </AccordionDetails>
          </Accordion>
          <Box style={styles.flexBox as React.CSSProperties}>
            <DeleteIcon
              onClick={() => deleteHandle(item.id)}
              sx={{ cursor: "pointer" }}
              color="error"
            />
            <Checkbox
              onChange={(e) => handleCheckbox(e, item.id)}
              {...label}
              sx={styles.checkbox}
              defaultChecked={item.checked}
            />
          </Box>
        </div>
      ))}
    </div>
  );
}

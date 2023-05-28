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

const styles = {
  mapDiv: {
    margin: "10px",
    display: "flex",
    alignItems: "start",
  },
  main: { maxWidth: "600px" },
  typography: { width: "25%", flexShrink: 0 },
  typographyTwo: {
    color: "black",
    width: "70%",
    fontSize: "14px",
  },
  typographyThree: {
    width: "5%",
    flexShrink: 0,
    opacity: ".6",
    fontSize: ".8rem",
  },
  divTwo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: { margin: 0, padding: 0 },
  arrow_icon_width: '30px'
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const getThisTime = (): { date: string; time: string } => {
  const myDate = new Date();
  const date: string = `${myDate.getFullYear()}/${myDate.getMonth()}/${myDate.getDay()}`;
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
              minWidth: "600px",
              backgroundColor: item.checked ? "#b3e5fc" : "#e0f7fa",
            }}
            expanded={
              expanded === item.id.toString() &&
              item.describition !== ""//des not empty
            }
            onChange={handleChange(item.id.toString())}
          >
            <AccordionSummary
              
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={styles.typography}>{item.time.date}</Typography>
              <Typography sx={styles.typographyTwo}>{item.title}</Typography>
              {item.checked && <Typography sx={{mr:'10px'}}>Done!</Typography>}
              {item.describition !== '' ? <ExpandMoreIcon sx={{ width:styles.arrow_icon_width}} />:
              <Typography sx={{mr:styles.arrow_icon_width}} ></Typography>}
              <Typography sx={styles.typographyThree}>
                {item.time.time}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.describition}</Typography>
            </AccordionDetails>
          </Accordion>
          <div style={styles.divTwo as React.CSSProperties}>
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
          </div>
        </div>
      ))}
    </div>
  );
}

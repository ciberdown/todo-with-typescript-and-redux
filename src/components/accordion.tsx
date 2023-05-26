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
import { EditTodoCheckbox } from "../Redux/actions/todoActions";
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
  console.log(state);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const handleCheckbox = (e: any, id: number) => {
    const checked: boolean = e.target.checked;
    dispatch(EditTodoCheckbox(id, checked));
  };
  return (
    <div style={{ maxWidth: "600px", fontFamily: "Open Sans" }}>
      {state.Todo.todo_array.map((item: Todo) => (
        <div
          key={item.id}
          style={{
            margin: '10px',
            display: "flex",
            alignItems: "start",
            fontFamily: "Open Sans",
          }}
        >
          <Accordion
          sx={{minWidth:'600px'}}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "25%", flexShrink: 0, fontFamily: "Open Sans" }}
              >
                {item.time.date}
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  width: "70%",
                  fontFamily: "Open Sans",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  width: "15%",
                  flexShrink: 0,
                  opacity: ".6",
                  fontSize: ".8rem",
                  fontFamily: "Open Sans",
                }}
              >
                {item.time.time}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "Open Sans" }}>
                {item.describition}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Checkbox
            onChange={(e) => handleCheckbox(e, item.id)}
            {...label}
            sx={{ marginTop: "5px" }}
          />
          {item.checked === true && <p>done!</p>}
        </div>
      ))}
    </div>
  );
}

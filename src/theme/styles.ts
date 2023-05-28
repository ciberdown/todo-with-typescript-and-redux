
export const todo_width: string = '400px'

export const accordion_styles = {
    main: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(${todo_width}, 1fr)`,
      columnGap: "10px",
    },
    checked_color: "#a7ffeb",
    unChecked_color: "#e0f7fa",
    text_color: 'black',
    desc: { opacity: 0.6 },
    date: { width: "25%", flexShrink: 0, fontSize:'0.8em', opacity:.7 , p:.5},
    title: {
      width: "70%",
      fontSize: "14px",
      fontWeight:'bolder'
    },
    mapDiv: {
      margin: "10px",
      display: "flex",
      alignItems: "start",
      minWidth: todo_width,
    },
  
    time: {
      width: "5%",
      flexShrink: 0,
      opacity: ".6",
      fontSize: ".8rem",
      p: "3px",
    },
    flexBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    checkbox: { margin: 0, padding: 0 },
    arrow_icon_width: "30px",
  };



  export const addtodo_styles = {
    btn: {
      backgroundColor: "#e0f2f1",
      fontWeight: "bolder",
      marginLeft: "10px",
    },
    h2: {
      fontFamily: "Open Sans",
      marginLeft: "auto",
      marginRight: "auto",
    },
    box: {
      width: 500,
      maxWidth: "100%",
    },
    box2: {
      width: 500,
      marginTop: "20px",
      maxWidth: "100%",
    },
  };
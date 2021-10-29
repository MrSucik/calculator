import { Box, createStyles, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      minHeight: "100vh",
      padding: theme.spacing(8),
      background: theme.palette.primary.main,
    },
    paper: {
      margin: "auto",
      width: "clamp(160px, 25%, 300px)",
      padding: theme.spacing(2),
      display: "grid",
      rowGap: theme.spacing(2) + "px",
      gridTemplateRows: "repeat(4, 40px)",
    },
  })
);

const Container = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Paper className={classes.paper}>{children}</Paper>
    </Box>
  );
};

export default Container;

// import logo from './logo.svg';
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core"
import './App.css';
import travblog from "./images/luggage-gbd41dfcff_1280.jpg"
import Blogs from "./components/blogs/blogs";
import Form from "./components/form";
import useStyles from './styles.js'

function App() {
  const classes = useStyles()
  return (
    <Container>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">TravBlog</Typography>
        <img className={classes.image} src={travblog} alt="travblog" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Blogs/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

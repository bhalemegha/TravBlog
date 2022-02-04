// import logo from './logo.svg';
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core"
import './App.css';
import travblog from "./images/travblog.jpg"
import Blogs from "./components/blogs/blogs";
import Form from "./components/form";

function App() {
  return (
    <Container>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">TravBlog</Typography>
          <img src={travblog} alt="travblog" height="60"/>
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

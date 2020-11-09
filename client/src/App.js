import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/42509-Memories.jpg";
import Posts from "./component/Posts/Posts";
import Form from "./component/Form/Form";

function App() {
   return (
      <Container maxWidth="lg">
         <AppBar position="static" color="inherit">
            <Typography varaint="h2" align="center">
               Memories
            </Typography>
            <img src={memories} alt="memories" height="120" />
         </AppBar>
         <Grow in>
            <Container>
               <Grid
                  container
                  justify="space-between"
                  alignItems="stretch"
                  spacing={3}
               >
                  <Grid item xs={12} sm={7}>
                     <Posts />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Form />
                  </Grid>
               </Grid>
            </Container>
         </Grow>
      </Container>
   );
}

export default App;

import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import memories from "./images/42509-Memories.jpg";
import Posts from "./component/Posts/Posts";
import Form from "./component/Form/Form";
import useStyles from "./styles.js";
import { useEffect, useState } from "react";

import { getPosts } from "./actions/posts";

function App() {
   const [currentId, setCurrentId] = useState(null);
   const classes = useStyles();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getPosts());
   }, [dispatch]);

   return (
      <Container maxWidth="lg">
         <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">
               Memories
            </Typography>
            <img
               className={classes.image}
               src={memories}
               alt="memories"
               height="60"
            />
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
                     <Posts setCurrentId={setCurrentId} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Form currentId={currentId} setCurrentId={setCurrentId} />
                  </Grid>
               </Grid>
            </Container>
         </Grow>
      </Container>
   );
}

export default App;

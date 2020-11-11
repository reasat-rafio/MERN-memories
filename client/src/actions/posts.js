import * as api from "../api";

// action Creators
export const getPosts = () => {
   return async (dispatch) => {
      try {
         const { data } = await api.fetchPost();
         dispatch({
            type: "FETCH_ALL",
            payload: data,
         });
      } catch (error) {
         console.log(error.message);
      }
   };
};

export const createPost = (post) => async (dispatch) => {
   try {
      const { data } = await api.createPost(post);
      dispatch({
         type: "CREATE",
         payload: data,
      });
   } catch (error) {
      console.log("====================================");
      console.log(error.message);
      console.log("====================================");
   }
};

export const updatePost = (id, post) => async (dispatch) => {
   try {
      const { data } = await api.updatePost(id, post);
      dispatch({
         type: "UPDATE",
         payload: data,
      });
   } catch (err) {
      console.log(err.message);
   }
};

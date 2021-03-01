import axios from "axios";

export default {
    // Api Methods 
    saveUser: function(postUser) {
        return axios.post("/api/users", postUser);
      }
  };
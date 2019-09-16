import axios from "axios";

export default {
  // search for book
  getNewBooks: function(title) {
    return axios.get("https:/www.googleapis.com/books/v1/volumes?q=" + title);
  },
  // saved books
  getSavedBooks: function() {
    return axios.get("/api/books/");
  },
  deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
      return axios.post("/api/books" + bookData);
  }
};

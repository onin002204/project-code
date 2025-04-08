$(document).ready(function() {
    $.get("https://jsonplaceholder.typicode.com/posts", function(posts) {
      posts.forEach(function(post) {
        $("#post-list").append(`<li>${post.title}</li>`);
      });
    });
  });
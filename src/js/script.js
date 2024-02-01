const inputElement = document.getElementById("postId");
const searchButton = document.getElementById("searchButton");
const postContainer = document.getElementById("postContainer");
const commentsButton = document.getElementById("commentsButton");
const commentsContainer = document.getElementById("commentsContainer");

function fetchPostById(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error. ${response.status}`);
        }
        return response.json();
      })
      .then((post) => resolve(post))
      .catch((error) => reject(error));
  });
}

function fetchCommentsByPostId(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`error. ${response.status}`);
        }
        return response.json();
      })
      .then((comments) => resolve(comments))
      .catch((error) => reject(error));
  });
}

searchButton.addEventListener("click", () => {
  const postId = inputElement.value;

  if (postId >= 1 && postId <= 100) {
    fetchPostById(postId)
      .then((post) => {
        displayPost(post);
        postContainer.style.display = "block";
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  } else {
    alert("Please enter a valid Post ID (1-100).");
  }
});

commentsButton.addEventListener("click", () => {
  const postId = inputElement.value;

  fetchCommentsByPostId(postId)
    .then((comments) => {
      displayComments(comments);
    })
    .catch((error) => {
      console.error("Error fetching comments:", error);
    });
});

function displayPost(post) {
  const postContent = document.getElementById("postContent");
  postContent.innerHTML = `
                <p><strong>Title:</strong> ${post.title}</p>
                <p><strong>Body:</strong> ${post.body}</p>
            `;
}

function displayComments(comments) {
  const commentsContainer = document.getElementById("commentsContainer");
  commentsContainer.innerHTML = "<h3>Comments</h3>";

  comments.forEach((comment) => {
    commentsContainer.innerHTML += `
                    <p><strong>Name:</strong> ${comment.name}</p>
                    <p><strong>Email:</strong> ${comment.email}</p>
                    <p><strong>Body:</strong> ${comment.body}</p>
                    <hr>
                `;
  });
}

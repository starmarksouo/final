let rating = 0;
let comments = [];

function rateProduct(stars) {
  rating = stars;
  updateStars(stars);
}

function updateStars(stars) {
  const starElements = document.getElementsByClassName("star");
  for (let i = 0; i < starElements.length; i++) {
    if (i < stars) {
      starElements[i].innerHTML = "&#9733;"; // 實心星號
    } else {
      starElements[i].innerHTML = "&#9734;"; // 空心星號
    }
  }
}

function submitComment() {
  const commentInput = document.getElementById("comment-input");
  const comment = commentInput.value.trim();
  
  if (comment !== "") {
    const commentObj = {
      rating: rating,
      comment: comment
    };
    
    comments.push(commentObj);
    displayComments();
    
    rating = 0;
    commentInput.value = "";
    updateStars(0);
  }
}

function displayComments() {
  const commentsList = document.getElementById("comments-list");
  commentsList.innerHTML = "";
  
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    
    const li = document.createElement("li");
    li.innerHTML = `<span class="rating">${comment.rating} &#9733;</span> ${comment.comment}`;
    
    commentsList.appendChild(li);
  }
}

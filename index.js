const newPostForm = document.querySelector("#new-post-form")
const postsContainer = document.querySelector("#posts-container")
let postsArray = []

const renderPosts = (arr) => {
  let html = ``

  arr.forEach((post) => {
    html += `
            <div>
                <h3 class="blog-title">${
                  post.title.charAt(0).toUpperCase() + post.title.slice(1)
                }</h3>
                <p class="blog-body">${post.body}</p>
                <hr />
            </div>
            `
  })

  postsContainer.innerHTML += html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    postsArray = data.slice(0, 5)
    renderPosts(postsArray)
  })

newPostForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const newPostFormData = new FormData(newPostForm)
  const postTitle = newPostFormData.get("postTitle")
  const postBody = newPostFormData.get("postBody")
  console.log(newPostFormData)
  console.log(postTitle)
  console.log(postBody)

  const data = {
    title: postTitle,
    body: postBody,
  }

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((res) => res.json())
    .then((data) => {
      renderPosts([data])
    })

  e.target.reset()
})

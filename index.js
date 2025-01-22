fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        const postsArr = data.slice(0, 5)

        let html = ``
        const postsContainer = document.querySelector('#posts-container')

        postsArr.forEach((post) => {
            html += `
                <h3 class="blog-title">${post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h3>
                <p class="blog-body">${post.body}</p>
                <hr />
                `
        })

        postsContainer.innerHTML = html

    })
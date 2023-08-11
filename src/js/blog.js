```javascript
// Fetch blog posts from the server
async function loadBlogPosts() {
    try {
        const response = await fetch('/blog');
        const data = await response.json();

        if (response.ok) {
            displayBlogPosts(data);
        } else {
            console.error(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// Display blog posts on the page
function displayBlogPosts(posts) {
    const blogContainer = document.getElementById('blogPost');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        blogContainer.appendChild(postElement);
    });
}

// Load blog posts when the page loads
window.addEventListener('DOMContentLoaded', loadBlogPosts);
```
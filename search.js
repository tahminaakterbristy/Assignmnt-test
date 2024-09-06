function searchPosts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('postResults');
    resultsContainer.innerHTML = '';

    const filteredPosts = posts.filter(post => post.category.toLowerCase() === searchInput);

    if (filteredPosts.length > 0) {
        filteredPosts.forEach(post => {
            const postCard = `
                <div class="card lg:card-side bg-base-100 shadow-xl mb-6">
                    <figure><img src="${post.image}" alt="${post.title}"></figure>
                    <div class="card-body">
                        <h2 class="card-title">${post.title}</h2>
                        <p>${post.description}</p>
                        <p>Author: ${post.author.name}</p>
                        <p>Comments: ${post.comment_count}, Views: ${post.view_count}</p>
                        <p>Posted: ${post.posted_time} hours ago</p>
                    </div>
                </div>
            `;
            resultsContainer.innerHTML += postCard;
        });
    } else {
        resultsContainer.innerHTML = '<p class="text-center text-gray-500">No posts found for the given category.</p>';
    }
}

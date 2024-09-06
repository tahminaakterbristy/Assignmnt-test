// Example data from the API response
// document.addEventListener('DOMContentLoaded', () => {
const posts = [
        {
            "id": 101,
            "category": "Comedy",
            "image": "https://i.ibb.co/0QRxkd5/pexels-jan-kop-iva-3525908.jpg",
            "isActive": true,
            "title": "10 Kids Unaware of Their Costume",
            "author": {
                "name": "John Doe"
            },
            "description": "It is one thing to subject yourself to a costume mishap",
            "comment_count": 560,
            "view_count": 1568,
            "posted_time": 5
        },
        {
            "id": 102,
            "category": "Comedy",
            "image": "https://i.ibb.co/wYxp7d6/pexels-spencer-selover-428328.jpg",
            "isActive": false,
            "title": "Funny Stand-Up Comedy Specials",
            "author": {
                "name": "Alice Johnson"
            },
            "description": "Hilarious stand-up acts that will leave you in stitches!",
            "comment_count": 320,
            "view_count": 1325,
            "posted_time": 8
        },
        {
            "id": 103,
            "category": "Comedy",
            "image": "https://i.ibb.co/z8zx95w/pexels-davide-de-giovanni-1649675.jpg",
            "isActive": true,
            "title": "Hilarious Sitcom Bloopers Compilation",
            "author": {
                "name": "Bob Smith"
            },
            "description": "Watch as your favorite sitcom characters break character and make you laugh!",
            "comment_count": 450,
            "view_count": 1879,
            "posted_time": 6
        },
        {
            "id": 104,
            "category": "Coding",
            "image": "https://i.ibb.co/pjM6Ybr/pexels-anastasia-shuraeva-9607206.jpg",
            "isActive": true,
            "title": "Introduction to Python: A Beginner's Guide",
            "author": {
                "name": "Emily White"
            },
            "description": "Learn Python programming from scratch and become a coding ninja!",
            "comment_count": 780,
            "view_count": 2650,
            "posted_time": 10
        },
        {
            "id": 105,
            "category": "Coding",
            "image": "https://i.ibb.co/b7GT5nt/pexels-apunto-group-agencia-de-publicidad-7752813.jpg",
            "isActive": false,
            "title": "JavaScript Programming: Advanced Techniques",
            "author": {
                "name": "David Brown"
            },
            "description": "Take your JavaScript skills to the next level with advanced techniques and tips!",
            "comment_count": 620,
            "view_count": 2015,
            "posted_time": 7
        },
        {
            "id": 106,
            "category": "Music",
            "image": "https://i.ibb.co/0QRxkd5/pexels-jan-kop-iva-3525908.jpg",
            "isActive": true,
            "title": "Classic Rock Anthems: Greatest Hits",
            "author": {
                "name": "Michael Johnson"
            },
            "description": "Rock out to the greatest hits of all time with this epic playlist!",
            "comment_count": 890,
            "view_count": 3125,
            "posted_time": 11
        }
    
    
    ];

// Function to create and insert cards
function createPosts(posts) {
    const container = document.getElementById('posts-container');
    const tray = document.getElementById('tray-container');
    let totalItems = 0;

    posts.forEach(item => {
        // Destructure the item
        const { category, image, title, description, view_count, comment_count,isActive } = item;
        const statusColor = isActive === true ? "bg-green-500" : "bg-red-500";
        
    

        // Create card HTML
        const cardHTML = `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img class="w-full h-48 object-cover" src="${image}" alt="${title}">
                <div class="p-4 relative">
                    <!-- Status Indicator -->
                     <div class="absolute top-2 right-2 w-3 h-3 rounded-full ${statusColor}"></div>
                  
                   

                    <div class="flex items-center">
                        <img class="w-12 h-12 rounded-full mr-4 border-2 border-gray-300" src="${image}" alt="${name}">
                        <div>
                           
                            <p class="text-sm text-gray-600">${title}</p>
                            <p class="text-sm text-gray-600">${category}</p>
                            <p class="text-xs text-gray-500">${description}</p>
                        </div>
                    </div>
                    <h3 class="mt-4 text-xl font-bold">${view_count}</h3>
                    <p class="mt-2 text-gray-700">${comment_count}</p>
                     <button className="btn btn-primary">Add to bookmark</button>
                </div>
            </div>
        `;

        // Insert the card into the container
        container.insertAdjacentHTML('beforeend', cardHTML);

        const addedButton = container.lastElementChild.querySelector('button');
        addedButton.addEventListener('click', () => {
            totalItems++;
            tray.insertAdjacentHTML('beforeend', `<div class="p-2 border-b"><strong>${title}</strong>: ${view_count} views</div>`);
            tray.querySelector('.total-items').textContent = `Total Items: ${totalItems}`;
        });
    });
    tray.innerHTML = `<h3 class="total-items font-bold text-lg mb-2">Total Items: 0</h3>`;
}



// Call the function with the data
createPosts(posts);

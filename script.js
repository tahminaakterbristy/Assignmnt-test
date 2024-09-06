// Example data from the API
const data = [
    {
      "cover_image": "https://i.ibb.co/VYGSkLz/pexels-jeshootscom-442576.jpg",
      "profile_image": "https://i.ibb.co/z8zx95w/pexels-davide-de-giovanni-1649675.jpg",
      "title": "Gaming Enthusiast Expert in Play",
      "description": "Leading gaming expert with a wealth of knowledge and passion for all things gaming",
      "author": {
        "name": "John Doe",
        "designation": "ROR Developer",
        "posted_date": "29 January 2024"
      },
      "status": "active" // Added status field
    },
    {
      "cover_image": "https://i.ibb.co/hC2CtK2/pexels-monstera-production-7412067.jpg",
      "profile_image": "https://i.ibb.co/0QRxkd5/pexels-jan-kop-iva-3525908.jpg",
      "title": "Discoverer of Global Treasures",
      "description": " Passionate travel enthusiast sharing captivating destinations and insider tips to inspire unforgettable journeys.",
      "author": {
        "name": "Anthony Mark",
        "posted_date": "29 January 2024"
      },
      "status": "inactive" // Added status field
    },
    {
      "cover_image": "https://i.ibb.co/MRFZT7G/pexels-pixabay-356056.jpg",
      "profile_image": "https://i.ibb.co/wYxp7d6/pexels-spencer-selover-428328.jpg",
      "title": "Innovative Fashion Design Luminary",
      "description": "Innovative fashion designer with a keen eye for detail and a passion for pushing boundaries.",
      "author": {
        "name": "Jimmy Choo",
        "designation": "Fashion Designer"
      },
      "status": "active" // Added status field
    }
  ];
  
  // Function to create and insert cards
  function createCards(data) {
      const container = document.getElementById('cards-container');
  
      data.forEach(item => {
          // Destructure the item
          const { cover_image, profile_image, title, description, author, status } = item;
          const { name, designation = "", posted_date = "" } = author;
  
          // Determine status color
          const statusColor = status === "active" ? "bg-green-500" : "bg-red-500";
  
  
          // Create card HTML
          const cardHTML = `
              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img class="w-full h-48 object-cover" src="${cover_image}" alt="${title}">
                  <div class="p-4 relative">
                      <!-- Status Indicator -->
                     <div class="absolute top-2 right-2 w-3 h-3 rounded-full ${statusColor}"></div>

                      <div class="flex items-center">
                          <img class="w-12 h-12 rounded-full mr-4 border-2 border-gray-300" src="${profile_image}" alt="${name}">
                          <div>
                              <h2 class="text-lg font-semibold">${name}</h2>
                              <p class="text-sm text-gray-600">${designation}</p>
                              <p class="text-xs text-gray-500">${posted_date}</p>
                          </div>
                      </div>
                      <h3 class="mt-4 text-xl font-bold">${title}</h3>
                      <p class="mt-2 text-gray-700">${description}</p>
                  </div>
                 
              </div>
          `;
  
          // Insert the card into the container
          container.insertAdjacentHTML('beforeend', cardHTML);
      });
  }
  
  // Call the function with the data
  createCards(data);
  
// fetch, load and show categories on html

    // create loadCategories
    const loadCategories = () =>{
        
        // fetch the data
        fetch('https://openapi.programming-hero.com/api/peddy/categories')
            .then((res) => res.json())
            .then((data) => displayCategories(data.categories))
            .catch((err) => console.log(err))
  
    }

    const loadImages = () =>{
        // fetch the data
        fetch('https://openapi.programming-hero.com/api/peddy/pets')
            .then((res) => res.json())
            .then((data) => displayImages(data.pets))
            .catch((err) => console.log(err))
    }


    // const cardDemo = {
    //     "petId": 1,
    //     "breed": "Golden Retriever",
    //     "category": "Dog",
    //     "date_of_birth": "2023-01-15",
    //     "price": 1200,
    //     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    //     "gender": "Male",
    //     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    //     "vaccinated_status": "Fully",
    //     "pet_name": "Sunny"
    // }

    const displayImages = (pets) =>{
       const imageContainer = document.getElementById('pets-image') 
       pets.forEach(pets => {
            console.log(pets);
            const card = document.createElement('div');
            card.classList = "card card-compact "
            card.innerHTML = `
            <figure>
                <img
                src="${pets.image}"
                alt="Shoes" />
                class="rounded-xl"
            </figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            `
            imageContainer.append(card);
       });
    }

    // create displayCategories
    const displayCategories = (categories) =>{
        const categoryContainer = document.getElementById('categories');

        categories.forEach((item) => {
            
            // create buttons
            const button = document.createElement('button');
            button.classList = 'btn';
            button.innerText = item.category;
          

            // add button to categoryContainer
            categoryContainer.append(button)

        });
    }

    loadCategories()
    loadImages()

// fetch, load and show categories on html

    // create loadCategories
    const loadCategories = () =>{
        
        // fetch the data
        fetch('https://openapi.programming-hero.com/api/peddy/categories')
            .then((res) => res.json())
            .then((data) => displayCategories(data.categories))
            .catch((err) => console.log(err))

    }

    // create displayCategories
    const displayCategories = (category) =>{
        const categoryContainer = document.getElementById('categories');

        category.forEach((item) => {
            
            // create buttons
            const button = document.createElement('button');
            button.classList = 'btn';
            button.innerText = item.category;

            // add button to categoryContainer
            categoryContainer.append(button)

        });
    }

    loadCategories()
    

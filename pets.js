fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err)) 

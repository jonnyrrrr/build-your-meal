const app_id = '1a9d1a79'
const app_key ='2dbf4425905d61feea0b92f872f13ef7'


export const test = {
    get: async (data: any) => {
        const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&category=${data}`, 
        {
            method : 'GET',
            body: JSON.stringify(data)
            
        })

        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        return await response.json();
    }
}

export async function fetchData(){
    try{
        const category = document.getElementById('category').value.toLowerCase();
        const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=c2310fd8&app_key=ff0083f9fbed1c0b703eb8e0f66ad3b3%09&nutrition-type=logging&category=fast-foods&brand=${category}`,
        {
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        if(!response.ok){
            throw new Error('try again loser')
        }

        const data = await response.json();
        const display = data.hints[2].food.label
        const displayElement = document.getElementById("display")  
        
        displayElement.innerHTML = display
        console.log(display)
        

    }
    catch(error) {
        console.error(error);
    }

}

export async function fetchRecipe(){
    try{
        const category = document.getElementById('category').value.toLowerCase();
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${category}&app_id=02f2cc2c&app_key=%20bd5bd794446a139dca1290d9c5b881d1&random=true&field=label`,
        {
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        if(!response.ok){
            throw new Error('try again')
        }

        const data = await response.json();
        const display = data.hits[2].recipe.label
        const displayElement = document.getElementById("display")
         
        
        displayElement.innerHTML = display
        console.log(display)
        

    }
    catch(error) {
        console.error(error);
    }
}

export async function fetchIng() {
    try{
        const category = document.getElementById('category').value.toLowerCase();
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${category}&app_id=02f2cc2c&app_key=%20bd5bd794446a139dca1290d9c5b881d1&random=false&field=ingredients`,
        {
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        if(!response.ok){
            throw new Error('try again')
        }

        const data = await response.json();
        const ingredients = data.hits[0].recipe.ingredients;
        const ingredients2 = data.hits[1].recipe.ingredients;
        const ingredients3 = data.hits[2].recipe.ingredients;
        const ingredientList = document.getElementById("ingredient-list");
        const ingredientList2 = document.getElementById("ingredient-list2")
        const ingredientList3 = document.getElementById("ingredient-list3")

        ingredientList.innerHTML = "";
        ingredients.forEach(ingredient => {
        const ingredientItem = document.createElement("li");
        ingredientItem.textContent = `${ingredient.food} - ${ingredient.measure}`;
        ingredientList.appendChild(ingredientItem);
        console.log(data)
        });

        ingredientList2.innerHTML = "";
        ingredients2.forEach(ingredient => {
        const ingredientItem = document.createElement("li");
        ingredientItem.textContent = `${ingredient.food} - ${ingredient.measure}`;
        ingredientList2.appendChild(ingredientItem);
        console.log(data)
        });

        ingredientList3.innerHTML = "";
        ingredients3.forEach(ingredient => {
        const ingredientItem = document.createElement("li");
        ingredientItem.textContent = `${ingredient.food} - ${ingredient.measure}`;
        ingredientList3.appendChild(ingredientItem);
        console.log(data)
        });
        

    }
    catch(error) {
        console.error(error);
    }
}

export async function fetchFacts() {
    const search = document.getElementById('search').value.toLowerCase()
    const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=1a9d1a79&app_key=%202dbf4425905d61feea0b92f872f13ef7&nutrition-type=cooking&ingr=${search}`,
    {
        method : 'GET',
        headers : {
            'accept' : 'application/json'
        }
    })

    if (!response.ok) {
        throw new Error('try again')
    }

    const data = await response.json()
    const facts = data.healthLabels[0]
    const facts2 = data.healthLabels[1]
    const facts3 = data.healthLabels[2]
    const facts4 = data.healthLabels[3]
    const facts5 = data.healthLabels[4]
    const facts6 = data.healthLabels[5]
    const facts7 = data.healthLabels[6]
    
    const factsList = document.getElementById('nutrition');
    const factsList2 = document.getElementById('nutrition2');
    const factsList3 = document.getElementById('nutrition3');
    const factsList4 = document.getElementById('nutrition4')
    const factsList5 = document.getElementById('nutrition5')
    const factsList6 = document.getElementById('nutrition6')
    const factsList7 = document.getElementById('nutrition7')

    factsList.innerHTML = facts;
    factsList2.innerHTML = facts2;
    factsList3.innerHTML = facts3;
    factsList4.innerHTML = facts4;
    factsList5.innerHTML = facts5;
    factsList6.innerHTML = facts6;
    factsList7.innerHTML = facts7;
    console.log(data.healthLabels[6])
}
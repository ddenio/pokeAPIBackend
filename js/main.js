document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const pokeStarter = document.querySelector('input').value
    try{
        const response = await fetch(`https://poke-api-backend.vercel.app/api/${pokeStarter}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = `Starter name: ${data.name}`
        document.querySelector('#type').innerText = `Type ${data.type}`
        document.querySelector('#evolve').innerText = `Evolves into: ${data.evolve}`
    }catch(error){
        console.log(error)
    }
}
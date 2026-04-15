let newFun= fetch("https://pokeapi.co/api/v2/pokemon/ditto")

newFun.then((data)=>{
    console.log(data)
})
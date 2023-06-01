import { getHeroeById, getHeroesByOwner } from "./Bases/08-exp-imp";

/*const promesa = new Promise((resolve, reject) => {
    setTimeout(()=> {
        const hero = getHeroeById(2);
        resolve(hero);
        //reject('No se pudo encontrar el heroe');
    }, 2000)
});

promesa.then((heroe)=>{console.log('Heroe', heroe)})
.catch((err)=>{console.warn(err)});*/

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const hero = getHeroeById(id);
            if(hero){
                resolve(hero);
            }
            else{
                reject('No se pudo encontrar el heroe');
            }
        }, 2000)
    });
}
getHeroeByIdAsync(4)
.then(console.log)
.catch(console.error);
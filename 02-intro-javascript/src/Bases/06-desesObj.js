//Desestructuración

const persona = {
    nombre: 'Tony',
    edad: 45,
    key: 'IronMan'
};


//const {edad, nombre, key} = persona;
/*console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.key);
console.log(nombre);
console.log(edad);
console.log(key);*/

const userContext = ({key, nombre, edad, rango = 'Capitan'}) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: key,
        anios: edad,
        latLng: {
            lat: 1254,
            lng: 15483
        }
    }
}

//const avenger = useContext(persona);
const {nombreClave, anios, latLng:{lat, lng}} = userContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
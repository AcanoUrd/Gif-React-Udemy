const activo = false;
/*let mensaje = '';
if(activo){
    mensaje = 'activo';
}
else{
    mensaje = 'inactivo';
}
const mensaje = (activo) ? 'activo' : 'inactivo';*/
const mensaje = activo && 'activo';
console.log(mensaje);
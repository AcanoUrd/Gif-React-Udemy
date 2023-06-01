/*const getImagenPromesa = () =>
    new Promise (resolve =>
        resolve('https://')
    )
getImagenPromesa().then(console.log);*/
const getImage = async() =>{
    try{
        const apiKey = 'vgmh7rwpk0EgkCjY7h6bypMISTbBquxj';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }
    catch(e){
        // manejo delerror
        console.error(e);
    }
}
getImage();
describe('Pruebas en <democomponent/>', () => {  
    test("Esta rueba no falla", () =>{
        //1. inicialización
        const message1 = 'Hola Mundo';
        //2. estimulo
        const message2 = message1.trim();
        //3. observar el comportamiento
        expect(message1).toBe(message2);
    })
})
import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => { 
    
    test('getImagen debe devolver una url de imagen', async () => {
        const resp = await getImagen();
        console.log(resp);
        expect (resp).toBe('No se ha encontrado la imagen')
        }
    );
 })
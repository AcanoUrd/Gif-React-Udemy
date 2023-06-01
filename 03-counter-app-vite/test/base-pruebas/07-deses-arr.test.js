import { string } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Test on 07-desses-arr', () => { 
    test('Debe retornar string y numero', () =>{
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        expect(letters).toEqual(expect.any(String));
    })
 })
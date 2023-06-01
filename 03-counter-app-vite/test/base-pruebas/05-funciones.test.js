import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe retornar un objeto', ()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        console.log(user);
        expect(testUser).toEqual(user)
    });
    test('getUserActivo debe retornar un objeto', ()=>{
        const testName = 'Antonio';
        const user = getUsuarioActivo(testName);
        console.log(user);
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: testName
        })
    });
 })
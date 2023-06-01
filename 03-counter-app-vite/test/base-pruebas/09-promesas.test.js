import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 
    test('getHerobyid debe retornar un héroe por ID', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then( hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        });
    }
);
    test('getHerobyid debe retornar un herror por ID', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
        .then(hero =>{
            expect(hero).toBeFalsy();
            done();
        })
        .catch( error => {
            console.log(error + ' con el id ' + id);
            done();
        });
    }
    );
 })
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    
    test('getHerobyid debe retornar un héroe por ID', () => {
            const id = 1;
            const hero = getHeroeById(id);
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
        }
    );
    test('getHerobyid debe retornar undefine si no existe ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero)
        expect(hero).toBeFalsy();
    });

    test('getHerobyOwner DC', () => {
        const id = 'DC';
        const heroes = getHeroesByOwner(id);
        console.log('getHerobyOwner DC ' + heroes.length);
        expect(heroes.length).toEqual(3);
    });
    test('getHerobyOwner Marvel', () => {
        const id = 'Marvel';
        const heroes = getHeroesByOwner(id);
        console.log('getHerobyOwner Marvel ' + heroes.length);
        expect(heroes.length).toEqual(2);
    });
 })
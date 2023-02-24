import { fireEvent, render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs')
describe('Pruebas en <GifGrid />', ()=>{
    const category = 'Dragon Ball';
    test('Debe de mostrar el loading inicialmente',()=>{
        render(<GifGrid category={category}/>);
        expect(screen.getByText('cargando...'));
        expect(screen.getByText(category));
    });
    test('Debe de mostrar items cuando se cargan las imagenes desde ',()=>{
        const gifs = [{
            id:'abc',
            title: 'Vegetta',
            url: 'google.es'
        },
        {
            id:'123',
            title: 'Goku',
            url: 'gugle.es'
        }]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
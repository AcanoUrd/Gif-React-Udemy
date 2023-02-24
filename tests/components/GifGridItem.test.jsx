import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import {GifGridItem} from "../../src/components/GifGridItem"
describe('Pruebas en <GifGridItem />', ()=>{
    const title = "Vegeta";
    const url = 'https://google.de/';
    test('Debe hacer match con el snapshot',()=>{
        const {container} = render(<GifGridItem tilte={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el ur y alt indicado',()=>{
        render(<GifGridItem tilte={title} url={url}/>);
        //screen.debug();
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    test('Debe de mostrar el titulo en el componente',()=>{
        render(<GifGridItem tilte={title} url={url}/>);
        //screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    });
});
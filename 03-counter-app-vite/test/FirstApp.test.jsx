/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Pruebas en FirstApp', () => { 
    /*test('Debe de hacer match con el snapshot', () => {
        const title = 'Hola soy Goku';
        const {container} = render(<FirstApp title = {title}/>)
        expect(container).toMatchSnapshot();
    });*/
    test('Debe de mostar el titulo en un H1', () => {
        const title = 'Hola soy Goku';
        const {container, getByText, getByTestId} = render(<FirstApp title = {title}/>)
        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title')).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title);
        /*const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);*/
    });
    test('Debe de mostar el subtitulo enviado por props', () => {
        const title = 'Hola soy Goku';
        const subtitle = 'Soy un subtitulo';
        const {getAllByText} = render(<FirstApp title = {title} subTitle={subtitle}/>)
        expect(getAllByText(subtitle).length).toBe(1);
    });
 })
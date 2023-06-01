/** @jest-environment jsdom */
import { CounterApp } from "../src/CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Pruebas en CounterApp', () => { 
    const value = 100;
    test('Debe de hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value = {value}/>)
        expect(container).toMatchSnapshot();
    });
    test('Debe de mostar el valor inicial de 100', () => {
        render(<CounterApp value = {value}/>)
        //expect(screen.getByRole('heading', {level:2}).innerHTML).toContain('100');
        expect(screen.getByText(100)).toBeTruthy();
        //screen.debug();
    });
    test('Debe de incrementar con el +1', () => {
        render(<CounterApp value = {10}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });
    test('Debe de incrementar con el -1', () => {
        render(<CounterApp value = {10}/>);
        fireEvent.click(screen.getByText('-1'));
        //screen.debug();
        expect(screen.getByText('9')).toBeTruthy();
    });
    test('Debe de resetear el contador', () => {
        render(<CounterApp value = {value}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('Reset'));
        //screen.debug();
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText(value)).toBeTruthy();
    });
 })
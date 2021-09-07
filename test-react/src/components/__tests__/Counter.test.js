import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter"


beforeEach(() =>{
    render(<Counter/>)
})

test('Counter is initially 0', () =>{
    const counterEl = screen.getByTestId('counter')
    expect(counterEl).toHaveTextContent(0)
})

test('Increment button works correctly', () =>{
    const counterEl = screen.getByTestId('counter')
    const incrementBtn = screen.getByRole('button', {
        name:/increment/i
    })
    expect(counterEl).toHaveTextContent(0)
    // click on increment button
    userEvent.click(incrementBtn)
    expect(counterEl).toHaveTextContent(1)
})
test('Decrement button works correctly', () =>{
    const counterEl = screen.getByTestId('counter')
    const decrementBtn = screen.getByRole('button', {
        name:/decrement/i
    })
    expect(counterEl).toHaveTextContent(0)
    // click on increment button
    userEvent.click(decrementBtn)
    userEvent.click(decrementBtn)
    expect(counterEl).toHaveTextContent(-2)
})
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserInput from "../UserInput"


beforeEach(() =>{
    render(<UserInput/>)
})

test("Secret Message Is Initially Empty", () =>{
    const inputEl = screen.getByLabelText(/secret/i)

    expect(inputEl).toHaveValue("")
})
test("Input Change", () =>{
    const inputEl = screen.getByLabelText(/secret/i)

    expect(inputEl).toHaveValue("")
    userEvent.type(inputEl, "Deneme")
    expect(inputEl).toHaveValue("Deneme")
})


// Checkbox Test

test("Initially Checkbox is not checked", () =>{
    const checkedboxEl = screen.getByRole('checkbox')
    expect(checkedboxEl).not.toBeChecked()
    
})
test("Checkedbox works correctly", () =>{
    const checkedboxEl = screen.getByRole('checkbox')
    expect(checkedboxEl).not.toBeChecked()
    userEvent.click(checkedboxEl)
    expect(checkedboxEl).toBeChecked()

})
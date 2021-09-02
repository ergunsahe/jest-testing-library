import { screen, render } from "@testing-library/react";
import App from './App'

// test('Header render correctly', () =>{
//     // const {debug, container} = render(<App/>);
//     let customDiv = document.createElement('div')
//     customDiv.className = 'custom'
//     const {debug, container} = render(
        
//     <div className='dd'>
//         deneme
//         <h1>ss</h1>
//     </div>,
//     {
//         container:document.body.appendChild(customDiv),
//     }
//     );
//     // debug()
//     // console.log(container)
//     // console.log(container.firstChild.className)
//     // console.log(container.firstChild.textContent)

//     // expect(container.firstChild).toHaveTextContent('deneme')
//     screen.debug()

// })

test('Header render correctly', () =>{
    render(<App/>)
    const headerEl = screen.getByText(/coding with eyüp/i);
    // console.log(headerEl)
    expect(headerEl).toBeInTheDocument();
    expect(headerEl).toHaveTextContent('Coding With Eyüp');
})

test('Second header render correctly', () =>{
    render(<App/>)
    const yellowEl = screen.getByText(/benim rengim sarı/i)
    expect(yellowEl).toBeInTheDocument();
    expect(yellowEl).toHaveTextContent('Benim rengim sarı');
    expect(yellowEl).toHaveClass('yellow');

})

test('Button test', () =>{
    render(<App/>)
    const buttonEl = screen.getByRole('button')
    expect(buttonEl).toHaveTextContent('Click')
    // expect(buttonEl).toBeDisabled()
})
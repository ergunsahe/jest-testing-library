import { screen, render, cleanup } from "@testing-library/react";
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

//--------------------------------------------------------------

// test('Header render correctly', () =>{
//     render(<App/>)
//     const headerEl = screen.getByText(/coding with eyüp/i);
//     // console.log(headerEl)
//     expect(headerEl).toBeInTheDocument();
//     expect(headerEl).toHaveTextContent('Coding With Eyüp');
// })

// test('Second header render correctly', () =>{
//     render(<App/>)
//     const yellowEl = screen.getByText(/benim rengim sarı/i)
//     expect(yellowEl).toBeInTheDocument();
//     expect(yellowEl).toHaveTextContent('Benim rengim sarı');
//     expect(yellowEl).toHaveClass('yellow');

// })


//--------------------------------------------------------------

// test('Disabled Button test', () =>{
//     render(<App/>)
//     const buttonEl = screen.getByRole('button',{
//         name:'disabled',
//     })
//     // expect(buttonEl).toHaveTextContent('Click')
//     expect(buttonEl).toHaveTextContent('Disabled')
//     expect(buttonEl).toBeDisabled()
// })
// test('Enabled Button test', () =>{
//     render(<App/>)
//     const buttonEl = screen.getByRole('button',{
//         name:'enabled',
//     })
//     // expect(buttonEl).toHaveTextContent('Click')
//     expect(buttonEl).toHaveTextContent('Enabled')
//     expect(buttonEl).not.toBeDisabled()
// })

//--------------------------------------------------------------

// test('Disabled Button test', () =>{
//     render(<App/>)
//     const buttonEl = screen.getByTestId('btnDisabled',{
//         name:'disabled',
//     })
//     // expect(buttonEl).toHaveTextContent('Click')
//     expect(buttonEl).toHaveTextContent('Disabled')
//     expect(buttonEl).toBeDisabled()
// })
// test('Enabled Button test', () =>{
//     render(<App/>)
//     const buttonEl = screen.getByTestId('btnEnabled',{
//         name:'enabled',
//     })
//     // expect(buttonEl).toHaveTextContent('Click')
//     expect(buttonEl).toHaveTextContent('Enabled')
//     expect(buttonEl).not.toBeDisabled()
// })

//--------------------------------------------------------------

// beforeAll(() =>{
//     console.log('Before All')
// })

// beforeEach(() =>{
//     // we can only one time call render app then it work for all test bo
//     console.log('Before Each')
//     render(<App/>)
// })

// afterAll(() =>{
//     console.log('After All')
// })

// afterEach(() =>{
//     console.log('After Each')
//     // it's not necessary to call cleanup here anymore.it works automaticly
//     // cleanup()
// })

// test('Disabled Button test', () =>{
    
//     const buttonEl = screen.getByTestId('btnDisabled',{
//         name:'disabled',
//     })
//     expect(buttonEl).toHaveTextContent('Disabled')
//     expect(buttonEl).toBeDisabled()
// })
// test('Enabled Button test', () =>{
    
//     const buttonEl = screen.getByTestId('btnEnabled',{
//         name:'enabled',
//     })
//     expect(buttonEl).toHaveTextContent('Enabled')
//     expect(buttonEl).not.toBeDisabled()
// })
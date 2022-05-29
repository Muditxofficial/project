import { fireEvent, render, screen } from "@testing-library/react"
import HomePage from "../features/home/HomePage"
import Success from "../features/payment/Success";



test("homepage",() => {
 render(<HomePage/>);
 const linkEle = screen.getByText("Get started");
 expect(linkEle).toBeInTheDocument();
})

it("testing input",() => {
  const utils = render(<Success/>);
  const input = utils.getByTestId('input');
  fireEvent.change(input,{target:{value:'hello'}});
  expect(input.value).toBe('hello'); 
})

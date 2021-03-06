import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import CartItem from './CartItem'

describe("CartItem", () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<CartItem />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	it ('Should render with correct info on the individual properties', () => {
		const component = TestRenderer.create(<CartItem />);
		expect(component.toJSON()).toMatchSnapshot();
	});
});

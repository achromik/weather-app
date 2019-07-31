import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { ErrorBox } from '../ErrorBox';

const mockMessage = 'City not found';

describe('ErrorBox component', () => {
    it('renders', () => {
        const wrapper = shallow(<ErrorBox message={mockMessage} />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders passed message', () => {
        const wrapper = shallow(<ErrorBox message={mockMessage} />);
        expect(wrapper.find('Alert').props().message).toBe('City not found');
    });

    it('renders as closable alert', () => {
        const wrapper = shallow(<ErrorBox message={mockMessage} />);
        expect(wrapper.find('Alert').props().closable).toBe(true);
    });
});

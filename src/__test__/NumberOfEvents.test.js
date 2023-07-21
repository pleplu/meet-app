import NumberOfEvents from "../components/NumberOfEvents";
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
      NumberOfEventsComponent = render(<NumberOfEvents />);
    });
    
    test('renders text input', () => {
      const optionsTextbox = NumberOfEventsComponent.queryByRole('textbox');
      expect(optionsTextbox).toBeInTheDocument();
    });

    test('renders text input value', () => {
        const optionsTextbox = NumberOfEventsComponent.queryByRole('textbox');
        expect(optionsTextbox).toHaveValue('32');
      });

    test('renders text input value after user input', async () => {
        const user = userEvent.setup();
        NumberOfEventsComponent.rerender(<NumberOfEvents />);

        const optionsTextbox = NumberOfEventsComponent.queryByRole('textbox');
        expect(optionsTextbox).toHaveValue('32');

        await user.type(optionsTextbox, '{backspace}{backspace}10');

        expect(optionsTextbox).toHaveValue('10');
    });
});
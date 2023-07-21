import { render } from '@testing-library/react';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event />);
    });

    test('renders event created', () => {
        expect(EventComponent.queryByText("created")).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText("location")).toBeInTheDocument();
    });

    test('renders event name', () => {
        expect(EventComponent.queryByText("name")).toBeInTheDocument();
    });

    test('renders show details button', () => {
        expect(EventComponent.queryByRole("button")).toBeInTheDocument();
    });

    test('show details is hidden by default', () => {
        expect(EventComponent.queryByText("Hide Details")).not.toBeInTheDocument();
    });

    test('shows/hides details button', async () => {
        const user = userEvent.setup();
        EventComponent.rerender(<Event />);
    
        const showDetailsButton = EventComponent.queryByRole('button');
        await user.click(showDetailsButton);
        expect(EventComponent.queryByText("Hide Details")).toBeInTheDocument();
    
        await user.click(showDetailsButton);
        expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
      });
});
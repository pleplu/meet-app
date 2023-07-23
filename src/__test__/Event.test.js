import { render } from '@testing-library/react';
import Event from '../Event';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
    let EventComponent;
    let allEvents;
    beforeEach(async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]}/>);
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event name', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
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
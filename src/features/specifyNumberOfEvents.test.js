import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('By default the number of events should be 32.', ({ given, when, then }) => {
        given('user hasn’t changed the NOE', () => {

        });

        let AppComponent
        when('the user opens the app', () => {
            AppComponent = render(<App />);
        });

        then('the user should see a list of thirty-two upcoming events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            
            await waitFor(() => {
                const EventsDOM = within(EventListDOM).queryAllByRole('listitem');
                expect(EventsDOM.length).toBe(32);
            });
        });
    });

    test('If the user changes the NOE number to 10, that number of events will be displayed.', ({ given, when, then }) => {
        let AppComponent
        given('the main page is open', () => {
            AppComponent = render(<App />);
        });

        when('user changes the NOE to ten', async () => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const NOEInput = within(NumberOfEventsDOM).queryByRole('textbox');
            await user.type(NOEInput, "{backspace}{backspace}10");
        });

        then('the user should recieve a list of ten events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            
            await waitFor(() => {
                const EventsDOM = within(EventListDOM).queryAllByRole('listitem');
                expect(EventsDOM.length).toBe(10);
            });
        });
    });
});
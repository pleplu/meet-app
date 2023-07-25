import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An events details are hidden by default.', ({ given, when, then }) => {
        given('the user hasnt clicked the show details button', () => {

        });

        let AppComponent
        when('the user opens the app', () => {
            AppComponent = render(<App />);
        });
        
        then('an events description will be hidden by default', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const HideDetails = within(EventListDOM).queryByText('Hide Details');
            expect(HideDetails).toBe(null)
        });
    });

    test('The user clicks the show detials button', ({ given, when, then }) => {
        let AppComponent
        given('the main page is open', () => {
            AppComponent = render(<App />);
        });

        when('the user clicks the show details button', async () => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const ShowDetails = within(EventListDOM).queryAllByRole('button');
            user.click(ShowDetails);
        });

        then('the events details will be displayed', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const ShowDetails = within(EventListDOM).queryByText('Show Details');
            expect(ShowDetails).toBe(null)
        });
    });

    test('The user can hide an events details', ({ given, when, then }) => {
        let AppComponent
        given('the user clicks the show details button after opening the app', () => {
            AppComponent = render(<App />)
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const ShowDetails = within(EventListDOM).queryAllByRole('button');
            user.click(ShowDetails);
        });

        when('the user clicks the hide details button', () => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const HideDetails = within(EventListDOM).queryAllByRole('button');
            user.click(HideDetails);
        });

        then('the events details will be hidden', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const HideDetails = within(EventListDOM).queryByText('Hide Details');
            expect(HideDetails).toBe(null)
        });
    });
});
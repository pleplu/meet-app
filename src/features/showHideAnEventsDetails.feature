Feature: Show/hide an events details

    Scenario: An events details are hidden by default.
        Given the user hasnt clicked the show details button
        When the user opens the app
        Then an events description will be hidden by default

    Scenario: The user clicks the show detials button
        Given the main page is open
        When the user clicks the show details button
        Then the events details will be displayed

    Scenario: The user can hide an events details 
        Given the user clicks the show details button after opening the app 
        When the user clicks the hide details button
        Then the events details will be hidden
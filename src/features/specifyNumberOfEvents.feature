Feature: Specify a specific number of events to display

 Scenario: By default the number of events should be 32.
  Given user hasn’t changed the NOE
  When the user opens the app
  Then the user should see a list of thirty-two upcoming events

 Scenario: If the user changes the NOE number to 10, that number of events will be displayed.
  Given the main page is open
  When user changes the NOE to ten
  Then the user should recieve a list of ten events
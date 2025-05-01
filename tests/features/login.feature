Feature: Login and navigation

  Scenario: Successful login and admin page access
    Given I navigate to the login page
    When I log in as a valid user
    And I open the admin menu
    Then I should see the list of admin records


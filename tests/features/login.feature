Feature: Login and navigation

  Scenario: Successful login and admin page access
    Given I am on the login page
    When I log in with valid credentials
    And I navigate to the admin menu
    Then I should see "Records Found"


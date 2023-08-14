Feature: Ecommerce Website Testing

    Application Testing

    @Shopping
    Scenario: Ecommerce product delivery
    Given I open Shop page
    When I add items to cart
    | productName               |
    | Blackberry                |
    | Nokia Edge                |

    Then Validate the total prices
    Then Select the country, submit and verify success message.
    | successMessage | SearchDeliveryLocation   |
    | Success        | Germany                  |

    @Home
    Scenario: Filling the form
    Given I open ecommerce page
    When I fill the form details
    | name    | email           | gender   | password       | DateofBirth  |
    | Sarah   | abc@gmail.com   | Female   |  ABC123456789  | 1993-07-26   |
    Then Validate the form behaviour and binding value to be equal to "Sarah"
    Then Submit it and verify the success message
    | successMessage |
    | Success        |

/// <reference types="cypress" />

describe('Randomly Visit Two Websites and Write City Names', () => {
  it('Visits two websites randomly, writes city names, and selects adults', () => {
    const websites = [
      'https://www.almosafer.com/ar',
      'https://www.almosafer.com/en',
    ];

    const randomIndex = Math.floor(Math.random() * websites.length);
    const aracountries = ['Dubai', 'Jeddah', 'Riyadh'];
    const rancountries = Math.floor(Math.random() * aracountries.length);
    const arabicCityNames = ['دبي', 'جدة'];
    const randomArabicIndex = Math.floor(Math.random() * arabicCityNames.length);


    cy.visit(websites[randomIndex])
      .then(() => {

        cy.get('.cta__saudi').click();

        cy.get('#uncontrolled-tab-example-tab-hotels').click();

        cy.get('[data-testid="Header__LanguageSwitch"]').invoke('text').then((language) => {
          if (language.includes('English')) {

            cy.get('[data-testid="AutoCompleteInput"]').type(arabicCityNames[randomArabicIndex]);
            cy.get('[data-testid="AutoCompleteResultItem0"]').click();

            
            cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();


          } else if (language.includes('العربية')) {

            cy.get('[data-testid="AutoCompleteInput"]').type(aracountries[rancountries]);
            cy.get('[data-testid="AutoCompleteResultItem0"]').click();

            cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').click();
          }
           const options = ["1 room, 2 adults", "1 room, 1 adult"];

            const randomIndex = Math.floor(Math.random() * options.length);

            cy.get('[data-testid="HotelSearchBox__ReservationSelect_Option"]').eq(randomIndex).click();

            
            cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();
            
         
        });

       });
        });
      });

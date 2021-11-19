describe('Searh element',()=>{
    beforeEach(function () {
        cy.visit('/');
    })
    
    it('Search for the word apple and enter to the first link',()=>{
            cy.search('apple{enter}');
            cy.lnk();
            
            cy.get('.headline').contains("iPhone 13 Pro");
            const apple = "https://www.apple.com/la/";
            cy.url().should('eq',apple);
    })

    it('Select first word in the list of search and enter to de first link',()=>{
        cy.search('appl');
        cy.get('.G43f7e').contains('Apple').click();
        cy.lnk();
    })
})
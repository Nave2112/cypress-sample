// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress"/>
///require('@4tw/cypress-drag-drop')  

Cypress.Commands.add('Performlogin', (username, password) => { 
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
 })
Cypress.Commands.add('CartItem',(inventory_item) =>{
    cy.get('.inventory_item_name').contains(inventory_item).click()
    cy.get('button[class="btn_primary btn_inventory"]').click()

})
 Cypress.Commands.add('DataName', (firstName,lastName,postalCode)=>{
    cy.get('[data-test="firstName"]').type('Nave')
    cy.get('[data-test="lastName"]').type('007')
    cy.get('[data-test="postalCode"]').type('46123')
    cy.get('.btn_primary.cart_button').click()

 })

 Cypress.Commands.add('cart',(label)=>{
     cy.get('a').contains(label).click()})

// Cypress.Commands.add('csvtitle',(label)=>{
//     //     cy.get('a').contains(label).click()
// cy.get('label[for]').contains(labels).click() })

Cypress.Commands.add('csvtitle', (label) => {
    cy.get('label').contains(label).click();
  });
  
 

 Cypress.Commands.add('addingProductToCart', (product) => {
 cy.get('.inventory_item').each(($products)=>{
    if($products.text().includes(product)){
        cy.wrap($products).find('button').click()
    }
    })   })    
/*
    Cypress.Commands.add('evaluateprice and assert', () => {
    let sum=0
    cy.get('.inventory_item_price').each(($priceforeachitem)=>{
        const modifyPrices=$priceforeachitem.text();
        const splitPrices=modifyPrices.split('$')
        const makeItUnique=splitPrices[1].trim()
        sum=Number(sum)+Number(makeItUnique)
    }).then(()=>{
        cy.log(sum)})
    cy.get('.summary_subtotal_label').then((sub)=>{
        const modifysub = sub.text() // it write as $55.99 as string ("$55.9")
        const splitsub =modifysub.split('$') // it split $ from val (55.9) now ['', 55.99]
        const makeItUnique = splitsub[1].trim()// now trim before any spaces or after from index val 1
        const subtotal = Number(makeItUnique)
        expect(subtotal).to.eq(sum)
    })  })

 import 'cypress-file-upload';

    const XLSX = require('xlsx');

Cypress.Commands.add('readExcelFile', (filePath) => {
  cy.readExcelFile(filePath, 'binary').then((fileContent) => {
    const workbook = XLSX.read(fileContent, { type: 'binary' } );
    const sheetName = workbook.SheetNames[0]; // Read the first sheet
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Convert to JSON
  });
});


//custom commads for clicking on links using label


Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click();
})

//over write contains()
Cypress.Commands.overwrite('contains', (originalFn, subject,filter, text, options={}) => {
//determine thefilter argument was passed
if (typeof text ==='object'){
    options=text
    text = filter
    filter=undefined
}
  options.matchcase =false
  return originalFn(subject, filter, text, options)
})*/

//custom commads for clicking on links using label


Cypress.Commands.add('clickLink',(label)=>{
  cy.get('a').contains(label).click();})


// This command grabs all label elements and returns their text
Cypress.Commands.add('grabAllLabels', () => {
    const labels = [];
    
    cy.get('label').each(($label) => {
      const labelText = $label.text().trim();
           if (labelText) {
        labels.push(labelText);
      }
    }).then(() => {
      // Return the array of labels
      cy.wrap(labels).as('formLabels');
    });
  });
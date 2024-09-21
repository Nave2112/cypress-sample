describe('sauce lab task',()=>{
    let data;
    before(()=>{
        cy.visit('https://www.saucedemo.com/v1/').then((datas)=>{
            data=datas
        })
    })
it('Perform expected tasks',()=>{
    
    cy.Performlogin(data.username,data.password)
    cy.wait(1000)
    //cy.get('select').select('lohi')
   /* data.product.forEach((eachproducts)=>{
        cy.addingProductTocart(eachproducts )
    })
    cy.get('[href="./cart.html"]').click()
        cy.contains('CHECKOUT').click()
        cy.get('[data-test="firstName"]').type('Nave')
        cy.get('[data-test="lastName"]').type('007')
        cy.get('[data-test="postalCode"]').type('46123')
        cy.get('.btn_primary.cart_button').click()
        cy.evaluatePricesandAssert()*/
})

})
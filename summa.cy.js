describe('Check online cart',()=>{
    beforeEach('login',()=>{
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').type('standard_user').click()
        cy.get('#password').type('secret_sauce').click()
        cy.get('#login-button').click()
    }) 
//cy.get('select.product_sort_container')
    it('verify sauce demo swag shopping',()=>{
        cy.wait(1700)
        cy.get('select').select('lohi')
        cy.wait(3700)
        cy.get('.inventory_item').each(($products)=>{
            if($products.text().includes('Bike Light')){
                cy.wrap($products).find('button').click()
            }
            if($products.text().includes('Backpack')){
                cy.wrap($products).find('button').click()
            }
            if($products.text().includes('Bolt T-Shirt')){
                cy.wrap($products).find('button').click()
            }
        })
        cy.title().should('contain','Swag Labs')
        cy.get('[href="./cart.html"]').click()
        cy.contains('CHECKOUT').click()
        cy.get('[data-test="firstName"]').type('Nave')
        cy.get('[data-test="lastName"]').type('007')
        cy.get('[data-test="postalCode"]').type('46123')
        cy.get('.btn_primary.cart_button').click()
        let sum=0
        cy.get('.inventory_item_price').each(($priceforeachitem)=>{
            //$7.99, $9.99,$15.99
            const modifyPrices=$priceforeachitem.text();
            // const modifyPrices = $7.99 1st Iteration
            // const modifyPrices = $9.99 1st Iteration
            // const modifyPrices = $15.99 1st Iteration
            const splitPrices=modifyPrices.split('$')
            //const splitPrices =['',7.99] 1st iteration
            //const splitPrices =['',9.99] 1st iteration
            //const splitPrices =['',15.99] 1st iteration
            const makeItUnique=splitPrices[1].trim()
            //constmakeItUnique = '7.99'.trim() remove any leading or trailing white spaces
            //constmakeItUnique = '9.99'.trim() remove any leading or trailing white spaces
            //constmakeItUnique = '15.99'.trim() remove any leading or trailing white spaces

            sum=Number(sum)+Number(makeItUnique)
            // sum=0+9.99 /sum9.99 
            // sum=9.99 +15.99 /sum 25.98
            // sum=25.98 +29.99 /sum 55.97

        
        }).then(()=>{
            cy.log(sum)
        cy.get('.summary_subtotal_label').then((sub)=>{
            const modifysub = sub.text() // it write as $55.99 as string ("$55.9")
            const splitsub =modifysub.split('$') // it split $ from val (55.9) now ['', 55.99]
            const makeItUnique = splitsub[1].trim()// now trim before any spaces or after from index val 1
            const subtotal = Number(makeItUnique)
            expect(subtotal).to.eq(sum)
        })    
        })






        //cy.get('.btn_primary.btn_inventory').click()
       // cy.get("a[id='item_1_img_link'] img[class='inventory_item_img']").click()
        //cy.get('.btn_primary.btn_inventory').click()
        
        
        
    })
    it.only('should login, add three products to the cart, and verify the total amount', () => {
        // Login
       
        // Add three products to the cart
        cy.get('.inventory_item').eq(0).find('.btn_inventory').click(); // Add first product
        cy.get('.inventory_item').eq(1).find('.btn_inventory').click(); // Add second product
        cy.get('.inventory_item').eq(2).find('.btn_inventory').click(); // Add third product
    
        // Navigate to the cart
        cy.get('.shopping_cart_link').click();
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('Nave')
        cy.get('[data-test="lastName"]').type('007')
        cy.get('[data-test="postalCode"]').type('46123')
        cy.get('.btn_primary.cart_button').click()
        
    
        // Verify the total amount
        cy.get('.summary_subtotal_label').invoke('text').then((text) => {
          const totalAmountText = text.split('$'); // Remove currency symbols and commas
          const totalamounttrim = totalAmountText[1].trim()// rmove any spaces or val before /after index val 1
          const totalAmount = Number(totalamounttrim);// verify total isequal
          expect(totalAmount).to.equal(55.97); // Compare with the expected total amount
        });
      });
})  
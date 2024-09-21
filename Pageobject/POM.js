class login 
{
    setusername(username){
        cy.get('#user-name').type(username)
    }
    setpassword(password){
        cy.get('#password').type(password)
    }
    setlogin (login){
        cy.get('.btn_action').click()
    }
    
    
    addItemsToCart(items) {
        items.forEach((item) => {
            cy.get('.inventory_item').contains(item).parents('.inventory_item').find('button').click() // Find the item and click to add it to cart
        })
    }
    setcartitem(cartitem){
        cy.get("path[fill='currentColor']").click()
    }
    setcheckout(checkout){
        cy.get('a[class="btn_action checkout_button"]').click()
    }
    setfirstname(firstname){
        cy.get('#first-name').type(firstname)
    }
    setlastname(lastname){
        cy.get('#last-name').type(lastname)
    }
    setpostalcode(postalcode){
        cy.get('#postal-code').type(postalcode)
    }
    setcontinue(continueitem){
        cy.get('input[class="btn_primary cart_button"]').click()
    }
}
export default login ;
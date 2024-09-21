import login from "../Pageobject/POM.js"
//https://chatgpt.com/share/6c71a3c3-2035-453c-ad73-dfe3111b01ec
describe('pom',()=>{
    it ('login using pom',()=>{
        cy.fixture('sausedemo').then((data)=>{
            cy.visit("https://www.saucedemo.com/v1/")
            let ln= new login
            ln.setusername(data.username)
            ln.setpassword(data.password)
            ln.setlogin(data.login)
            // Use the POM method to add items to cart
            const itemsToCart = ['Sauce Labs Backpack', 'Sauce Labs Bike Light','Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket']
            ln.addItemsToCart(itemsToCart) // Use POM method to add items
            ln.setcartitem(data.cartitem)
            ln.setcheckout(data.checkout)
            //add details for payments
            ln.setfirstname(data.firstname)
            ln.setlastname(data.lastname)
            ln.setpostalcode(data.postalcode)
            //now continue to checkout
            ln.setcontinue(data.continueitem)
        })
    })
})
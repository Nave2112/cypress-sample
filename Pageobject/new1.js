class login{
    setfirstname(firstname){
        cy.get('#first_name-22').type(firstname)
    }
    setlastname(lastname){
        cy.get('#last_name-22').type(lastname,({force:true}))
    }
    setgender(gender){
      // cy.get('input[value="Female"]').check({force: true}) // input[value="Female"  
      cy.get('input[value="Male"]').check(({force:true})).should('be.checked')
    }
    setdob(dob){
        cy.get('#birth_date-22').click()
        cy.get('.picker__select--year').select('1994')
        
        for(let i=0; i<11; i++){
            cy.get('.picker__nav--next').click()}
       cy.get('.picker__day').contains('5').click()   
          



        // or use this 
       // cy.get('picker__day').then((data)=>{
       //     cy.wrap(data).contains('12')
     //   })
        
    }
}
export default login;
class login{
    setfirstname(firstname){
       cy.get('#first_name-22').type(firstname)
    }
    
    setfirstnameoz(firstnameoz){
        cy.get('#first_name-22').type(firstnameoz)//cy.get('#first_name-22').type(firstnameoz)
    }
    
    setlastname(lastname){
        cy.get('#last_name-22').type(lastname)//cy.get('#last_name-22').type(lastname)
    }
    setgender(gender){
        cy.get("input[value='Male']").check({force: true})// cy.get("input[value='Male']").check({force: true})
        
    }
    setusername(username){
        cy.get('#user_login-22').type(username,({force: true}))//cy.get('#user_login-22').type(username,({force: true}))
    }
    setpassword(password){
        cy.get('#user_password-22').type(password)// cy.get('#user_password-22').type(password)
    }
    setconfirmpassword(confirmpassword){
        cy.get('#confirm_user_password-22').type(confirmpassword)//cy.get('#confirm_user_password-22').type(confirmpassword)
    }
    setemail(email){
        cy.get('#user_email-22').type(email)//cy.get('#user_email-22').type(email)
    }
    setphnumber(phnumber){
        cy.get('#mobile_number-22').type(phnumber)//cy.get('#mobile_number-22').type(phnumber)
    }
    //setdob(date){
       // cy.get('[name="birth-date"]').click()
       // cy.get('.picker__box').click()//value="1996/11/12"
       // cy.get('picker__select--year').select(1996)
       // cy.get('picker__month').select('November')
       // cy.get('.picker__day ').select('12')
       //cy.get('input[name="dob"]').type(dob)
   // }

   setdob(dob) { // Replace with the actual selector of the date picker

    // Select the year, month, and day using the UI elements
    cy.get('#birth_date-22').click()//to select table 
    cy.get('.picker__select--year').select('1996');//cy.get('.picker__select--year').select('1996');
    
  // Select the month by clicking on the month navigation (next/previous buttons or clickable month)
  // Assuming the month picker allows you to navigate months using buttons
 // cy.get('.picker__nav--next').click(); // Example: clicking next to navigate to November
  //cy.get('.picker__month').contains('November').click({ multiple: true })
  //cy.get('.picker__nav--next').click({ multiple: true })  // Click on the month directly
  /*const selectMonth = () => {
    cy.get('.picker__month').then(($month) => {
      if ($month.text().includes('November')) {
        // Click next button until we reach November
        cy.get('.picker__nav--next').click();
        // Recursively call selectMonth until November is found
        selectMonth();
      }
    });
  };*/
  for (let i = 0; i < 10; i++) {
    cy.get('.picker__nav--next').click();
  }

  /// Select the day by clicking on the correct day  in Four ways see below
 /* 1-->cy.get('.picker__day[data-pick]').each(($el) => {
    if ($el.attr('aria-label').includes('12')) {
      cy.wrap($el).click();}})*/
      // 2nd method
     cy.get('.picker__day--infocus[aria-label*="12"]').click() 
 // 3-->cy.get('.picker__day').contins('12').click();  // Example: click on the 12th day
 /* 4-->cy.get('.picker__day').contains('12').then((data)=>{
    cy.wrap(data).click()
 })*/
}
    setterms(terms){
        cy.get('.um-field-checkbox-state').click()

    }
    setregister(register){
        cy.get('#um-submit-btn').click()
    }
    settitle(title){
        cy.get('.entry-title').should('have.text','Naveen raj')
        }
}
export default login;
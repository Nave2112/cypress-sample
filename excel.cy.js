// cypress/integration/sample_spec.js

describe('Login Tests', () => {
  it('should login with valid user', function() {
      cy.readExcelFile('C:/Users/raju/Desktop/Javascript Program/fixtures/users.xlsx').then((data) => {
        this.users = data.slice(1).map(row => ({
          username: row[0],
          password: row[1]
        }));
      });
    
  /*
    
      const user = this.users[0]; // Assuming you want to use the first user
  
      cy.visit('https://www.saucedemo.com/v1/');
  
      cy.get('input[name="username"]').type(user.username);
      cy.get('input[name="password"]').type(user.password);
      cy.get('button[type="submit"]').click();
  
      // Add your assertions here*/
    });
  });
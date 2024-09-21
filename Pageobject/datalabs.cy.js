
import { title } from "process"
import login  from "../Pageobject/datalabs"
describe('validate the Register page',()=>{
  Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })


  beforeEach(function() {
      cy.visit('http://V7datalabs.in/live');
   //   cy.fixture('datalabs',(data)=>{
        this.startTime = new Date().getTime();

      })
       
   // });
      afterEach(function() {

          const endTime = new Date().getTime();
          const timeTakenMs = endTime - this.startTime; 
          const timeTakenS = (timeTakenMs / 1000).toFixed(2) + 'sec'; // Convert to seconds and format
      
      
          // cy.task('recordTestResult', {
          //   testName: this.currentTest.title,
          //   status: this.currentTest.state,
          //   timeTaken: timeTakenS
          // });

          cy.task('recordTestResult',{
            Testname:cy.csvtitle(['First Name','Last Name','Gender','Birth Date',
              'Username','Password','Confirm Password','Email Address','Mobile Number']),
            status: this.currentTest.state,
            timeTaken:timeTakenS

          })
        });

        it.only('validate page',()=>{
          cy.fixture('datalabs',(data)=>{
    
            const  ln = new login
                    ln.setfirstname(data.firstname)
                    ln.setlastname(data.lastname)
                    ln.setgender(data.gender)
                    ln.setdob(data.dob)
                    ln.setusername(data.username)
                    ln.setpassword(data.password)
                    ln.setconfirmpassword(data.confirmpassword)
                    ln.setemail(data.email)
                    ln.setphnumber(data.phnumber)
                    ln.setterms(data.terms)
                    ln.setregister(data.register)
                    //ln.settitle(data.title)
          })
        })

    // const endTime = new Date().getTime();
    // const timeTakenMs = endTime - this.startTime;
    // const timeTakenS = (timeTakenMs/1000).toFixed(1) +'sec'

    // cy.task('recordTestResult',{
    //   testName: this.currentTest.title,
    //   status: this.currentTest.state,
      // timeTaken: timeTakenS

      it.skip('validate login credential indatalabs -Negative',()=>{ 
        cy.visit('https://v7datalabs.in/live/')
      //  cy.fixture('datalabs').then((data)=>{

            const  ln = new login
            const terms = false;// Assuming it's a checkbox or toggle, set it to true/false
            const register = 'Register';  // Define a valid value for register if necessary
            ln.setfirstnameoz('dubakoor')
            ln.setlastname("raj")
            ln.setgender('Male')
            ln.setdob('12/November/1996')
            ln.setusername('Clevertrex')
            ln.setpassword('Notrauma_001')
            ln.setconfirmpassword('Notrauma_00')
            ln.setemail('clevertrex@gmail.com')
            ln.setphnumber('9988776655')
            ln.setterms(terms)
            ln.setregister(register)
            //ln.settitle(data.title)

        

//})


 
    
})
    
  });

 // after(() => {
   // const csv = testResults.map(result => {
     // return `${result.title},${result.status},${result.duration}`;
  //  }).join('\n');
    
   // console.log(csv);  // You can output or save CSV here
  //});

  //  expect(true).to.equal(true);
              //  cy.task('recordTestResult',{
              //   testName:this.currentTest.title,
              //   status:timingSafeEqual.currentTest.state,
              //   timeTaken:timeTakenS
              //  })
    
                
    
            

    

    
     
        
    

    
//--spec cypress\e2e\Pageobject\datalabs.cy.js


    
    
   

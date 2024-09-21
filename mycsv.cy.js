describe("handling web tables",()=>{
  beforeEach('login',()=>{

        cy.visit('https://demo.opencart.com/admin/index.php',{failOnStatusCode: false})
        // cy.get('#input-username').type('demo')
        // cy.get('#input-password').type('demo')
        // cy.get('button[class="btn btn-primary"]').click()
        // // cusomers menu
        // cy.get('#button-menu').click()
        // cy.get('#menu-customer>a').click()
        // //customer submenu.
        // cy.get('#menu-customer>ul>li:first-child').click()

    
  })
    it.only('check numbers row&column',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length',10)
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','6')
    })

//     it.skip('check specific rows',()=>{
//         cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(4)>td:nth-child(3)')
//         cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(4)>td:nth-child(3)').contains('fe1@gmail.com')
//     })

//     it.skip('check all row&columns in first page',()=>{
//         cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(($row, index, $rows)=>{
//         cy.wrap($row).within(()=>{
//             cy.get('td').each(($col, index, $cols)=>{
//                 cy.log($col.text());
//             })
//         })
//         })
 })

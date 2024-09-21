// import login  from "../Pageobject/new1.js"
// describe('check login',()=>{
//     before(()=>{
//         cy.visit('https://sprodata.in/')
//     })
//         it('verify a tag to clickLink',()=>{
//             cy.clickLink('AJ DEZINES Kids Casual Wear Clothing Cotton');
//             cy.clickLink("Allen Solly Men’s Regular Fit Polo");
            
            
//     })
        
// })


// describe('Scrape Product Details', () => {
//    let productDetails = new Map(); // To store product details
//    Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
//   })
//     beforEach(() => {
//       // Visit the website
//       cy.visit('https://sprodata.in/');
     
//     });
//     afterEach(() => {
//       // Convert Map data to CSV format
//       const csvHeader = 'Title, Price\n';
//       const csvRows = Array.from(productDetails.entries())
//         .map(([title, price]) => `${title}, ${price}`)
//         .join('\n');
  
//       const csvData = csvHeader + csvRows;v     
  
//       // Call Cypress task to write CSV
//       cy.task('writeToCSV', { csvData });
//     });

//     it('should get all product details and save them in a Map', () => {
      
//       // Scrape all product items (assuming class names for title and price)
//       cy.clickLink('AJ DEZINES Kids Casual Wear Clothing Cotton').each(($el) => {
       
//         const price = $el.find('.product-price').text().trim()});;
//       cy.clickLink("Allen Solly Men’s Regular Fit Polo").each(($el) => {
       
//         const price = $el.find('.product-price').text().trim()});
//             //cy.log(price)
//         // Add to the Map
//         //productDetails.set(title, price);
//       });
    
  
    
//   });



  describe('product and price',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      //     // returning false here prevents Cypress from
      //     // failing the test
      //     return false
    })
    let ItemName=[];
    let ItemPrice=[];
    beforeEach('Navigate to the site',()=>{
        cy.visit('https://sprodata.in/')
    })
    it('product get',()=>{
        cy.get('[class="woocommerce-loop-product__title"]').each((productNames)=>{
        const text = productNames.text();
        const r= `${text}`;
        cy.log(r)
        ItemName.push(r)
        })
      
        cy.get('[class="price"]').each((productprice)=>{
            const tex = productprice.text();
            const sp = tex.split('Original price was:')
            const Price = sp[0].trim();
            const ps =`${Price}`
            ItemPrice.push(sp)
            cy.log(ps)
          }).then(()=>{

          
        

            let csvContent = 'Product Name,Price\n';
            ItemName.forEach((name, index)=>{
                const Price = ItemPrice[index] || 'N\A';
                csvContent += `${name},${Price}\n`;
                cy.log(csvContent)
            });
            cy.writeFile('cypress/fixtures/naveen.csv',csvContent);
             

        })//then
    })
})
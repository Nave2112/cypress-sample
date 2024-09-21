// const { defineConfig } = require("cypress");
// const fs = require('fs');
// const path = require('path');

// module.exports = defineConfig({
//   projectId: 'izm68d',
//   reporter: 'cypress-mochawesome-reporter',
//   screenshotOnRunFailure:true,
//   video:true,
//   defaultCommandTimeout:8000,
//   pageLoadTimeout:200000,
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);

//       let testResults = [];

//       on('task',{recordTestResult(result){
//         testResults.push(result);
//         return null;
//       }});

//       on('after:run', async () => {
//         // Dynamically import neat-csv
//         const  neatCsv  = (await import('neat-csv')).default;
     
//       // implement node event listeners here

//       // Create CSV data
//       const csvHeaders = 'testName,status,timeTaken\n';
//       const csvf = 'smoke, passed, 1.2s'
//       // const csvRows = testResults.map(result =>
//       //   `${result.testName},${result.status},${result.timeTaken}`
//       // ).join('\n');
//       // const csvContent = csvHeaders + csvRows;
      
//       const csvContent = csvHeaders + csvf;
//       // Write CSV file
//       const filePath = path.join('cypress/results', 'test-results.csv');
//       fs.writeFileSync(filePath, csvContent, { encoding: 'utf8' });

//       return null;
//     });
      
//     },
//     baseUrl: 'https://v7datalabs.in/live/'
//   },
//   resultsFolder: 'cypress/results'
// });

////  last add

const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  projectId: 'izm68d',
  reporter: 'cypress-mochawesome-reporter',
  screenshotOnRunFailure: true,
  video: true,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 200000,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
   
      let testResults = [];

      on('task', {
        recordTestResult(result) {
          testResults.push(result);
          return null;
        }
      });

      on('after:run', async () => {
        // try {
          // Dynamically import neat-csv
          const neatCsv = (await import('neat-csv')).default;

          // Create CSV data
          const csvHeaders = 'testName,status,timeTaken\n';
          
          // Sample data, replace with dynamic data if needed
          // const csvf = 'smoke, passed, 1.2s\n';
         
          const csvRows = testResults.map(result =>
            `${result.testName},${result.status},${result.timeTaken}`
          ).join('\n');
          const csvContent = csvHeaders + csvRows;
          
          // const csvContent = csvHeaders + csvf;

          // Define file path and ensure directory exists
          const directoryPath = path.join(__dirname, 'cypress', 'results');
          const filePath = path.join(directoryPath, 'test-results.csv');

          if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
          }

          // Write CSV file
          fs.writeFileSync(filePath, csvContent);
          // fs.writeFileSync(filePath, csvContent, { encoding: 'utf8' });
        // } catch (error) {
        //   console.error('Error during after:run event:', error);
        // }

        return null;
      });
    },
    baseUrl: 'https://v7datalabs.in/live/'
  },
  
});
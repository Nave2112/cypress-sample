// cypress/support/excelUtils.js
import * as XLSX from 'xlsx';

export const readExcelFile = (filePath) => {
    return new Cypress.Promise((resolve, reject) => {
        cy.readFile(filePath, 'binary')
            .then((data) => {
                try {
                    const workbook = XLSX.read(data, { type: 'binary' });
                    const sheetName = workbook.SheetNames[0]; // assuming you want the first sheet
                    const sheet = workbook.Sheets[sheetName];
                    const json = XLSX.utils.sheet_to_json(sheet);
                    resolve(json);
                } catch (error) {
                    reject(error);
                }
            });
    });
};
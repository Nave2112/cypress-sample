describe('Accessing the jsonfiles',()=>{
    let alldata;
    beforeEach('Globally using json',()=>{
        cy.fixture('allusers').then((allusersdata)=>{
            alldata = allusersdata
        })
    })
    it('Count the list',()=>{     //Task 1
      // cy.log(alldata)
        cy.log(alldata.length)
    })
   it('Getting name city friendsname friends hobbies in csv file',()=>{
         let Header ='Person, City, Friend, Friend Hobbies\n'        //Task 4
         //cy.log(Header)
         alldata.forEach(Eachperson=>{
          Eachperson.friends.forEach(friend =>{
           const row =`"${Eachperson.name}","${Eachperson.city}","${friend.name}","${friend.hobbies}"\n`
          cy.log ( Header +=row)

          const hob = Eachperson.friends.map( friend => friend.hobbies);
          const joinhob =hob.join('and');                //Task 5
          cy.log(joinhob)
        })
         })
         cy.task('writeToFile',({ fileName: 'out.csv', content: Header }))
   })
})
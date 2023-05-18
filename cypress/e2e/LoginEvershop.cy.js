describe('Login Story', () => {
  it('Login with success & failure', () => {
    cy.visit('https://demo.evershop.io/')
    
    cy.fixture('Identity').then((data) => {
      data.forEach((userdata) => {
          if(userdata.LoginCase == "Pass")
          {
              cy.xpath("//a[@href='/account/login']").click({ multiple :true});
              cy.xpath("//input[@placeholder='Email']").type(userdata.email)
              cy.xpath("//input[@placeholder='Password']").type(userdata.password)
              cy.xpath("//button[@type='submit']").click({ multiple :true});
              cy.xpath("//a[@href='/account']//*[name()='svg']").click();
              cy.xpath("//a[normalize-space()='Logout']").click();
              cy.wait(3000);

          }
          else if(userdata.LoginCase == "Fail") 
          {
              cy.xpath("//a[@href='/account/login']").click({ multiple :true});
              cy.xpath("//input[@placeholder='Email']").type(userdata.email)
              cy.xpath("//input[@placeholder='Password']").type(userdata.password)
              cy.xpath("//button[@type='submit']").click({ multiple :true});
          }

         
              })
    });
    
  })
})
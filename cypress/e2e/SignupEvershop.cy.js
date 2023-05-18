describe('Signup Story', () => {
    it('Signup with success & failure', () => {
      cy.visit('https://demo.evershop.io/')
      
      cy.fixture('Identity').then((data) => {
        data.forEach((userdata) => {
            if(userdata.SignUpCase == "Pass")
            {
                cy.xpath("//a[@href='/account/login']").click({ multiple :true});
                cy.xpath("//a[normalize-space()='Create an account']").click({multiple:true})
                cy.xpath("(//input[@placeholder='Full Name'])[1]").type(userdata.fullname)
                cy.xpath("(//input[@placeholder='Email'])[1]").type(userdata.email)
                cy.xpath("(//input[@placeholder='Password'])[1]").type(userdata.password)
                cy.xpath("//button[@type='button']").click({ multiple :true});
                cy.xpath("//a[@href='/account']//*[name()='svg']").click();
                cy.xpath("//a[normalize-space()='Logout']").click();
                cy.wait(3000);

            }
            else if(userdata.SignUpCase == "Fail") 
            {
                cy.xpath("//a[@href='/account/login']").click({ multiple :true});
                cy.xpath("//a[normalize-space()='Create an account']").click({multiple:true})
                cy.xpath("(//input[@placeholder='Full Name'])[1]").type(userdata.fullname)
                cy.xpath("(//input[@placeholder='Email'])[1]").type(userdata.email)
                cy.xpath("(//input[@placeholder='Password'])[1]").type(userdata.password)
                cy.xpath("//button[@type='button']").click({ multiple :true});
            }

           
                })
      });
      
    })
  })
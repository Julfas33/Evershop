describe('Shopping Story', () => {
    it('Shopping with login', () => {
      cy.visit('https://demo.evershop.io/')
      
      cy.fixture('Identity').then((data) => {
        data.forEach((userdata) => {
            if(userdata.LoginCase == "Pass")
            {
                cy.xpath("//a[@href='/account/login']").click({ multiple :true});
                cy.xpath("//input[@placeholder='Email']").type(userdata.email)
                cy.xpath("//input[@placeholder='Password']").type(userdata.password)
                cy.xpath("//button[@type='submit']").click({ multiple :true}); 
                cy.wait(1000)
                // Scroll down the page & click item
                cy.scrollTo('bottom');
                cy.xpath("//img[@alt='Nike air zoom pegasus 35']").click({ multiple :true});
                // select size
                cy.xpath("//a[normalize-space()='L']").click();
                cy.wait(1000)
                // select color
                cy.xpath("//a[normalize-space()='Green']").click(); 
                cy.wait(1000)
                cy.xpath("(//button[@type='button'])[1]").click({ multiple :true});
                // cy.xpath("//a[contains(@class,'add-cart-popup-button')]").click({ multiple :true});  
                
                // Continue
                cy.xpath("//a[normalize-space()='Continue Shopping']").click();
                cy.xpath("//a[@class='logo-icon']//*[name()='svg']").click();
              
                // Scroll down the page & click item
                cy.scrollTo('bottom');
                cy.xpath("//img[@alt='Geography class chuck taylor all star']").click();
                // select size
                cy.xpath("//a[normalize-space()='XL']").click();
                cy.wait(1000)
                // select color
                cy.xpath("//a[normalize-space()='White']").click();  
                cy.wait(1000)
                cy.xpath("(//button[@type='button'])[1]").click({ multiple :true});
                cy.xpath("//a[contains(@class,'add-cart-popup-button')]").click({ multiple :true});  
                // CheckOut
                cy.xpath("//span[normalize-space()='CHECKOUT']").click(); 
                
                //Shipping address
                cy.xpath("//input[@placeholder='Full name']").type('Testing')
                cy.xpath("//input[@placeholder='Telephone']").type('0812345678')
                cy.xpath("//input[@placeholder='Address']").type('Jl.Pahlawan Nomor 45')
                cy.xpath("//input[@placeholder='City']").type('Yogyakarta')
                cy.xpath("//select[contains(@id,'address[country]')]").select('India')
                
                cy.xpath("//select[contains(@id,'address[province]')]").select('Assam')
                cy.xpath("//input[@placeholder='Postcode']").type('345463')
                // Shipping
                cy.xpath("//span[normalize-space()='Standard Delivery - $9.00']").click()
                cy.xpath("//span[normalize-space()='Continue to payment']").click()
                
                // payment
                cy.wait(5000)
                cy.xpath("(//*[name()='circle'])[1]").click({force:true})
                // cy.xpath("//div[@class='checkout-payment checkout-step']//div//div[1]//div[1]//div[1]//div[1]//div[1]//a[1]//*[name()='svg']").click();
                cy.wait(5000)
                cy.xpath("(//span[normalize-space()='Place Order'])[1]").click()
            }

            

    
         
            
            
  
           
                })
      });


      
    })
  })
describe('Shopping Without Login', () => {
    it('Shopping case 1', () => {
      cy.visit('https://demo.evershop.io/')  
      cy.xpath("//div[@class='header flex justify-between']").click();
      cy.xpath("//img[@alt='Edge gameday shoes']").click();
    
    
    });

    it('Shopping case 2 Adding multiple items to the shopping cart', () => {
        cy.visit('https://demo.evershop.io/')
        // Scroll down the page & click item
        cy.scrollTo('bottom');
        cy.xpath("//img[@alt='Geography class chuck taylor all star']").click();
      
      // select size
        cy.xpath("//a[normalize-space()='XL']").click();
        cy.wait(1000)
       // select color
        cy.xpath("//a[normalize-space()='White']").click(); 
        cy.wait(1000)
       // add to chart
        cy.xpath("(//button[@type='button'])[1]").click({ multiple :true});
        
        // Continue
        cy.xpath("//a[normalize-space()='Continue Shopping']").click();
        cy.xpath("//a[@class='logo-icon']//*[name()='svg']").click();
       
         // Scroll down the page & click item
         cy.scrollTo('bottom');
         cy.xpath("//img[@alt='Nike air zoom pegasus 35']").click();
         // select size
         cy.xpath("//a[normalize-space()='L']").click();
         cy.wait(1000)
         // select color
         cy.xpath("//a[normalize-space()='Green']").click(); 
         cy.wait(1000)
         cy.xpath("(//button[@type='button'])[1]").click({ multiple :true});
         cy.xpath("//a[contains(@class,'add-cart-popup-button')]").click({ multiple :true});       
       
        
      });

        it('Shopping case 3 Updating the quantity of items in the shopping cart', () => {
            cy.visit('https://demo.evershop.io/')
            // Scroll down the page & click item
                cy.scrollTo('bottom');
                cy.xpath("//img[@alt='Geography class chuck taylor all star']").click();
            // select size
                cy.xpath("//a[normalize-space()='XL']").click();
                cy.wait(1000)
            // select color
                cy.xpath("//a[normalize-space()='White']").click(); 
                cy.wait(1000)
            // add to chart
                cy.xpath("(//button[@type='button'])[1]").click()
                // view chart
                cy.xpath("//a[contains(@class,'add-cart-popup-button')]").click(); 
                // Update Qty
                    cy.xpath("//a[normalize-space()='Geography class chuck taylor all star']").click(); 
                    cy.xpath("//input[@placeholder='Qty']").clear();
                    cy.xpath("//input[@placeholder='Qty']").type('3');   
                // select size
                    cy.xpath("//a[normalize-space()='XL']").click();
                    cy.wait(1000)
                // select color
                    cy.xpath("//a[normalize-space()='White']").click(); 
                    cy.wait(1000)
                // add to chart
                    cy.xpath("(//button[@type='button'])[1]").click();
                    
                    cy.xpath("//a[contains(@class,'add-cart-popup-button')]").click();
        
            
        });
        
        it('Shopping case 4 Removing items from the shopping cart', () => {
            cy.visit('https://demo.evershop.io/')          
        
            // Scroll down the page & click item
            cy.scrollTo('bottom');
            cy.xpath("//img[@alt='Nike air zoom pegasus 35']").click();
            // select size
            cy.xpath("//a[normalize-space()='L']").click();
            cy.wait(1000)
            // select color
            cy.xpath("//a[normalize-space()='Green']").click(); 
            cy.wait(1000)
            cy.xpath("(//button[@type='button'])[1]").click({ multiple :true});
            cy.xpath("//a[contains(@class,'add-cart-popup-button')]").click({ multiple :true});  
            cy.xpath("//span[normalize-space()='Remove']").click({multiple :true})     
        
            
        });

        it('Shopping case 5 Proceeding to checkout with items in the shopping cart', () => {
            cy.visit('https://demo.evershop.io/')          
        
            // Scroll down the page & click item
            cy.scrollTo('bottom');
            cy.xpath("//img[@alt='Nike air zoom pegasus 35']").click();
            // select size
            cy.xpath("//a[normalize-space()='L']").click();
            cy.wait(1000)
            // select color
            cy.xpath("//a[normalize-space()='Green']").click(); 
            cy.wait(1000)
            cy.xpath("(//button[@type='button'])[1]").click({ multiple :true});
            cy.xpath("//a[contains(@class,'add-cart-popup-button')]").click({ multiple :true});  
            // CheckOut
            cy.xpath("//span[normalize-space()='CHECKOUT']").click(); 
            //input email
            cy.xpath("//input[@placeholder='Email']").type('admin@gmail.com')
            cy.xpath("//span[normalize-space()='Continue to shipping']").click()
            //Shipping address
            cy.xpath("//input[@placeholder='Full name']").type('AdminTesting')
            cy.xpath("//input[@placeholder='Telephone']").type('0812345678')
            cy.xpath("//input[@placeholder='Address']").type('Jl.Pahlawan Nomor 45')
            cy.xpath("//input[@placeholder='City']").type('Yogyakarta')
            cy.xpath("//select[contains(@id,'address[country]')]").select('India')
            
            cy.xpath("//select[contains(@id,'address[province]')]").select('Assam')
            cy.xpath("//input[@placeholder='Postcode']").type('345463')
            //Shipping
            cy.xpath("//span[normalize-space()='Standard Delivery - $9.00']").click()
            cy.xpath("//span[normalize-space()='Continue to payment']").click()
            //payment
            cy.wait(5000)
            cy.xpath("(//*[name()='circle'])[1]").click({force:true})
            // cy.xpath("//div[@class='checkout-payment checkout-step']//div//div[1]//div[1]//div[1]//div[1]//div[1]//a[1]//*[name()='svg']").click();
            cy.wait(5000)
            cy.xpath("(//span[normalize-space()='Place Order'])[1]").click()
            
        
            
        });

  })
export async function enterTrnsTest(page) {
    
    //Trade Entry
    await page.locator("button", { hasText: /Transaction/i }).waitFor({ state: "visible", timeout: 70000 });
    await page.getByRole('button', { name: 'Transaction' }).click();
    await page.getByRole('link', { name: 'Enter TRNS' }).click();
    //buy equity 
    await page.getByLabel('Account No *', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Account No', exact: true }).fill('SAS0001');
    await page.getByRole('option', { name: 'SAS0001 (SAS ADMIN)' }).click();
    await page.locator('#mui-component-select-asset_type').click();
    await page.getByRole('option', { name: 'Equity' }).click();
    await page.getByLabel('Symbol/Cusip/ISIN/SEDOL *').click();
    await page.getByRole('textbox', { name: 'Symbol/Cusip/ISIN/SEDOL' }).fill('AAPl');
    await page.getByRole('option', { name: 'AAPL - APPLE INC COM' }).click();  
    await page.locator('input[name="numberformat"]').first().fill('100');    
    await page.locator('input[name="numberformat"]').nth(1).fill('150');
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Buy' }).click();
    await page.getByLabel('Contra Account No *').click();
    await page.getByRole('textbox', { name: 'Contra Account No' }).fill('CNS');
    await page.getByRole('option', { name: 'CNS (CNS Trade)' }).click();
    await page.getByLabel('Executing Venue *').click();
    await page.getByRole('option', { name: 'FDSC' }).click();   
    await page.waitForTimeout(3000); 
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();
   
    //paki global po di ko alam pano hehe
    const notification = await page.getByText('The transaction is completed'); 
    const message = await notification.textContent();
    await notification.waitFor({ state: 'visible', timeout: 10000 });
    if (message && message.includes('The transaction is completed')) {
        console.log('✅ Transaction completed! Proceeding to next test...');
        await page.getByRole('button', { name: 'Reset' }).click();

        //DI Nag log sa debug console
    } else (message && message.includes('The transaction is completed but has an error'))
    { 
        console.log('❌ Transaction failed! Please check the transaction details and try again.');
    }

    //sell equity
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByLabel('Account No *', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Account No', exact: true }).fill('SAS0001');
    await page.getByRole('option', { name: 'SAS0001 (SAS ADMIN)' }).click();
    await page.locator('#mui-component-select-asset_type').click();
    await page.getByRole('option', { name: 'Equity' }).click();
    await page.getByLabel('Symbol/Cusip/ISIN/SEDOL *').click();
    await page.getByRole('textbox', { name: 'Symbol/Cusip/ISIN/SEDOL' }).fill('AAPl');
    await page.getByRole('option', { name: 'AAPL - APPLE INC COM' }).click();    
    await page.locator('input[name="numberformat"]').first().fill('20');    
    await page.locator('input[name="numberformat"]').nth(1).fill('250');    
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Sell', exact: true }).click();
    await page.getByLabel('Contra Account No *').click();
    await page.getByRole('button', { name: 'Clear' }).click();
    await page.getByRole('textbox', { name: 'Contra Account No' }).click();
    await page.getByLabel('Contra Account No *').fill('DTc');
    await page.getByRole('option', { name: 'DTC - Cash CNS (DTC Cash CNS)' }).click();
    await page.getByRole('textbox', { name: 'Executing Venue' }).click();
    await page.getByRole('option', { name: 'TONE' }).click();
    await page.waitForTimeout(3000); 
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();

    const notification1 = await page.getByText('The transaction is completed'); 
    const message1 = await notification1.textContent();
    await notification1.waitFor({ state: 'visible', timeout: 10000 });
    if (message1 && message1.includes('The transaction is completed')) {
        console.log('✅ Transaction completed! Proceeding to next test...');
        await page.getByRole('button', { name: 'Reset' }).click();
    } else (message1 && message1.includes('The transaction is completed but has an error'))
    { 
        console.log('❌ Transaction failed! Please check the transaction details and try again.');
    }

    //buy option
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByLabel('Account No *', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Account No', exact: true }).fill('SAS0001');
    await page.getByRole('option', { name: 'SAS0001 (SAS ADMIN)' }).click();
    await page.locator('#mui-component-select-asset_type').click();
    await page.getByRole('option', { name: 'Option' }).click();
    await page.getByLabel('Symbol/Cusip/ISIN/SEDOL *').click();
    await page.getByRole('textbox', { name: 'Symbol/Cusip/ISIN/SEDOL' }).fill('AAPl');
    await page.getByRole('option', { name: 'AAPL 240804P00126000 - PUT' }).click();
    await page.locator('input[name="numberformat"]').first().fill('50');    
    await page.locator('input[name="numberformat"]').nth(1).fill('100');
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'OB - Buy to Open' }).click();    
    await page.getByRole('textbox', { name: 'Executing Venue' }).click();
    await page.getByRole('option', { name: 'FDSC' }).click();
    await page.waitForTimeout(3000); 
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    
    const notification2 = await page.getByText('The transaction is completed'); 
    const message2 = await notification2.textContent();
    await notification2.waitFor({ state: 'visible', timeout: 10000 });
    if (message2 && message2.includes('The transaction is completed')) {
        console.log('✅ Transaction completed! Proceeding to next test...');
        await page.getByRole('button', { name: 'Reset' }).click();
    } else (message2 && message2.includes('The transaction is completed but has an error'))
    { 
        console.log('❌ Transaction failed! Please check the transaction details and try again.');
    }

    //sell option
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByLabel('Account No *', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Account No', exact: true }).fill('SAS0001');
    await page.getByRole('option', { name: 'SAS0001 (SAS ADMIN)' }).click();
    await page.locator('#mui-component-select-asset_type').click();
    await page.getByRole('option', { name: 'Option' }).click();
    await page.getByLabel('Symbol/Cusip/ISIN/SEDOL *').click();
    await page.getByRole('textbox', { name: 'Symbol/Cusip/ISIN/SEDOL' }).fill('AAPl');
    await page.getByRole('option', { name: 'AAPL 240804P00126000 - PUT' }).click(); 
    await page.locator('input[name="numberformat"]').first().fill('15');    
    await page.locator('input[name="numberformat"]').nth(1).fill('150');
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'OS - Sell to Open' }).click();  
    await page.getByRole('textbox', { name: 'Executing Venue' }).click();
    await page.getByRole('option', { name: 'TONE' }).click(); 
    await page.getByRole('button', { name: 'Clear' }).click();
    await page.getByLabel('Contra Account No *').click();
    await page.getByRole('textbox', { name: 'Contra Account No' }).fill('OCc');
    await page.getByRole('option', { name: 'OCC Position (OCC - Position)' }).click();
    await page.waitForTimeout(3000); 
    await page.getByRole('button', { name: 'Save', exact: true }).click();
   
    const notification3 = await page.getByText('The transaction is completed'); 
    const message3 = await notification3.textContent();
    await notification3.waitFor({ state: 'visible', timeout: 10000 });
    if (message3 && message3.includes('The transaction is completed')) {
        console.log('✅ Transaction completed! Proceeding to next test...');
        await page.getByRole('button', { name: 'Reset' }).click();
    } else (message3 && message3.includes('The transaction is completed but has an error'))
    {
        console.log('❌ Transaction failed! Please check the transaction details and try again.');
    }

   //Tax Movement
   await page.getByRole('button', { name: 'Reset' }).click();
   await page.getByLabel('Entry Type *').first().click();
   await page.getByLabel('Entry Type *').first().fill('dis');
   await page.getByRole('option', { name: 'DIST - Distribution' }).click();
   await page.getByLabel('Account No *', { exact: true }).click();
   await page.getByRole('textbox', { name: 'Account No', exact: true }).fill('SAS0001');
   await page.getByRole('option', { name: 'SAS0001 (SAS ADMIN)' }).click();
   await page.getByLabel('Contra Account No *').click();
   await page.getByRole('textbox', { name: 'Contra Account No' }).fill('DIv');
   await page.getByRole('option', { name: 'DIV (Dividend)' }).click();
   await page.locator('input[name="numberformat"]').click();
   await page.locator('input[name="numberformat"]').fill('1000');
   await page.locator('div').filter({ hasText: /^Description$/ }).getByRole('textbox').click();
   await page.locator('div').filter({ hasText: /^Description$/ }).getByRole('textbox').fill('test data only');
   await page.waitForTimeout(3000); 
   await page.getByRole('button', { name: 'Save', exact: true }).click();
      

   const notification4 = await page.getByText('The transaction is completed'); 
   const message4 = await notification4.textContent();
   await notification4.waitFor({ state: 'visible', timeout: 10000 });
   if (message4 && message4.includes('The transaction is completed')) {
       console.log('✅ Transaction completed! Proceeding to next test...');
       await page.getByRole('button', { name: 'Reset' }).click();
    } else (message4 && message4.includes('The transaction is completed but has an error'))
    { 
        console.log('❌ Transaction failed! Please check the transaction details and try again.');
    }

   //Position Movement
   await page.getByRole('button', { name: 'Reset' }).click();
   await page.getByLabel('Entry Type *').first().click();
   await page.getByLabel('Entry Type *').first().fill('del');
   await page.getByRole('option', { name: 'DEL - Delivery' }).click();
   await page.getByLabel('Account No *', { exact: true }).click();
   await page.getByRole('textbox', { name: 'Account No', exact: true }).fill('SAS0001');
   await page.getByRole('option', { name: 'SAS0001 (SAS ADMIN)' }).click();
   await page.getByLabel('', { exact: true }).click();
   await page.getByRole('option', { name: 'Equity' }).click();
   await page.getByLabel('Symbol/Cusip/ISIN/SEDOL *').click();
   await page.getByLabel('Symbol/Cusip/ISIN/SEDOL *').fill('AAPl');
   await page.getByRole('option', { name: 'AAPL - APPLE INC COM' }).click();
   await page.locator('input[name="numberformat"]').first().click();
   await page.locator('input[name="numberformat"]').first().fill('100');
   await page.locator('input[name="numberformat"]').first().press('Tab');
   await page.locator('div').filter({ hasText: /^Price\$$/ }).getByRole('textbox').click();
   await page.locator('div').filter({ hasText: /^Price\$$/ }).getByRole('textbox').fill('150');
   await page.getByLabel('Contra Broker').click();
   await page.getByRole('option', { name: 'TONE 8199 | TONE | 2021' }).click();
   await page.waitForTimeout(3000); 
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    

   const notification5 = await page.getByText('The transaction is completed'); 
   const message5 = await notification5.textContent();
   await notification5.waitFor({ state: 'visible', timeout: 10000 });
   if (message5 && message5.includes('The transaction is completed')) {
       console.log('✅ Transaction completed! Proceeding to next test...');
       await page.getByRole('button', { name: 'Reset' }).click();
    } else (message5 && message5.includes('The transaction is completed but has an error'))
    { 
        console.log('❌ Transaction failed! Please check the transaction details and try again.');
    }

   //Cash and Position Movement
    await page.getByRole('button', { name: 'Reset' }).click();  
    await page.getByLabel('Entry Type *').first().click();
    await page.getByLabel('Entry Type *').first().fill('ftd');
    await page.getByRole('option', { name: 'FTD - Fail to Deliver' }).click();
    await page.getByLabel('Account No *', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Account No', exact: true }).fill('SAS0001');
    await page.getByRole('option', { name: 'SAS0001 (SAS ADMIN)' }).click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('option', { name: 'Equity' }).click();
    await page.getByLabel('Symbol/Cusip/ISIN/SEDOL *').click();
    await page.getByLabel('Symbol/Cusip/ISIN/SEDOL *').fill('AAPl');
    await page.getByRole('option', { name: 'AAPL - APPLE INC COM' }).click();
    await page.locator('input[name="numberformat"]').first().click();
    await page.locator('input[name="numberformat"]').first().fill('150');
    await page.locator('div').filter({ hasText: /^Price\$$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^Price\$$/ }).getByRole('textbox').fill('300');
    await page.getByLabel('Contra Broker').click();
    await page.getByRole('option', { name: 'TWFS 0188 | TWFS | 21ST' }).click();
    await page.waitForTimeout(3000); 
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    

    const notification6 = await page.getByText('The transaction is completed'); 
    const message6 = await notification6.textContent();
    await notification5.waitFor({ state: 'visible', timeout: 10000 });
    
    if (message6 && message6.includes('The transaction is completed')) {
        console.log('✅ Transaction completed! Proceeding to next test...');
        await page.getByRole('button', { name: 'Reset' }).click();
     } else (message6 && message6.includes('The transaction is completed but has an error'))
     { 
         console.log('❌ Transaction failed! Please check the transaction details and try again.');
     }

    //Cash Movement
    await page.getByLabel('Entry Type *').first().click();
    await page.getByLabel('Entry Type *').first().fill('csd');
    await page.getByRole('option', { name: 'CSD - Cash Deposit(Credit)' }).click();
    await page.getByLabel('Account No *', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Account No', exact: true }).fill('SAS0001');
    await page.getByRole('option', { name: 'SAS0001 (SAS ADMIN)' }).click();
    await page.getByLabel('Contra Account No *').click();
    await page.getByRole('textbox', { name: 'Contra Account No' }).fill('BMo');
    await page.getByRole('option', { name: 'BMO Bank (BMO Bank)' }).click();
    await page.locator('input[name="numberformat"]').fill('-1,0000');
    await page.getByRole('button', { name: 'Save', exact: true }).click();

    const notification7 = await page.getByText('The transaction is completed'); 
    const message7 = await notification7.textContent();
    await notification7.waitFor({ state: 'visible', timeout: 10000 });
    
    if (message7 && message7.includes('The transaction is completed')) {
        console.log('✅ Transaction completed! Proceeding to next test...');
        await page.getByRole('button', { name: 'Reset' }).click();
     } else (message7 && message7.includes('The transaction is completed but has an error'))
     { 
         console.log('❌ Transaction failed! Please check the transaction details and try again.');
     }

}
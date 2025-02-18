export async function enterTrnsTest(page) {
    
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
   
    const notification = await page.getByText('The transaction is completed'); 
    const message = await notification.textContent();
    await notification.waitFor({ state: 'visible', timeout: 10000 });
    if (message && message.includes('The transaction is completed')) {
        console.log('✅ Transaction completed! Proceeding to next test...');
        await page.getByRole('button', { name: 'Reset' }).click();
    } else {
        console.log('❌ Transaction failed! Please check the transaction details and try again.');
    }

    //sell equity
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
    } else {
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
    } else {
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
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    
    const notification3 = await page.getByText('The transaction is completed'); 
    const message3 = await notification3.textContent();
    await notification3.waitFor({ state: 'visible', timeout: 10000 });
    if (message3 && message3.includes('The transaction is completed')) {
        console.log('✅ Transaction completed! Proceeding to next test...');
        await page.getByRole('button', { name: 'Reset' }).click();
    } else {
        console.log('❌ Transaction failed! Please check the transaction details and try again.');
    }

}
/* jshint expr: true */
module.exports = {
  tags: ['test'],
  'Search lead via email' : function (client) {
    // var email = 'kevin.won+' + new Date().getTime()+ '@nrghomesolar.com';
    // client
    //     .url('http://mbsy.co/fpgFd')
    //     .pause(1000);
    //
    // client
    //     .setValue('input[id=first_name]', 'kevin')
    //     .setValue('input[id=last_name]', 'referral')
    //     .setValue('input[id=email-5]', email)
    //     .setValue('input[id=phone]', '415-555-5555')
    //     .setValue('input[id=street]', '100 California Street')
    //     .setValue('input[id=city]', 'San Francisco')
    //     .setValue('input[id=zip]', '94111')
    //     .click('select[id=state]')
    //     .click('option[value=CA]')
    //     .click('input[value="Own"]')
    //     .click('input[value="Get a free Quote"]')
    //     .waitForElementPresent('h1[class=top-heading]', 3000)
    //
    // console.log('Test email: ')
    // console.log(email)

    client
        .url('https://roofdiagnostics.quickbase.com/db/main?a=SignIn&why=to&nextURL=https%3A%2F%2Froofdiagnostics.quickbase.com%2Fdb%2Fbhc92gqps%3Fcg%3D1&_c=py47gk')
        .pause(1000);

    client
        .setValue('input[name=loginid]', 'kevin.won@nrghomesolar.com')
        .setValue('input[name=password]', 'plugfoot123')
        .click('[type="submit"]')

    client.pause(2000);
    client
        .click('a[href="https://roofdiagnostics.quickbase.com/db/bhc92gqps?a=dbpage&pageID=46"]')
        .setValue('input[name="email"]', "kevin.won+1466207768702@nrghomesolar.com")
        .click('[type="submit"]')
        .waitForElementPresent('a[href="bhhx8pmzd?a=dr&rid=236"]', 1000)
        .click('[class="ViewRecordIcon Tipsy"]')
        .assert.containsText('a[href="bhhx8pmzd?a=dr&rid=236"]', "Customer Referral- Mktg Ambassador")
        .assert.containsText('a[href="bjdx34ffy?a=dr&rid=3463"]', "Ambassador Landing Page")

    /*    client.end();*/
  }
};

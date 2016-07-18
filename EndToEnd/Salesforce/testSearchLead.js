/* jshint expr: true */
module.exports = {
  tags: ['test'],
  'Search lead via email' : function (client) {
    client
        .url('https://nrg--orgmerg.cs50.my.salesforce.com/')
        .pause(1000);

    client
        .setValue('input[name=username]', 'kevin.won2@nrghomesolar.com')
        .setValue('input[name=pw]', 'plugfoot123')
        .click('[type="submit"]')

    client.pause(2000);
    client
        .waitForElementPresent('a[href="https://nrg--OrgMerg.cs50.my.salesforce.com/00Q/o"]', 1000)
        .click('a[href="https://nrg--OrgMerg.cs50.my.salesforce.com/00Q/o"]')
        .click('select[id="fcf"]')
        .click('option[value="00BA0000007Rri2"]')
        .click('[type="button"]')

    /*    client.end();*/
  }
};

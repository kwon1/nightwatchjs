/* jshint expr: true */
module.exports = {
  tags: ['test'],
  'Submit lead' : function (client) {
    var email = 'kevin.won+' + new Date().getTime()+ '@nrghomesolar.com';
    client
        .url('http://mbsy.co/fpgFd')
        .pause(1000);

    client
        .setValue('input[id=first_name]', 'kevin')
        .setValue('input[id=last_name]', 'referral')
        .setValue('input[id=email-5]', email)
        .setValue('input[id=phone]', '415-555-5555')
        .setValue('input[id=street]', '100 California Street')
        .setValue('input[id=city]', 'San Francisco')
        .setValue('input[id=zip]', '94111')
        .click('select[id=state]')
        .click('option[value=CA]')
        .click('input[value="Own"]')
        .waitForElementPresent('input[value="Get a free Quote"]', 2000)
        .click('input[value="Get a free Quote"]')
        .waitForElementPresent('h1[class=top-heading]', 3000)

    console.log('Test email: ' +email)

    // client.end();
  }
};

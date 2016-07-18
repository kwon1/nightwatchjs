/* jshint expr: true */
module.exports = {
  tags: ['phoenix'],
  'Submit lead' : function (client) {
    var email = 'kevin.won+' + new Date().getTime()+ '@nrghomesolar.com';
    client
      .url('https://qa-ultra-app.onehomesolar.net/user/login')
      .pause(1000);

    client
          .setValue('input[type=text]', 'phoenix+all-access@roofdiagnostics.com')
          .setValue('input[type=password]', 'phoen!X')
          .click('[class="button"]')
          .pause(2000)
          .assert.containsText('span[data-reactid=".0.0.0.0.2.0.1.1.$14.0.0.1"]', "Lead form available!")
          .click('span[data-reactid=".0.0.0.0.2.0.1.1.$14.0.0.1"]')
          .pause(2000)
          .assert.containsText('h1[data-reactid=".0.0.0.0.2.0.0.0"]', "San Francisco Lead Form")

          .pause(2000)
          .setValue('input[data-reactid=".0.0.0.0.2.0.2:$10.1.$7.2.$1.1"]', 'kevin')
          .setValue('input[data-reactid=".0.0.0.0.2.0.2:$10.1.$7.2.$2.1"]', 'San Francisco')
          .setValue('input[data-reactid=".0.0.0.0.2.0.2:$10.1.$7.2.$3.1"]', '415-555-5555')
          .setValue('input[data-reactid=".0.0.0.0.2.0.2:$10.1.$7.2.$4.1"]', email)

          .setValue('input[data-reactid=".0.0.0.0.2.0.2:$11.1.$3.2.$1.1"]', '100 California St, San Francisco, CA 94111, USA')
          .click('input[value="Own"]')

    console.log('Test email: ' +email);

/*    client.end();*/
  }
};

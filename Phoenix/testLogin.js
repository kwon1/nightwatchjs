/* jshint expr: true */
module.exports = {
  tags: ['phoenix'],
  'Test login' : function (client) {
    client
      .url('https://qa-ultra-app.onehomesolar.net/user/login')
      .pause(1000);

    client
          .setValue('input[type=text]', 'phoenix+all-access@roofdiagnostics.com')
          .setValue('input[type=password]', 'phoen!X')
          .click('[class="button"]')
          .pause(2000)
          .assert.containsText('p[data-reactid=".0.0.0.0.0.1.1.1"]', "Super User")

/*    client.end();*/
  }
};

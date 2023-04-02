const inputs = [
    {
        run: 1,
        input: 'https://github.com/soldair/node-floody/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'High',
        script: 'script1'
    },
    {
        run: 1,
        input: 'https://github.com/substack/static-eval/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'script1'
    },
    {
        run: 1,
        input: 'https://github.com/maxogden/concat-stream/',
        status: 'Yes',
        time: 13,
        date: new Date(),
        priority: 'Low',
        script: 'script1'
    },
    {
        run: 0,
        input: 'https://github.com/jarofghosts/glance/',
        status: 'Yes',
        time: 9,
        date: new Date(),
        priority: 'High',
        script: 'default'
    },
    {
        run: 0,
        input: 'https://github.com/fagbokforlaget/pdfinfojs/',
        status: 'Yes',
        time: 78,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {
        run: 0,
        input: 'https://github.com/kevinohara80/nforce/',
        status: 'Yes',
        time: 5,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {
        id: 8,
        run: 0,
        input: 'https://github.com/expressjs/serve-static/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {
        id: 9,
        run: 0,
        input: 'https://github.com/3rd-Eden/useragent/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/hokaccha/node-jwt-simple/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/vivaxy/here/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/expressjs/method-override/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/jshttp/forwarded/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/pillarjs/send/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/jshttp/fresh/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/henrytseng/hostr/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/macacajs/macaca-chromedriver/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/mediaelement/mediaelement/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/leizongmin/js-xss/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/mde/ejs/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/indutny/node-ip/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/hapijs/boom/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/hapijs/crumb/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/isaacs/st/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/soyuka/pidusage/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/hapijs/bassmaster/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/linkedin/dustjs/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/restify/node-restify/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/cisco/node-jose/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/jshttp/negotiator/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/hapijs/hapi/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/hapijs/nes/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/mqttjs/MQTT.js/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/firebase/superstatic/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/mysqljs/mysql/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/jquery/jquery/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/juliangruber/brace-expansion/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/tobli/alto-saxophone/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/jonschlinkert/randomatic/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/zeit/ms/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/groupon/selenium-download/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/cure53/DOMPurify/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/gentooboontoo/js-quantities/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/tschaub/grunt-gh-pages/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/koajs/static-cache/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/socketio/engine.io-client/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/Financial-Times/polyfill-service/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/balderdashy/sails/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/josdejong/mathjs/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/crypto-browserify/crypto-browserify/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/websockets/ws/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/ipfs/aegir/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/brisket/brisket/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/rendrjs/rendr/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/pouchdb/pouchdb/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/dcodeIO/ClosureCompiler.js/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/chriso/validator.js/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/Automattic/mongoose/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/actionhero/actionhero/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/airbrake/node-airbrake/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/TryGhost/Ghost/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/hapijs/inert/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/mapbox/mapbox.js/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/rubenv/angular-gettext/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/electron/electron/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/NodeBB/NodeBB/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/sequelize/sequelize/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/hakimel/reveal.js/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/dojo/dojo/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/ljharb/qs/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/c3js/c3/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/LivelyKernel/life_star/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/socketio/engine.io/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/markdown-it/markdown-it/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/jonschlinkert/remarkable/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/tgriesser/knex/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/janl/mustache.js/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/sindresorhus/decamelize/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/digitalbazaar/forge/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/aheckmann/gm/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/zeit/serve/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/emberjs/ember.js/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/tinymce/tinymce/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/nodejs/node/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/Strider-CD/strider-sauce/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/zurb/foundation-sites/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/microsoft/ChakraCore/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/ether/etherpad-lite/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/zhuangya/node-slug/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/DCKT/localhost-now/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/omphalos/crud-file-server/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/cloudcmd/console-io/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/vvo/node-whereis/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/giggio/node-chromedriver/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/cnpm/node-operadriver/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/hypery2k/galenframework-cli/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/angular/angular.js/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/facebook/react/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    },
    {

        run: 0,
        input: 'https://github.com/textAngular/textAngular/',
        status: 'Yes',
        time: 0,
        date: new Date(),
        priority: 'Medium',
        script: 'default'
    }
]

module.exports = inputs;
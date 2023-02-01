-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 04, 2022 at 12:16 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET
SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET
time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `HybridMetricsFramework`
--

-- --------------------------------------------------------

--
-- Table structure for table `Map`
--

CREATE TABLE `Map`
(
    `run`      int(11) NOT NULL DEFAULT 0,
    `link`     varchar(300) NOT NULL,
    `coverage` float         DEFAULT NULL,
    `status`   varchar(300)  DEFAULT NULL,
    `osm`      varchar(255)  DEFAULT NULL,
    `mdm`      varchar(255)  DEFAULT NULL,
    `note`     varchar(1000) DEFAULT NULL,
    `date`     varchar(50)   DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Map`
--

INSERT INTO `Map` (`run`, `link`, `coverage`, `status`, `osm`, `mdm`, `note`, `date`)
VALUES (1, 'https://github.com/soldair/node-floody/', 42, 'Yes', '24', '10', '', '2022-03-03-23-53-14'),
       (1, 'https://github.com/substack/static-eval/', 100, 'Yes', '3', '3', '', '2022-03-03-23-53-14'),
       (1, 'https://github.com/maxogden/concat-stream/', 100, 'Yes', '11', '11', '', '2022-03-03-23-53-14'),
       (0, 'https://github.com/jarofghosts/glance/', 100, 'Yes', '13', '13', '', '2022-02-04-11-37-01'),
       (0, 'https://github.com/fagbokforlaget/pdfinfojs/', 100, 'Yes', '9', '9', '', '2022-02-04-11-37-01'),
       (0, 'https://github.com/kevinohara80/nforce/', 100, 'Yes', '78', '78', '', '2022-02-03-21-09-47'),
       (0, 'https://github.com/expressjs/serve-static/', 100, 'Yes', '5', '5', '', '2022-02-03-21-09-47'),
       (0, 'https://github.com/3rd-Eden/useragent/', 100, 'Yes', '23', '23', '', '2022-02-03-21-09-47'),
       (0, 'https://github.com/hokaccha/node-jwt-simple/', 100, 'Yes', '8', '8', '', '2022-02-03-21-09-47'),
       (0, 'https://github.com/vivaxy/here/', 100, 'Yes', '12', '12', '', '2022-02-03-21-09-47'),
       (0, 'https://github.com/expressjs/method-override/', 100, 'Yes', '6', '6', '', '2022-02-03-21-09-47'),
       (0, 'https://github.com/jshttp/forwarded/', 100, 'Yes', '2', '2', '', '2022-02-03-21-09-47'),
       (0, 'https://github.com/pillarjs/send/', 76, 'Yes', '71', '54', '', '2022-02-03-21-09-48'),
       (0, 'https://github.com/jshttp/fresh/', 100, 'Yes', '2', '2', '', '2022-02-03-21-09-48'),
       (0, 'https://github.com/henrytseng/hostr/', 29, 'Yes', '7', '2', '', '2022-02-03-21-09-48'),
       (0, 'https://github.com/macacajs/macaca-chromedriver/', 100, 'Yes', '5', '5', '', '2022-02-03-21-09-48'),
       (0, 'https://github.com/mediaelement/mediaelement/', 6, 'Yes', '2160', '119', '', '2022-02-03-21-09-48'),
       (0, 'https://github.com/leizongmin/js-xss/', 100, 'Yes', '9', '9', '', '2022-02-03-21-09-50'),
       (0, 'https://github.com/mde/ejs/', 94, 'Yes', '71', '67', '', '2022-02-03-21-09-50'),
       (0, 'https://github.com/indutny/node-ip/', 100, 'Yes', '1', '1', '', '2022-02-03-21-09-50'),
       (0, 'https://github.com/hapijs/boom/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-50'),
       (0, 'https://github.com/hapijs/crumb/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-50'),
       (0, 'https://github.com/isaacs/st/', 100, 'Yes', '41', '41', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/soyuka/pidusage/', 92, 'Yes', '12', '11', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/hapijs/bassmaster/', 50, 'Yes', '14', '7', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/linkedin/dustjs/', 100, 'Yes', '78', '78', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/restify/node-restify/', 100, 'Yes', '24', '24', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/cisco/node-jose/', 0, 'Error', '', '',
        '[Errno 2] No such file or directory: results/node-jose/2021-12-13-14-51-08/metric/dynamic/Dynamic-Function-extended-valid.csv',
        '2022-02-03-21-09-51'),
       (0, 'https://github.com/jshttp/negotiator/', 100, 'Yes', '10', '10', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/hapijs/hapi/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-51'),
       (0, 'https://github.com/hapijs/nes/', 55, 'Yes', '44', '24', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/mqttjs/MQTT.js/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-51'),
       (0, 'https://github.com/firebase/superstatic/', 23, 'Yes', '13', '3', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/mysqljs/mysql/', 98, 'Yes', '136', '133', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/jquery/jquery/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-51'),
       (0, 'https://github.com/juliangruber/brace-expansion/', 100, 'Yes', '26', '26', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/tobli/alto-saxophone/', 0, 'Error', '', '', 'list index out of range',
        '2022-02-03-21-09-51'),
       (0, 'https://github.com/jonschlinkert/randomatic/', 100, 'Yes', '1', '1', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/zeit/ms/', 100, 'Yes', '5', '5', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/groupon/selenium-download/', 100, 'Yes', '18', '18', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/cure53/DOMPurify/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-51'),
       (0, 'https://github.com/gentooboontoo/js-quantities/', 30, 'Yes', '646', '194', '', '2022-02-04-12-41-10'),
       (0, 'https://github.com/tschaub/grunt-gh-pages/', 48, 'Yes', '29', '14', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/koajs/static-cache/', 100, 'Yes', '10', '10', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/socketio/engine.io-client/', 100, 'Yes', '41', '41', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/Financial-Times/polyfill-service/', 100, 'Yes', '7', '7', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/balderdashy/sails/', 97, 'Yes', '35', '34', '', '2022-02-03-21-09-51'),
       (0, 'https://github.com/josdejong/mathjs/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/crypto-browserify/crypto-browserify/', 0, 'No', '', '', 'No Static Functions',
        '2022-02-03-21-09-52'),
       (0, 'https://github.com/websockets/ws/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/ipfs/aegir/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/brisket/brisket/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/rendrjs/rendr/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/pouchdb/pouchdb/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/dcodeIO/ClosureCompiler.js/', 0, 'No', '', '', 'No Static Functions',
        '2022-02-03-21-09-52'),
       (0, 'https://github.com/chriso/validator.js/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/Automattic/mongoose/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/actionhero/actionhero/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/airbrake/node-airbrake/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/TryGhost/Ghost/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/hapijs/inert/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/mapbox/mapbox.js/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/rubenv/angular-gettext/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/electron/electron/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/NodeBB/NodeBB/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/sequelize/sequelize/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/hakimel/reveal.js/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/dojo/dojo/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/ljharb/qs/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/c3js/c3/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/LivelyKernel/life_star/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/socketio/engine.io/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/markdown-it/markdown-it/', 90, 'Yes', '20', '18', '', '2022-02-03-21-09-52'),
       (0, 'https://github.com/jonschlinkert/remarkable/', 0, 'No', '', '', 'No Static Functions',
        '2022-02-03-21-09-52'),
       (0, 'https://github.com/tgriesser/knex/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/janl/mustache.js/', 100, 'Yes', '78', '78', '', '2022-02-03-21-09-52'),
       (0, 'https://github.com/sindresorhus/decamelize/', 0, 'No', '', '', 'No Static Functions',
        '2022-02-03-21-09-52'),
       (0, 'https://github.com/digitalbazaar/forge/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/aheckmann/gm/', 100, 'Yes', '7', '7', '', '2022-02-03-21-09-52'),
       (0, 'https://github.com/zeit/serve/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/emberjs/ember.js/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/tinymce/tinymce/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/nodejs/node/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/Strider-CD/strider-sauce/', 0, 'No', '', '', 'No Static Functions',
        '2022-02-03-21-09-52'),
       (0, 'https://github.com/zurb/foundation-sites/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/microsoft/ChakraCore/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/ether/etherpad-lite/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/zhuangya/node-slug/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/DCKT/localhost-now/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/omphalos/crud-file-server/', 0, 'No', '', '', 'No Static Functions',
        '2022-02-03-21-09-52'),
       (0, 'https://github.com/cloudcmd/console-io/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/vvo/node-whereis/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/giggio/node-chromedriver/', 0, 'No', '', '', 'No Static Functions',
        '2022-02-03-21-09-52'),
       (0, 'https://github.com/cnpm/node-operadriver/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/hypery2k/galenframework-cli/', 0, 'No', '', '', 'No Static Functions',
        '2022-02-03-21-09-52'),
       (0, 'https://github.com/angular/angular.js/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/facebook/react/', 0, 'No', '', '', 'No Static Functions', '2022-02-03-21-09-52'),
       (0, 'https://github.com/textAngular/textAngular/', 0, 'No', '', '', 'No Static Functions',
        '2022-02-03-21-09-52');

-- --------------------------------------------------------

--
-- Table structure for table `Repositories`
--

CREATE TABLE `Repositories`
(
    `run`            tinyint(1) DEFAULT NULL,
    `link`           varchar(2000) DEFAULT NULL,
    `hash`           varchar(1000) DEFAULT NULL,
    `test_framework` varchar(2000) DEFAULT NULL,
    `status`         varchar(255)  DEFAULT NULL,
    `time`           double        DEFAULT NULL,
    `scg`            int(11) DEFAULT NULL,
    `dcg`            int(11) DEFAULT NULL,
    `sm`             int(11) DEFAULT NULL,
    `dm`             int(11) DEFAULT NULL,
    `inject`         varchar(2000) DEFAULT NULL,
    `note`           text          DEFAULT NULL,
    `date`           varchar(50)   DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Repositories`
--

INSERT INTO `Repositories` (`run`, `link`, `hash`, `test_framework`, `status`, `time`, `scg`, `dcg`, `sm`, `dm`,
                            `inject`, `note`, `date`)
VALUES (1, 'https://github.com/soldair/node-floody/', '2a150c5552b8ce2f2a12ae4a3fd33882d5827afd', 'Tape', 'Yes', 39.16,
        6, 12, 12, 15, 'index.js, test/test.js', NULL, '2022-03-03-21-27-51'),
       (1, 'https://github.com/substack/static-eval/', 'ab81134a43431457508bc2ead500f2d93ac0a71d', 'Tape', 'Yes', 6.99,
        2, 3, 4, 4, 'index.js, test/**', NULL, '2022-03-03-21-27-51'),
       (1, 'https://github.com/maxogden/concat-stream/', '4ca83d6fde386e15c76a7ef92373adb6280dd498', 'Tape', 'Yes',
        7.98, 9, 10, 11, 12, 'index.js, test/**', NULL, '2022-02-04-23-21-37'),
       (0, 'https://github.com/jarofghosts/glance/', '7e69a5539236386e747fb240ae87ea65ed64bb2c', 'Tape', 'Yes', 8.03,
        13, 2, 19, 15, 'index.js, test**', NULL, '2022-02-06-12-17-36'),
       (0, 'https://github.com/fagbokforlaget/pdfinfojs/', '379c0e14db8298b465269653b9ac308d83eb6d4e', 'Mocha', 'Yes',
        6.85, 5, 6, 12, 14, 'test/pdfinfo.test.js', NULL, '2022-02-06-12-19-05'),
       (0, 'https://github.com/kevinohara80/nforce/', '6191d927b909f8df048e9feb4898b28e83bd37da', 'Mocha', 'Yes', 14.76,
        246, 9, 140, 100, 'index, test/**', NULL, '2022-02-06-12-19-05'),
       (0, 'https://github.com/expressjs/serve-static/', 'b5fb5616c3da81fb781adf769b3092b40854b9c3', 'Mocha', 'Yes',
        7.07, 1, 2, 5, 6, 'test/test.js', NULL, '2022-02-06-12-25-24'),
       (0, 'https://github.com/3rd-Eden/useragent/', 'deb4ccc193dab355986f7ab3fbc1fe7a3c487765', 'Mocha', 'Yes', 52.56,
        61, 11, 59, 27, 'index.js, test/**, benchmark/**, features/**', NULL, '2022-02-06-12-25-24'),
       (0, 'https://github.com/hokaccha/node-jwt-simple/', 'a2a14d0549a6a53a13f6acf9bc46399c112c3c01', 'Mocha', 'Yes',
        7.47, 11, 9, 8, 10, 'index.js, test/basic.js', NULL, '2022-02-06-12-25-24'),
       (0, 'https://github.com/vivaxy/here/', '4f27246f7f0e544900b0822979a7c91c7e95a1e9', 'Mocha', 'Yes', 58.1, 11, 12,
        459, 56, 'index.js, test/**', 'asd', NULL),
       (0, 'https://github.com/expressjs/method-override/', '5a7d6a1f2f16ba4ec2bbab3d67b98b30e1d8a0fe', 'Mocha', 'Yes',
        5.8, 10, 10, 10, 10, 'index.js, test/test.js', NULL, NULL),
       (0, 'https://github.com/jshttp/forwarded/', 'ad1efeaf2315c1ccd25c1e5bccb21df626c1d12c', 'Mocha', 'Yes', 6.5, 2,
        1, 5, 10, 'index.js, test**', NULL, NULL),
       (0, 'https://github.com/pillarjs/send/', '463d1c92267d0b84e5df27f2aecad62859d5a57b', 'Mocha', 'Yes', 30.1, 48,
        91, 39, 114, 'index.js, test**', NULL, NULL),
       (0, 'https://github.com/jshttp/fresh/', 'ff5f257b575a70fae6268b9283f7d5796bcfde71', 'Mocha', 'Yes', 6.9, 4, 1,
        10, 3, 'index.js, test**', NULL, NULL),
       (0, 'https://github.com/henrytseng/hostr/', '5827ba48fd4a08c26604b97798c57d45fe1cd51e', 'Mocha', 'Yes', 7.4, 21,
        13, 38, 34, 'tests/*.js', ':)', NULL),
       (0, 'https://github.com/macacajs/macaca-chromedriver/', '7b125caf80f28fe56765cbbaf88447e87cf03e91', 'Mocha',
        'Yes', 12.9, 22, 3, 40, 38, 'helpers/**, test/**', 'acg dies: .git/hooks/pre-commit\' Fix: remove pre-commit folder | Merge last two results', NULL),
(0, 'https://github.com/mediaelement/mediaelement/', '37e69481941d900020518aabf05932f34a8c514e', 'Mocha', 'Yes', 8439.7, 253957, 354, 4779, 308, 'test/player.tests.js', NULL, NULL),
(0, 'https://github.com/leizongmin/js-xss/', '594b59baf111210a2691abac0dc0cbad2715fffd', 'Mocha', 'Yes', 45.9, 676, 51, 190, 49, 'test/*.js', NULL, NULL),
(0, 'https://github.com/mde/ejs/', '3f381221d1335708bfe93af1d11b508477c47fad', 'Mocha', 'Yes', 22.2, 44, 42, 32, 36, 'test/*.js', NULL, NULL),
(0, 'https://github.com/indutny/node-ip/', '5de805a25d3dc1bd1f5b9d781d80e0a9d7682f5d', 'Mocha', 'Yes', 11.8, 31, 33, 26, 27, 'test/*.js, helpers/**', NULL, NULL),
(0, 'https://github.com/hapijs/boom/', '534862edc089ede63503c7824937280dc789ca49', 'Lab', NULL, NULL, NULL, NULL, NULL, NULL, 'test/index.js', 'statistics not found', '2021-10-25-09-50-12'),
(0, 'https://github.com/hapijs/crumb/', '9c7afbb2ff219a6760d5c7a05c35c985fc0b3340', 'Lab', 'Yes', 11.1, 1, 9, 12, 10, 'test/*.js', 'Makefile:4: recipe for target \'test-cov\' failed', NULL),
(0, 'https://github.com/isaacs/st/', 'ae7b6768c1d91dd48b368b2b921193fc2b36cff1', 'Tap ', 'Yes', 23.9, 25, 10, 45, 42, 'bin/*.js,  test/**', NULL, NULL),
(0, 'https://github.com/soyuka/pidusage/', 'e3660d8a8e5e61afad9b02af67356a1e239d6bde', 'Ava', 'Yes', 18.6, 9, 8, 22, 14, 'index.js', NULL, NULL),
(0, 'https://github.com/hapijs/bassmaster/', '83f02417beab924ce2fe6ee7d6fcfab11d2dafd5', 'Lab', 'Yes', 6.7, 9, 33, 23, 24, 'test/*.js', 'Makefile:4: recipe for target \'test-cov\' failed', NULL),
(0, 'https://github.com/linkedin/dustjs/', '5e3718d689bf2b7fbc42f9658c1780280edf38aa', 'Jasmine', 'Error', 8034.7, 32824, 798, 2040, 1365, 'index, test**', 'og: 549 specs  0 fail | node 10 | inject: Done, but with warnings', NULL),
(0, 'https://github.com/restify/node-restify/', 'c1003559f06042d6c4adf195a134b0c8176e754d', 'Mocha', 'Yes', 28.6, 940, 7, 449, 433, 'test/**', 'node 9 | og: 1/746 | turn off eslint | error:  TypeError [ERR_INVALID_ARG_TYPE]: The \"superCtor\" argument must be of type Function', NULL),
(0, 'https://github.com/cisco/node-jose/', '2fde860746b009b6522fd9a990b4a62c34d034e4', 'Mocha + Gulp', 'Yes', 564.5, 2821, NULL, 658, 689, 'test/**', 'FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory | .eslint.src \"strict\": [0, \"global\"],', NULL),
(0, 'https://github.com/jshttp/negotiator/', '955ae90ee335e7d8f818a2cbe0389407a24453d6', 'Mocha', 'Yes', 50.1, 70, 57, 68, 60, 'index.js, test/*.js', '188/242 pass 3 pending 1 failing: Error: timeout of 1000000ms exceeded | anonymous functions loops', NULL),
(0, 'https://github.com/hapijs/hapi/', '1ad65ba793377928aa5a2dfc819888c5c9793394', 'Lab', 'Yes', 39124, 573, 443, 289, 306, 'helpers/index.js', 'og: 496/785 tests failed | inject: 541 of 785 tests failed', NULL),
(0, 'https://github.com/hapijs/nes/', '71e9232bb84ad30ab0a5f62647b07144d44e2930', 'Lab', 'Yes', 500, 484, 199, 191, 139, 'helpers/index.js, test/index.js', 'og: 100 pass | Run standard --fix before npm test', NULL),
(0, 'https://github.com/mqttjs/MQTT.js/', '800a4ddaaec80f3289b1aa249bf67584588611ff', 'Mocha', 'Yes', 1269.3, 169, 126, 138, 99, 'test/**', 'sajt', NULL),
(0, 'https://github.com/firebase/superstatic/', '6628c8b63bc503fef0748829fb41fba66c30970c', 'Mocha', 'Yes', 28.7, 166, 240, 177, 126, 'test/unit/**', ':) og: 128 pass 15 pending | inject: ', NULL),
(0, 'https://github.com/mysqljs/mysql/', '7549c734e5691575d20e7c774d47cda482214bda', 'urun', 'Yes', 600.5, 1029, 161, 371, 570, 'index.js, test/run.js, test/unit/**', 'Test case fails: Can\'t connect to MySQL server', NULL),
(0, 'https://github.com/jquery/jquery/', '250a1990baa571de60325ab2c52eabb399c4cf9e', 'Grunt', '-', 317.4, 18581, 2, 2804, 575, 'test/**', 'og: 872 passing | https://stackoverflow.com/questions/16612495/continue-certain-tasks-in-grunt-even-if-one-fails/19673597 | static cg heap out of memory', NULL),
(0, 'https://github.com/juliangruber/brace-expansion/', '265f6cd6586383eebebbfc3c45da2eaa153d9e63', 'Tape', 'Yes', 22, 10, 13, 13, 14, 'index.js, test**', ':)', NULL),
(0, 'https://github.com/tobli/alto-saxophone/', 'aaea13fd1eb9cdddc2a38f55effe25c99f0ead41', 'Saját?', 'Yes', 5.9, 2, 1, 4, 2, 'index.js, test.js', 'sudo apt-get install libgconf-2-4', NULL),
(0, 'https://github.com/jonschlinkert/randomatic/', '833f31a5aac0b8c2ddd3ae23ab41a0145c2974d0', 'Mocha', 'Yes', 6.8, 5, 1, 11, 2, 'test.js, examples.js, benchmark/**', 'Not injected properly', NULL),
(0, 'https://github.com/zeit/ms/', 'b83b36d7266fb1bd779fd19a2f98bab17a04d999', 'Mocha', 'Yes', 6.8, 4, 4, 5, 6, 'tests.js', 'Filter \'tests\' from Static-Functions.csv', NULL),
(0, 'https://github.com/groupon/selenium-download/', '6c0b0a818024d07d6f8a770ac6feeec10cefd8ed', 'Mocha', 'Yes', 9.9, 74, 45, 50, 104, 'test/**', 'remove posttest in package.json', NULL),
(0, 'https://github.com/cure53/DOMPurify/', '6ffa241f4f317648c76e082ac3d3b7d9ec32fa67', 'QUnit', 'Yes', 21023.2, 183, 59, 228, 118, 'test/**', 'og: TOTAL: 2424 SUCCESS | inject:   Uncaught Error: Cannot find module \"inherits\"', NULL),
(0, 'https://github.com/gentooboontoo/js-quantities/', 'b42d087b96e1ff2c24cff801f3ab16950c0d3c76', 'Jasmine', 'Yes', 7600.1, 31326, 202, 3730, 100, 'bench/**, bin/**, build/**, helpers/**, spec/**', 'og: 126 tests, 445 assertions, 0 failures, 0 skipped | inject: 126 ok | acg heap out of memory', NULL),
(0, 'https://github.com/tschaub/grunt-gh-pages/', '04a5b857f91b0ad5a328bb6dc76f69e89de5c6cb', 'Mocha', 'Yes', 11.6, 61, 11, 73, 45, 'Gruntfile.js', 'og: 39 passing | inject: 39 passing', NULL),
(0, 'https://github.com/koajs/static-cache/', 'e34f6e2391b5986c591f43f743818c3aace8acec', 'Mocha', 'Yes', 2233, 12, 11, 12, 13, 'index.js, test/index.js', 'og 33 pass | inject: 0 pass 1 fail 2000ms timeout', NULL),
(0, 'https://github.com/socketio/engine.io-client/', '6045ccf5aa3ad5dbd976acb1e722a9692a5d55fb', 'Gulp', 'Yes', 48.1, 1018, 147, 403, 133, 'test/**', ':)', NULL),
(0, 'https://github.com/Financial-Times/polyfill-service/', 'fad0bcdc0f717ac1aa8ca0ebdf8bbcc6f105d4aa', 'Mocha', 'Yes', 639.1, 2629, 108, 1470, 164, 'test/**', 'og: 22 pass use --force to continue | ', NULL),
(0, 'https://github.com/balderdashy/sails/', 'b6ec834b8c86fde2523351691cf6c0abbbf6e730', 'Mocha', 'Yes', 34.9, 1799, 555, 579, 370, 'test/**', 'LONG INSTRUMENTING socket.io module error. fix: https://github.com/chjj/tty.js/issues/168  | \"socket.io\": \"2.2.0\" | node 11 | OG npm test: Error: Timeout of 60000ms exceeded  => ', NULL),
(0, 'https://github.com/josdejong/mathjs/', '4a9378789a50cd2b1f53803f3eb2a82fbc1c9ee4', 'Mocha', 'Running...', 15584.3, 189000, 212, 8635, 13258, 'test/**', 'og: 4056b | inject is at 800 | | if token != \'}\' -> }\' removes quotation for some reason | mathjs/helpers/expression/parse.js:2299 SyntaxError: Invalid or unexpected token |  og: 4056 pass 20 pending 4 fail | ', NULL),
(0, 'https://github.com/crypto-browserify/crypto-browserify/', 'fcf43d806e629fff64bed2db2829c44c6fa80523', 'Tape', 'Yes', 10.3, 181, NULL, 91, 75, 'index.js, test/**, example/**', 'very slow', NULL),
(0, 'https://github.com/websockets/ws/', 'acce83e6c65f1b14df16da4f6d67232ff0be73a6', 'Mocha', 'Running...', NULL, NULL, NULL, NULL, NULL, 'test/**', 'og: 274 pass | inject: maximum call stack size exceeded', NULL),
(0, 'https://github.com/ipfs/aegir/', 'eebd9de703f74de40c09c22a1df9cd21504070a1', 'Mocha Playwright', 'Not Even', NULL, NULL, NULL, NULL, NULL, 'src/**', 'babel bug: cwd undefined', NULL),
(0, 'https://github.com/brisket/brisket/', '4564824f2797fc4f738978cf609af61f1e3b90b6', 'Jasmine', 'Not even', NULL, NULL, NULL, NULL, NULL, 'helpers/**', 'npm test fails : Error: Could not locate the bindings file.', NULL),
(0, 'https://github.com/rendrjs/rendr/', 'e634b61b602870017aec1312424446e1d7c2a289', 'Mocha', 'Not even', NULL, NULL, NULL, NULL, NULL, '-', 'npm install fails', NULL),
(0, 'https://github.com/pouchdb/pouchdb/', 'c8be9031230c6ca9c94bf935d0fbc53298c82516', 'Mocha (w Mockery) Tape', 'Not even', NULL, NULL, NULL, NULL, NULL, 'tests/**', 'Error: Could not locate the bindings file. Tried:', NULL),
(0, 'https://github.com/dcodeIO/ClosureCompiler.js/', '923250af8c94154bdbc48f61230af1adf2543173', 'Jest', 'Not even', NULL, NULL, NULL, NULL, NULL, 'test/**', 'Error: Java is not available, neither the bundled nor a global one.', NULL),
(0, 'https://github.com/chriso/validator.js/', '9302e5c400e1ab5f05e74ae386c3914d7270a367', 'Mocha', 'Not even', NULL, NULL, NULL, NULL, NULL, '-', 'npm install fails', NULL),
(0, 'https://github.com/Automattic/mongoose/', '98e8e1067d7f85b518b423599178d8c38d93d556', 'Mocha', 'Not even', NULL, NULL, NULL, NULL, NULL, 'test/**', 'need database', NULL),
(0, 'https://github.com/actionhero/actionhero/', 'c443e24462ebe23677f8e67e0bc8a89c1a237390', 'Jest Puppeteer', 'Not even', NULL, NULL, NULL, NULL, NULL, '__tests__/**', 'og npm test is extinct', NULL),
(0, 'https://github.com/airbrake/node-airbrake/', '210a045148fe5ccd0198757e71ee0563813f8a31', 'sinon', 'Not even', NULL, NULL, NULL, NULL, NULL, 'index.js, helpers/**', 'TypeError: os.tmpDir is not a function | Fix: node > 12 | -> Error: Got an invalid response from Node Security', NULL),
(0, 'https://github.com/TryGhost/Ghost/', '8993eb937f1be0352ed639765d2d366808be64e8', 'Mocha Lint', 'Not even', NULL, NULL, NULL, NULL, NULL, 'index.js, test**', '/test/pdfs/invalidfile.pdf not found', NULL),
(0, 'https://github.com/hapijs/inert/', 'b9cf3bd96cb2e28d05d120bbd27ee84a99b365d9', 'Lab Lint', 'No', NULL, NULL, NULL, NULL, NULL, 'test/**', '80/81 test failed ', NULL),
(0, 'https://github.com/mapbox/mapbox.js/', 'ebba8b0d3727b9373a27b27e996210aada8f99a1', 'Mocha', 'No', NULL, NULL, NULL, NULL, NULL, 'test/**', 'expect.Assertion undefined', NULL),
(0, 'https://github.com/rubenv/angular-gettext/', '21eacfdbe495738d9617bac2fd3cfd71d43f173a', 'Grunt', 'No', NULL, NULL, NULL, NULL, NULL, '-', 'karma:unit not found', NULL),
(0, 'https://github.com/electron/electron/', '851f490168747b450d16eb992a95095246853ef4', 'Saját Mocha', 'No', NULL, NULL, NULL, NULL, NULL, '-', 'python script raise error', NULL),
(0, 'https://github.com/NodeBB/NodeBB/', 'cf825d02b79854ddb81bd53074e30521742e80fd', 'Jest', 'No', NULL, NULL, NULL, NULL, NULL, '-', 'Please, add parameters for test database in config.json', NULL),
(0, 'https://github.com/sequelize/sequelize/', '7dc35e3889e3fa0859b96be41092717444cc2a38', 'Jasmine', 'Error', NULL, NULL, NULL, NULL, NULL, 'index.js, test/**', 'module.exports shitty js style | Helpers is not defined -> Need to install Postgres, SQLite, MySQL', NULL),
(0, 'https://github.com/hakimel/reveal.js/', 'c7077cf798326d820a520f2692c5ae29e2f7b4dd', 'Grunt', 'No', NULL, NULL, NULL, NULL, NULL, 'test/**', 'PhantomJS wrong version', NULL),
(0, 'https://github.com/dojo/dojo/', 'e96395df218d616b70914dfc46d2a526105994eb', 'Dojo (?)', 'No', NULL, NULL, NULL, NULL, NULL, '-', 'convert requireJS to commonJS | https://github.com/villadora/require2commonjs', NULL),
(0, 'https://github.com/ljharb/qs/', '8bd4c6cf12898f469838980317fec92007e5112a', 'Tape', 'Yes', 8, 78, 4, 57, 28, 'manually: test/index.js', 'og 252 passing | node < 12 | manually inject to test/index.js and manually run test/index.js', NULL),
(0, 'https://github.com/c3js/c3/', 'f55c03bf02a4bf057408e40c1f907be5ec4a1d28', 'Jasmine (w Karma)', 'Error', NULL, NULL, NULL, NULL, NULL, 'spec/**', 'og 381 passing, 11 failed | Can\'t use require() with PhantomJS', NULL),
(0, 'https://github.com/LivelyKernel/life_star/', 'e4edc42cf521decb80a30354ccd11d1c00cd4691', 'UnitJS', 'Error', NULL, NULL, NULL, NULL, NULL, '-', 'require() of ES modules is not supported.', NULL),
(0, 'https://github.com/socketio/engine.io/', '605af3a9d952e7e808879405b931de0aabb11085', 'Mocha', 'Yes', 9.2, 165, 9, 103, 105, 'test/*', 'nvm 11 | add { \"s\": \"0.1.1\" } dependency to package.json', NULL),
(0, 'https://github.com/markdown-it/markdown-it/', 'abce4475778c9d079f36882ec5105efa929ff932', 'Mocha', 'Yes', 9066.6, 5732, 270, 981, 197, 'test/*.js', 'og: 710 passing | removed /* ( */ | .eslintignore | 2000ms timeout -> died at 582/710', NULL),
(0, 'https://github.com/jonschlinkert/remarkable/', 'dc1c2de05a69267c13a02f5144f2c6e34b74cd19', 'Mocha', 'Yes', 6482.9, 4149, 322, 956, 260, 'test/**', 'og: 617 passing | removed /* ( */ | .eslintignore | stack size exceeded  -> dead at 479/619', NULL),
(0, 'https://github.com/tgriesser/knex/', 'd6a66c150cdc6fc2271ec8608f510f1971b890ab', 'Mocha Tape', 'Error', NULL, NULL, NULL, NULL, NULL, 'knex.js', 'events.js:160 throw er; // Unhandled \'error\' event | https://stackoverflow.com/questions/44021363/node-js-events-js-163-throw-er-when-executing-jest-with-flag-runinband', NULL),
(0, 'https://github.com/janl/mustache.js/', '53b1c955f94308eb4f78216557a901c988e09a1a', 'Mocha Puppeteer', 'Yes', 11, 192, 2, 78, 40, 'test/**', 'og 139 pass | TypeError: require(…).inject(...) is not a function | ', NULL),
(0, 'https://github.com/sindresorhus/decamelize/', '18479821851414d91ad3d42d8560adff5969da4b', 'Ava', 'Yes', 8.9, 1, 1, 2, 2, 'index.js, test.js', 'nvm 12 |  \"test\": \"xo --ignore ./ && ava\" | replace import with require', NULL),
(0, 'https://github.com/digitalbazaar/forge/', 'fb2467d75e4bb092bd33e15c143a7d2856d1da13', '<no unit testing framework>', '-', NULL, NULL, NULL, NULL, NULL, 'helpers/**', NULL, NULL),
(0, 'https://github.com/aheckmann/gm/', '7c7dd392d9b7a887a04dd2fef64c3a90958c82a2', 'make assert', 'Error', NULL, NULL, NULL, NULL, NULL, 'test/**', '/bin/sh: 1: gm: not found', NULL),
(0, 'https://github.com/zeit/serve/', 'c483741b40508e8b70cb09153070467f65221620', '<no unit testing framework>', '-', NULL, NULL, NULL, NULL, NULL, 'bin/**', NULL, NULL),
(0, 'https://github.com/emberjs/ember.js/', 'd9977d62b26534555c0708acde0e7ae029e6d8ea', 'QUnit', NULL, NULL, NULL, NULL, NULL, NULL, '-', 'run \'rake test\'', NULL),
(0, 'https://github.com/tinymce/tinymce/', '92c04da4d7f956c624517c03393275bba47350b9', 'Grunt', NULL, NULL, NULL, NULL, NULL, NULL, 'manually', 'PhantomJS timeout', NULL),
(0, 'https://github.com/nodejs/node/', '7840f713ce1aad3fa3933032aabc25df2718bc98', 'Saját', NULL, NULL, NULL, NULL, NULL, 60, 'test/**', 'Manually to test/parallel use test-runner.py | njsTrace tracing same functions for all different test case?', NULL),
(0, 'https://github.com/Strider-CD/strider-sauce/', '7d083aed889e26f3a3bc821c04791ae1f4721699', '<no unit testing framework>', '-', NULL, NULL, NULL, NULL, NULL, '-', 'no unit tests', NULL),
(0, 'https://github.com/zurb/foundation-sites/', '880b4cfed1971b928658095c08060768100f62d7', 'Grunt', NULL, NULL, NULL, NULL, NULL, NULL, 'js/**', 'should install gem & bower & bundler', NULL),
(0, 'https://github.com/microsoft/ChakraCore/', 'd969210010802d2c23f2231e1fedd3ad6aa78db3', 'Saját', NULL, NULL, NULL, NULL, NULL, NULL, 'helpers/**', 'Need cxx and cc path', NULL),
(0, 'https://github.com/ether/etherpad-lite/', '6d9264cf3cd7f5d33c49592a86752b9856de9e3c', 'Istanbul Mocha', NULL, NULL, NULL, NULL, NULL, NULL, 'src/**', '../../settings.json not found', NULL),
(0, 'https://github.com/zhuangya/node-slug/', '85ded30a95760b19cd223abe668eade0279a21f2', '<Not found/Private>', '-', NULL, NULL, NULL, NULL, NULL, '-', '-', NULL),
(0, 'https://github.com/DCKT/localhost-now/', 'f12b06949298ebfc88e65a287cb71fa79c4e42ab', '<no unit testing framework>', '-', NULL, NULL, NULL, NULL, NULL, '-', NULL, NULL),
(0, 'https://github.com/omphalos/crud-file-server/', '0c45fc64f0c0aeb23fe515c95e29f6485803de65', '<no unit testing framework>', '-', NULL, NULL, NULL, NULL, NULL, '-', NULL, NULL),
(0, 'https://github.com/cloudcmd/console-io/', '1be43abe6df23edc79f4bc6a9de8e3238f8386a1', '<no unit testing framework>', '-', NULL, NULL, NULL, NULL, NULL, '-', NULL, NULL),
(0, 'https://github.com/vvo/node-whereis/', 'b8b642b1163baa37f15ed49b4064dcbdb6e1876c', 'tap', 'Yes', 6.5, 32, 3, 17, 6, 'test.js', ':)', NULL),
(0, 'https://github.com/giggio/node-chromedriver/', '5e7fd13bdbfc355f506746866b052501d302ab39', 'Saját', NULL, NULL, NULL, NULL, NULL, NULL, 'testInstall.js', NULL, NULL),
(0, 'https://github.com/cnpm/node-operadriver/', 'b9ec685a6942265855db39b1544fc43e4d7b1bb7', '<no unit testing framework>', '-', NULL, NULL, NULL, NULL, NULL, '-', NULL, NULL),
(0, 'https://github.com/hypery2k/galenframework-cli/', '2415f1e9170b8ee3e495f2731f34ca4ae11c27dc', '<no unit testing framework>', '-', NULL, NULL, NULL, NULL, NULL, 'test/**', NULL, NULL),
(0, 'https://github.com/angular/angular.js/', '1adf29af13890d61286840177607edd552a9df97', 'Grunt', NULL, NULL, NULL, NULL, NULL, NULL, 'test/**', 'node < 7 | Grunt: cannot find module \'liftoff\' -> nvm install v14.16.1, npm install -g grunt-cli, npm install grunt', NULL),
(0, 'https://github.com/facebook/react/', '3e455a43975a34daac7dca978cbcc43c5a9d4ab1', 'Grunt', NULL, NULL, NULL, NULL, NULL, NULL, 'scripts/**', 'node < 7 | Grunt: cannot find module \'liftoff\' -> nvm install v14.16.1, npm install -g grunt-cli, npm install grunt', NULL),
(0, 'https://github.com/textAngular/textAngular/', 'b58c7e7428b98377d51ad0c74ef9352b9e0e05b0', 'Jasmine Travis CI', NULL, NULL, NULL, NULL, NULL, NULL, 'test/**, src/**', 'Download older phantomJS version', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
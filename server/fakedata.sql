-- Not all of this data is valid according to the schema
-- Should help with testing whether the database rejects invalid data

insert into users (userid, email, firstname, lastname, password, pfppath, githubtoken, bio) values
    (1, 'lpittet0@reddit.com', 'Louise', 'Pittet', '30d869f2a8459ceabd6828ff3ce89e522e338e53efba9ec210972d71aba72727', 'http://dummyimage.com/237x100.png/ff4444/ffffff', '0a8a5b47d799538e7dc62d57cce19298793f7777be82cdf2479f75c111b20ac0', 'Enterprise-wide non-volatile function'),
    (2, 'kpoile1@mozilla.org', 'Kriste', 'Poile', 'eb9ea74bda05c854451f9a498db1551f18b239e5f7783d13b0923d3238705739', 'http://dummyimage.com/113x100.png/ff4444/ffffff', '8d1dd31381f4052606cad529fd4d45b4e6c90916ef7df77196862cfe2934732f', 'Digitized optimal synergy'),
    (3, 'skilban2@rambler.ru', 'Shel', 'Kilban', 'a67ee6cdfc440ae7fe5bc120aed87c27fd6f361610b29ceb4c699411dbce8404', 'http://dummyimage.com/168x100.png/cc0000/ffffff', '6802ae8559b3a7cc04e5e3acccc56ed10c3c1cf07633fe1381eea2e34fadd465', 'Progressive asymmetric algorithm'),
    (4, 'wloddy3@sphinn.com', 'Walden', 'Loddy', '18d4ab999a4f89bd66a6192e0f822ef7e9854c68f2a3e965556bf9fd45e68550', 'http://dummyimage.com/158x100.png/cc0000/ffffff', '1ebbc146b16ddc0d55dd25ea0158cbb1fbbcb89228a663c05e876a950aeaf109', 'Progressive eco-centric toolset'),
    (5, 'henticott4@intel.com', 'Hanan', 'Enticott', '8386a7cde329af18add7fc2648c7c4102f3251b368d60bd7eef2abd92ffb0d13', 'http://dummyimage.com/210x100.png/5fa2dd/ffffff', '395a7700dac1f84285fb410a87accac5398e9767b54b78606b088220685deab1', 'Versatile tertiary initiative'),
    (6, 'sreasun5@stumbleupon.com', 'Slade', 'Reasun', 'da09a6a1468da734c1983f89eeeabe3e966fc93719313ac5fb3521e7b12e0b86', 'http://dummyimage.com/188x100.png/ff4444/ffffff', 'c699ddf02f2f19ec65b2aae79e234682455c958792103182d2314305aa625afd', 'Profound secondary policy'),
    (7, 'tdinnage6@google.pl', 'Tomaso', 'Dinnage', '84a0fd1bb0ec26e8aca1a063d300de75f356e5cf0515b0e9763869cf8101d30a', 'http://dummyimage.com/191x100.png/ff4444/ffffff', '8e52ff264fa3347ca8690486dddc9531fa1dbb7807ad8dca8f0b5bff7c6c14d5', 'Implemented neutral firmware'),
    (8, 'bharler7@guardian.co.uk', 'Baldwin', 'Harler', '5a4c3c23acf46e2d37ab74bed361e811df17ccd466b94937b44897edfab7350c', 'http://dummyimage.com/114x100.png/ff4444/ffffff', '8f00a061baf9a424af0f1444d252fec12ac8c2df23258a06f78355b8edac450f', 'Object-based tangible focus group'),
    (9, 'dmolineux8@cam.ac.uk', 'Dario', 'Molineux', '93e08289909afa7c46e102dc910b665cae20b1268cd90abd9c35a86c8184ce4a', 'http://dummyimage.com/108x100.png/dddddd/000000', '49a3c4457fa7a85dbd7ea5d9265d4574cb510ca124e07dfa1583788a9be756ed', 'Reactive client-driven firmware'),
    (10, 'dlangston9@biblegateway.com', 'Dom', 'Langston', '93efcd4f7d413b510a9a4f7f64e67c0d365c22a717927fd3d397d01371f2a939', 'http://dummyimage.com/105x100.png/dddddd/000000', '62f00308862e86fd5e61c8ea0de0e375da6d6f5ad7a80eb3ae059209341851a2', 'Open-source multimedia conglomeration');

insert into projects (projectid, projectname, closed, opened, deadline, brief, budget) values
    (1, 'Voyatouch', default, '2024-04-28 23:13:52', '2024-09-01 17:16:53', 'Face to face modular matrices', 943673),
    (2, 'Latlux', default, '2024-03-16 08:25:23', '2024-05-04 09:37:19', 'Centralized bifurcated productivity', 234844),
    (3, 'Stringtough', default, '2024-02-20 01:04:07', '2024-08-28 06:08:47', 'Cross-group didactic local area network', 84275),
    (4, 'Bitchip', default, '2024-06-30 05:24:41', '2024-07-13 13:14:26', 'Reverse-engineered radical implementation', 607954),
    (5, 'Veribet', default, '2024-02-20 11:08:39', '2024-03-11 08:23:35', 'Persistent multi-tasking protocol', 508067);

INSERT INTO userproject (userid, projectid, role, ismanager)
VALUES
    (1, 1, 'Developer', false),
    (2, 1, 'Developer', false),
    (3, 1, 'Manager', true),
    (4, 2, 'Manager', true),
    (1, 3, 'Developer', false),
    (2, 3, 'Manager', true),
    (3, 3, 'Developer', false),
    (4, 3, 'Developer', false),
    (1, 4, 'Manager', true),
    (2, 4, 'Developer', false),
    (3, 4, 'Developer', false),
    (4, 4, 'Developer', false);


INSERT INTO features (featureid, projectid, featurename, featuredesc, starttime, endtime, completed, difficulty, priority, status, currentrisk, progress, members)
VALUES 
    (1,1, 'User Management', 'Implement user management functionality for the website', '2023-03-10 09:00:00', '2023-03-17 18:00:00', false, 6, 1, 2, 20, 60, 2),
    (2,1, 'Payment Gateway', 'Integrate payment gateway for online transactions', '2023-03-20 09:00:00', '2023-04-02 18:00:00', false, 8, 2, 2, 40, 30, 1),
    (3,2, 'Social Media Sharing', 'Add social media sharing functionality to the website', '2023-03-15 10:00:00', '2023-03-22 18:00:00', false, 5, 1, 2, 30, 50, 3),
    (4,3, 'Product Catalog', 'Create product catalog for the online store', '2023-03-10 09:00:00', '2023-03-25 18:00:00', false, 9, 2, 2, 50, 70, 2),
    (5,3, 'Search Functionality', 'Add search functionality to the website', '2023-03-30 09:00:00', '2023-04-06 18:00:00', false, 4, 3, 2, 10, 20, 1),
    (6,4, 'Database Optimization', 'Optimize database for faster queries', '2023-03-15 09:00:00', '2023-03-25 18:00:00', false, 7, 1, 2, 25, 60, 2),
    (7,4, 'UI Improvements', 'Improve user interface design based on feedback', '2023-04-01 09:00:00', '2023-04-10 18:00:00', false, 3, 3, 2, 5, 40, 1);

insert into tasks (taskid, featureid, devid, taskname, description, starttime, endtime, priority, status) values
    (1, 8, default, 'Devolved global structure', 'Progressive zero tolerance definition', '2024-07-21 15:23:19', '2024-11-23 21:22:56',0, 1),
    (2, 7, 9, 'Business-focused didactic secured line', 'Re-engineered regional process improvement', '2024-07-19 22:01:14', '2025-02-05 08:39:15',0, 1),
    (3, 3, default, 'Diverse zero defect moderator', 'Multi-layered secondary initiative', '2024-09-16 00:35:26', '2025-01-29 19:22:00',0, 1),
    (4, 12, 5, 'Future-proofed regional customer loyalty', 'Versatile local website', '2024-05-20 16:11:34', '2024-10-16 23:56:24',0, 1),
    (5, 14, default, 'Right-sized mission-critical interface', 'Organic regional complexity', '2024-04-19 23:33:35', '2024-10-22 19:57:54',0, 1),
    (6, 18, 1, 'Right-sized 24 hour project', 'Integrated reciprocal knowledge base', '2024-08-15 06:25:52', '2024-09-02 07:32:05',0, 1),
    (7, 4, 10, 'Optional hybrid projection', 'Organized foreground core', '2024-08-20 20:21:33', '2024-08-30 10:34:15',0, 1),
    (8, 7, default, 'Progressive heuristic software', 'User-centric secondary leverage', '2024-04-22 08:56:14', '2024-11-02 20:17:16', 0,1),
    (9, 16, 3, 'Distributed local support', 'Future-proofed cohesive framework', '2024-08-31 02:33:51', '2024-09-27 10:32:40',0, 1),
    (10, 15, 5, 'Compatible next generation infrastructure', 'Persistent client-driven encoding', '2024-04-16 12:55:22', '2024-06-21 08:57:58',0, 1),
    (11, 13, 5, 'Fully-configurable uniform matrices', 'Re-contextualized zero administration synergy', '2024-05-04 10:57:57', '2024-11-15 05:12:39',0, 1),
    (12, 15, default, 'Networked cohesive Graphical User Interface', 'Balanced even-keeled structure', '2024-06-01 05:40:49', '2024-06-12 01:43:32',0, 1),
    (13, 15, 3, 'Decentralized bifurcated toolset', 'Seamless radical artificial intelligence', '2024-07-06 07:36:19', '2024-10-25 13:38:19',0, 1),
    (14, 8, 8, 'Down-sized real-time contingency', 'Triple-buffered executive Graphic Interface', '2024-04-26 10:12:40', '2024-05-05 02:41:31',0, 1),
    (15, 14, 3, 'Future-proofed optimizing artificial intelligence', 'User-friendly uniform encoding', '2024-08-09 21:06:29', '2025-02-12 23:27:57',0, 1),
    (16, 8, 5, 'Distributed logistical instruction set', 'Integrated solution-oriented methodology', '2024-08-26 04:17:16', '2025-01-11 17:59:40',0, 1),
    (17, 8, 8, 'Cross-platform fault-tolerant encryption', 'Configurable motivating methodology', '2024-04-08 04:38:13', '2024-10-02 14:09:02', 0,1),
    (18, 19, default, 'Configurable discrete structure', 'Managed heuristic contingency', '2024-06-28 06:46:00', '2024-10-09 08:20:33',0, 1),
    (19, 1, 5, 'Organic demand-driven alliance', 'Visionary scalable contingency', '2024-09-15 11:11:14', '2024-12-20 07:25:26',0, 1),
    (20, 11, 7, 'Expanded bandwidth-monitored access', 'Networked methodical algorithm', '2024-08-14 17:01:47', '2024-12-26 05:28:40',0, 1),
    (21, 4, 6, 'Grass-roots scalable benchmark', 'Multi-channelled hybrid core', '2024-07-13 10:16:14', '2024-11-09 09:01:33',0, 1),
    (22, 1, 4, 'Sharable modular throughput', 'Team-oriented non-volatile success', '2024-05-02 03:16:08', '2024-12-29 08:40:01',0, 1),
    (23, 12, 1, 'Optimized zero tolerance contingency', 'Organic transitional flexibility', '2024-06-28 00:04:32', '2024-09-20 03:09:45',0, 1),
    (24, 18, 4, 'Automated explicit paradigm', 'Universal reciprocal system engine', '2024-06-22 00:33:48', '2024-07-25 04:14:48',0, 1),
    (25, 15, 6, 'Mandatory optimal hardware', 'Enhanced responsive hub', '2024-08-27 18:30:00', '2024-10-05 17:27:19',0, 1),
    (26, 5, 7, 'Optimized discrete system engine', 'Reverse-engineered methodical adapter', '2024-03-24 11:17:18', '2024-07-11 17:37:19',0, 1),
    (27, 20, default, 'Profit-focused user-facing focus group', 'Triple-buffered systemic product', '2024-04-15 11:16:09', '2025-02-11 11:11:35',0, 1),
    (28, 16, 5, 'Synergized upward-trending capacity', 'Cross-group encompassing array', '2024-03-31 19:10:21', '2024-12-26 05:04:22',0, 1),
    (29, 8, 9, 'Realigned 4th generation analyzer', 'Horizontal responsive Graphic Interface', '2024-04-08 10:54:58', '2024-05-20 17:10:04',0, 1),
    (30, 14, 7, 'Implemented modular extranet', 'Team-oriented demand-driven portal', '2024-04-17 03:54:04', '2024-10-01 11:30:08',0, 1);

insert into featuredep (featureid, depid) values
    (10, 16),
    (2, 14),
    (5, 18),
    (3, 11),
    (17, 14),
    (20, 9),
    (11, 20),
    (4, 7),
    (13, 4),
    (16, 9),
    (8, 2),
    (18, 12),
    (17, 16),
    (5, 11),
    (9, 17),
    (7, 19),
    (2, 1),
    (3, 11),
    (18, 2),
    (14, 6);

INSERT INTO bugs (bugid, featureid, devid, bugname, bugdesc, priority, severity)
VALUES
  (1, 1, 2, 'Null Pointer Exception', 'Application crashes when clicking button', 1, 2),
  (2, 2, 1, 'Authentication Bug', 'User can bypass login screen', 3, 3),
  (3, 3, 2, 'Broken Image Link', 'Image on homepage is not loading', 2, 1),
  (4, 4, 3, 'Database Connection Error', 'Cannot retrieve data from database', 2, 2),
  (5, 5, 4, 'Security Vulnerability', 'SQL injection vulnerability in search feature', 1, 3),
  (6, 6, 2, 'UI Bug', 'Button is not aligned properly', 3, 1),
  (7, 7, 4, 'Data Entry Bug', 'Cannot save new records', 2, 2),
  (8, 1, 6, 'Performance Issue', 'Page takes too long to load', 1, 3),
  (9, 2, 7, 'Functionality Bug', 'Cannot add items to cart', 2, 1),
  (11, 3, 9, 'Compatibility Issue', 'Does not work on Safari browser', 3, 2),
  (12, 3, 1, 'Display Bug', 'Text is overlapping', 1, 3),
  (13, 4, 8, 'Security Bug', 'Unencrypted password storage', 1, 2),
  (14, 5, 4, 'Functionality Bug', 'Cannot checkout with PayPal', 2, 1),
  (15, 6, 6, 'UI Bug', 'Font size is too small', 3, 2),
  (16, 7, 6, 'Authentication Bug', 'Password reset not working', 1, 3),
  (17, 3, 1, 'Performance Issue', 'Search takes too long to return results', 2, 1),
  (18, 2, 9, 'Data Entry Bug', 'Duplicate records created', 3, 2),
  (19, 4, 2, 'Functionality Bug', 'Cannot upload files', 1, 3),
  (20, 5, 3, 'UI Bug', 'Dropdown menu not working', 2, 1),
  (21, 1, 6, 'Security Bug', 'Unsecured API endpoint', 2, 2),
  (22, 6, 4, 'Functionality Bug', 'Cannot apply discount code', 3, 3),
  (23, 5, 5, 'UI Bug', 'Color scheme is inconsistent', 1, 2),
  (24, 1, 6, 'Authentication Bug', 'Cannot change password', 2, 1),
  (25, 3, 1, 'Functionality Bug', 'Cannot add product reviews', 3, 2),
  (26, 4, 7, 'Performance Issue', 'Orders take too long to process', 1, 3),
  (27, 3, 3, 'Display Bug', 'Images not loading in product gallery', 2, 2),
  (28, 2, 2,'Functionality Bug', 'Cannot create new account', 1, 1),
  (29, 4, 1, 'UI Bug', 'Icons are not centered', 3, 3);

INSERT INTO userskill (userid, skill, sklevel) VALUES
  (1, 'Java', 7),
  (1, 'Python', 9),
  (2, 'C++', 6),
  (2, 'JavaScript', 8),
  (3, 'C#', 5),
  (3, 'Ruby', 7),
  (4, 'Swift', 9),
  (4, 'Go', 7),
  (5, 'Kotlin', 6),
  (5, 'PHP', 8),
  (6, 'TypeScript', 7),
  (6, 'Scala', 9),
  (7, 'Assembly', 5),
  (7, 'R', 8),
  (8, 'HTML', 9),
  (8, 'CSS', 7),
  (9, 'JavaScript frameworks', 8),
  (9, 'Node.js', 6),
  (10, 'RESTful API design and development', 9),
  (10, 'Database integration', 7),
  (1, 'Web security', 8),
  (3, 'Responsive design and cross-browser compatibility', 6),
  (2, 'Server-side languages', 7),
  (4, 'Deployment and hosting', 9),
  (5, 'CMS', 6),
  (7, 'Debugging and problem-solving', 8),
  (8, 'SQL', 9),
  (9, 'NoSQL databases', 7),
  (2, 'Data modelling and normalization', 8),
  (3, 'Database administration', 6),
  (1, 'Data warehousing', 9),
  (6, 'Indexing and query optimization', 7),
  (7, 'Backup and recovery', 8),
  (8, 'Security and access control', 6),
  (3, 'Data migration', 7),
  (7, 'ETL processes', 9),
  (8, 'Agile', 8),
  (2, 'Waterfall', 6),
  (8, 'Lean', 7),
  (3, 'DevOps', 9),
  (5, 'Test-Driven Development (TDD)', 6),
  (6, 'Behaviour-Driven Development (BDD)', 8),
  (6, 'Feature-Driven Development (FDD)', 9),
  (4, 'Spiral', 7),
  (8, 'Rapid Application Development (RAD)', 8),
  (9, 'Extreme Programming (XP)', 6),
  (4, 'Hybrid', 7),
  (7, 'Git', 9),
  (8, 'SVN (Apache subversion)', 6),
  (3, 'Mercurial', 8),
  (5, 'Source control management concepts', 9),
  (6, 'Command line interface usage', 7),
  (9, 'Distributed version control systems', 8),
  (3, 'Collaborative development practices', 6),
  (9, 'Code reviews and issue tracking', 7),
  (3, 'Conflict resolution', 9),
  (5, 'Cloud platforms', 8),
  (6, 'Virtualization technologies', 6),
  (2, 'Infrastructure as Code (IAC) tools', 7),
  (1, 'Container orchestration', 9);

INSERT INTO projectskill (projectid, skill) VALUES
(1, 'Java'),
(1, 'Python'),
(1, 'JavaScript frameworks'),
(1, 'Node.js'),
(1, 'RESTful API design and development'),
(2, 'C++'),
(2, 'Python'),
(2, 'Database integration'),
(2, 'Web security'),
(2, 'Server-side languages'),
(3, 'Swift'),
(3, 'Go'),
(3, 'Kotlin'),
(3, 'Database administration'),
(3, 'Data warehousing'),
(4, 'PHP'),
(4, 'TypeScript'),
(4, 'CMS'),
(4, 'Debugging and problem-solving'),
(5, 'Scala'),
(5, 'Assembly'),
(5, 'Rapid Application Development (RAD)'),
(5, 'Hybrid'),
(5, 'Git'),
(2, 'C#'),
(1, 'Ruby'),
(3, 'SQL'),
(4, 'Data modelling and normalization'),
(2, 'Database administration'),
(5, 'HTML'),
(2, 'CSS'),
(3, 'JavaScript'),
(1, 'Responsive design and cross-browser compatibility'),
(4, 'Deployment and hosting'),
(5, 'NoSQL databases'),
(2, 'Data migration'),
(4, 'ETL processes'),
(5, 'Agile'),
(3, 'Waterfall'),
(2, 'DevOps'),
(3, 'Test-Driven Development (TDD)'),
(4, 'Feature-Driven Development (FDD)'),
(2, 'Source control management concepts'),
(3, 'Collaborative development practices'),
(4, 'Windows administration'),
(4, 'Linux administration'),
(2, 'MacOS administration'),
(4, 'Command line usage'),
(3, 'Virtualization'),
(4, 'Networking protocols'),
(2, 'Router and switch configuration'),
(3, 'Firewall administration'),
(4, 'VPN setup'),
(2, 'Network security'),
(5, 'iOS development'),
(1, 'Android development'),
(2, 'Mobile UI and UX design'),
(4, 'RESTful API integration'),
(2, 'Database design and integration'),
(5, 'Mathematical foundations'),
(2, 'Deep learning frameworks'),
(3, 'Natural language processing (NLP)'),
(2, 'Cloud computing for AI and ML'),
(1, 'Experimentation and iteration in model development');






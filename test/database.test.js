const test = require("tape");
const runDbBuild = require('../src/database/build');
const addPost = require('../src/model/addPost');
const addUser = require('../src/model/addUser');
const getPost = require('../src/model/getPosts');
const getUser = require('../src/model/getUser');

test('test getuser from users table', (t) => {
  runDbBuild('build.sql', (err, res) => {
    getUser('asd@asd.com').then((result) => {
      t.equal(typeof result, 'object', 'should return object');
      t.end();
    })
  });
})

// test('test getPost from posts table', (t) => {
//   runDbBuild();
//   getPost().then((result) => {
//     t.equal(result.rows.length, 2, 'should return 2');
//     t.end();
//   })
// })

// test('test addPost from posts table', (t) => {
//   runDbBuild();
//   addPost('addfdsffdth',1).then(() => {
//     getPost().then((result) => {
//       t.equal(result.rows.length, 3, 'should return 3');
//       t.end();
//     })
//   })
// })

// test('test addUser from users table', (t) => {
//   runDbBuild();
//   addUser('asffd', 'resddff', 'asdd@asfd.com', '$2a$05$4ZI8rNffE53KoLw40vBYKzcO1CUKICCKO7LkEfbQ.Gjk0mNKV20Rycu').then(() => {
//     getUser('asdd@asfd.com').then((result) => {
//       t.equal(result.rows[0].email, 'asdd@asfd.com', 'should return the same email');
//       t.end();
//     })
//   })
// })

test.onFinish(() => {
  process.exit(0);
})

const { getUserData, getRoleByUserList, getUserPermission, getUserStatus } = require('./function');

const main = () => {
  
//   getUserData().then((users) => {
//     getRoleByUserList(users).then((usersWithRole) => {
//       console.log(usersWithRole);
//     });
//   });

  /**
   * Fix by promise chaining
   */
  console.time('process');
  getUserData()
    .then((users) => getRoleByUserList(users))
    .then((usersWithRole) => getUserPermission(usersWithRole))
    .then((usersWithPermissions) => getUserStatus(usersWithPermissions))
    .then((userList) => {
      console.log(userList);
      console.timeEnd('process');
    });
  // console.timeEnd('process');
};


main();
const { getUserData, getRoleByUserList, getUserPermission, getUserStatus } = require('./function');

// const main = async () => {
//     console.time('process');
//     const users = await getUserData();
//     const usersWithRole = await getRoleByUserList(users);
//     console.log(usersWithRole);
//     console.timeEnd('process');
// };
// main();

(async () => {
    console.time('process');
    const users = await getUserData();
    const usersWithRole = await getRoleByUserList(users);
    const usersWithPermissions = await getUserPermission(usersWithRole);
    const userList = await getUserStatus(usersWithPermissions);
    console.log(userList);
    console.timeEnd('process');
})();

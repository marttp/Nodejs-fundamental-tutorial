const { getUserData, getRoleByUserList, getUserPermission, getUserStatus } = require('../callback-promise-async/12-async-await/function');

(async () => {
    console.time('process');
    const users = await getUserData();
    const [usersWithRole, userWithStatus] = await Promise.all([
        getRoleByUserList(users),
        getUserStatus(users)
    ]);
    const usersWithPermissions = await getUserPermission(usersWithRole);
    const userList = usersWithPermissions.map(user => {
        const userStatus = userWithStatus.find(userStatus => userStatus.id === user.id);
        return {
            ...user,
            status: userStatus.status,
        }
    })
    console.log(userList);
    console.timeEnd('process');
})();
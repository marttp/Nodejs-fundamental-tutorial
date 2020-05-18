const { users, usersStatus, roles, rolePermissions } = require('../callback-promise-async/data');
const sleep = require('util').promisify(setTimeout);

const getUserList = async () => {
    await sleep(1 * 1000);
    return users;
}

const getRoles = async () => {
    await sleep(1 * 1000);
    return roles;
};

const getUsersStatus = async () => {
  await sleep(1 * 1000);
  return usersStatus;
};

const getPermissions = async () => {
  await sleep(1 * 1000);
  return rolePermissions;
};

(async () => {
    console.time('process');
    const [usersList, roleOfUserList, rolePermissionList, statusOfUserList] = await Promise.all([
        getUserList(),
        getRoles(),
        getPermissions(),
        getUsersStatus(),
    ]);
    const userList = usersList.map(user => {
        const role = roleOfUserList.find(role => role.id === user.roleId);
        return {
            ...user,
            role: role
        };
    }).map(user => {
        const permissions = rolePermissionList.find(rolePermission => rolePermission.roleId === user.roleId);
        return {
            ...user,
            permissions: permissions.permissionsList
        };
    }).map(user => {
        const statusUser = statusOfUserList.find(status => status.userId === user.id);
        return {
            ...user,
            status: statusUser.status
        };
    });
    console.log(userList);
    console.timeEnd('process');
})();

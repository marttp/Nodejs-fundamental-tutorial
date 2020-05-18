const { users, usersStatus, roles, rolePermissions } = require('../data');
const sleep = require('util').promisify(setTimeout);

// async ketword จะทำให้ function กลายเป็น promise ทันที

const getUserData = async () => {
    await sleep(1 * 1000);
    return users;
}

const getRoleByUserList = async (users) => {
    await sleep(1 * 1000);
    return users.map(user => {
        const role = roles.find(role => role.id == user.roleId);
        return {
            ...user,
            role: role,
        };
    });
};

const getUserStatus = async (users) => {
  await sleep(1 * 1000);
  return users.map((user) => {
    const status = usersStatus.find((status) => status.userId == user.id);
    return {
      ...user,
      status: status.status,
    };
  });
};

const getUserPermission = async (users) => {
  await sleep(1 * 1000);
  return users.map((user) => {
    const rolePermission = rolePermissions.find(
      (rolePermission) => rolePermission.roleId === user.roleId
    );
    return {
      ...user,
      permissions: rolePermission.permissionsList,
    };
  });
};

module.exports = {
    getUserData,
    getRoleByUserList,
    getUserStatus,
    getUserPermission
}
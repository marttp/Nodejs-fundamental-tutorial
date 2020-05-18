const { users, usersStatus, roles, rolePermissions } = require('../data');

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users);
        }, 1 * 1000);
    });
}

function getRoleByUserList(users) {
    return new Promise((resolve, reject) => {
        const usersWithRole = users.map(user => {
            const role = roles.find(role => role.id == user.roleId);
            return {
                ...user,
                role: role,
            }
        })
        setTimeout(() => {
            resolve(usersWithRole);
        }, 1 * 1000);
    });
};

function getUserStatus(users) {
  return new Promise((resolve, reject) => {
    const usersWithStatus = users.map((user) => {
      const status = usersStatus.find((status) => status.userId == user.id);
      return {
        ...user,
        status: status.status,
      };
    });
    setTimeout(() => {
      resolve(usersWithStatus);
    }, 1 * 1000);
  });
}

function getUserPermission(users) {
  return new Promise((resolve, reject) => {
    const userWithPermissions = users.map((user) => {
      const rolePermission = rolePermissions.find(
        (rolePermission) => rolePermission.roleId === user.roleId
      );
      return {
        ...user,
        permissions: rolePermission.permissionsList,
      };
    });
    setTimeout(() => {
      resolve(userWithPermissions);
    }, 1 * 1000);
  });
}

module.exports = {
    getUserData,
    getRoleByUserList,
    getUserStatus,
    getUserPermission
}
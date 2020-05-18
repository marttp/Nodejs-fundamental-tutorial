const { users, usersStatus, roles, rolePermissions } = require('../data');

function getUserData(callback) {
    setTimeout(() => {
        callback(users);
    }, 1 * 1000);
}

function getRoleByUserList(users, callback) {
    const usersWithRole = users.map((user) => {
      const role = roles.find((role) => role.id == user.roleId);
      return {
        ...user,
        role: role,
      };
    });
    setTimeout(() => {
        callback(usersWithRole);
    }, 1 * 1000);
};

function getUserStatus(users, callback) {
    const usersWithStatus = users.map((user) => {
        const status = usersStatus.find((status) => status.userId == user.id);
        return {
          ...user,
          status: status.status,
        };
      });
      setTimeout(() => {
          callback(usersWithStatus);
      }, 1 * 1000);
}

function getUserPermission(users, callback) {
    const userWithPermissions = users.map((user) => {
        const rolePermission = rolePermissions.find((rolePermission) => rolePermission.roleId === user.roleId);
        return {
          ...user,
          permissions: rolePermission.permissionsList
        };
      });
    setTimeout(() => {
        callback(userWithPermissions);
    }, 1 * 1000);
}

module.exports = {
    getUserData,
    getRoleByUserList,
    getUserStatus,
    getUserPermission
}
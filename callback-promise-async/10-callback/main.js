const { getUserData, getRoleByUserList, getUserPermission, getUserStatus } = require('./function');

const main = () => {
    console.time('process');
    getUserData((users) => {
        getRoleByUserList(users, (usersWithRole) => {
            console.log(usersWithRole);
            console.timeEnd('process');
        });
    });
    // getUserData((users) => {
    //     getRoleByUserList(users, (usersWithRole) => {
    //         getUserPermission(usersWithRole, (usersWithPermissions) => {
    //             getUserStatus(usersWithPermissions, (userList) => {
    //                 console.log(userList);
    //                 console.timeEnd('process');
    //             })
    //         })
    //     });
    // });
    // console.timeEnd('process');
};

main();
const users = ['david1019', 'covid2019'];

const checkRegisterForm = (username = '', password = '') => {
    const status = {
        success: true,
        message: 'Username is valid'
    };
    try {
        if (users.includes(username)) throw 'Username already exist';
        if (password.length < 8) throw 'Password too short. Minimum 8 characters';
    } catch (error) {
        status.success = false;
        status.message = error;
    }
    return status;
}

const divide = (op1 = 0, op2 = 0) => {
    try {
        // Use op3 instead op2
        return op1 / op3;
    } catch (error) {
        console.log(error);
        return 0;
    }
}

const main = () => {
    console.log(divide(10, 2));
    const result = checkRegisterForm('david1019', '123456789');
    console.log(result);
};

main();

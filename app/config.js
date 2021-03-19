const config = {
    server: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 5300,
    },
    db: {
        uri: process.env.DB_URI,
    }
};

module.exports = config;

// const config = {
//     server: {
//         secret: process.env.SECRET || 'keyboardcat',
//         bcrypt: {
//             rounds: Number.parseInt(process.env.BYCRYPT_ROUNDS) || 10,
//         },
//         jwt: {
//             expiresIn: process.env.JWT_EXPIRES || '100m',
//         },
//     },
// };

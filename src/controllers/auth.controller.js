const register = (req, res) => {
    res.send('register')
}

const login = (req, res) => {
    res.send('login')
}

const sendVerificationEmail = (req, res) => {
    res.send('sendVerificationEmail')
}

const emailVerification = (req, res) => {
    res.send('emailVerification')
}

const refreshTokens = (req, res) => {
    res.send('refreshTokens')
}

const forgotPassword = (req, res) => {
    res.send('forgotPassword')
}

module.exports = {
    register,
    login,
    sendVerificationEmail,
    emailVerification,
    refreshTokens,
    forgotPassword,
}

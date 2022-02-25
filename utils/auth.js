// Authorization function for validiting a user is logged into a session
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect("/login");
    } else {
        next();
    }
};

module.exports = withAuth;
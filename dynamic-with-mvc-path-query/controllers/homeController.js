exports.homeController = (req, res, next) =>{
    res.render("home" , {title : "Home"})
}
const generalMiddleware = (app)=>{
    // Um middleware só para mostrar o que vem no body e no header
    app.use((req, res, next)=>{
        const body = req.body;
        const headers = req.headers;
        console.log(body);
        console.log(headers);
        console.log(req.method);
        next();
    });
}

export default generalMiddleware;
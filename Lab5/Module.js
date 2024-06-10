const module = {
    id: "3",
    name: "Module 1",
    description: "This is the first module",
    course: "something"
}

export default function Module(app){
    app.get("/lab5/module", (req, res) => {
        res.json(module);
    })
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    })
    app.get("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
    })
}
const names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

let noDb = names.filter((item, pos, self) => self.indexOf(item) == pos)

console.log(noDb)

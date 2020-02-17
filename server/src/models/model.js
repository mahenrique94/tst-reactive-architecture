const extendsModel = model => ({
    findOne: data => model.findOne({ where: { ...data, active: true } }),
    findAll: () => model.findAll({ where: { active: true } }),
    create: data => model.create(data),
})

module.exports = extendsModel

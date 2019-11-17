const Peca = require('../models/Peca');
const sharp = require('sharp');
const path = require('path')
const fs = require('fs')

module.exports = {

  async index(req, res) {
    const pecas = await Peca.findAll();


    return res.json(pecas);
  },

  async store(req, res) {
    console.log(req.body);
    console.log(req.file);


    const { name, sinopse, director, duration, classificacao, price, genero } = req.body;
    const { filename: image } = req.file;
    const [image_name] = image.split('.');
    const file_name = `${image_name}.jpg`;
    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(
        path.resolve(req.file.destination, 'resized', file_name)
      )

    fs.unlinkSync(req.file.path);

    const peca = await Peca.create({ name, sinopse, director, duration, classificacao, price, genero, image });

    return res.json(peca);
  },

  async detail(req, res) {
    const { id } = req.params;

    const peca = await Peca.findByPk(id);

    if (!peca) {
      return res.status(400).json({ error: "Peca não encontrada" });
    }

    return res.json(peca);
  }
}


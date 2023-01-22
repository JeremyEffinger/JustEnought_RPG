import express, { json } from "express";
import mongoose from "mongoose";
import Character from "./characterSchema.js";
import { check, validationResult } from "express-validator";
import { ValidatorsImpl } from "express-validator/src/chain/validators-impl.js";

mongoose.connect("mongodb://localhost:27017/characters", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 5000;
const server = express();

server.use(express.json());

server.get("/api/v1", (req, res) => {
  res.json({ message: "Hello!" });
});

server.get("/api/v1/characters", (req, res) => {
  Character.find({}, (err, characters) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(characters);
    }
  });
});

server.get("/api/v1/characters/:id", (req, res) => {
  console.log(req.params.id);
  Character.findById(req.params.id, (err, character) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(character);
    }
  });
});

server.post(
  "/api/v1/characters",
  [
    check("characterName").isString(),
    check("playerName").isString(),
    check("classes").isArray(),
    check("classes.*.name").isString(),
    check("classes.*.level").isNumeric(),
    check("race").isString(),
    check("type").isString(),
    check("upbringing").isString(),
    check("disposition").isString(),
    check("attributes.might").isNumeric(),
    check("attributes.agility").isNumeric(),
    check("attributes.vitality").isNumeric(),
    check("attributes.intellect").isNumeric(),
    check("attributes.judgement").isNumeric(),
    check("attributes.personality").isNumeric(),
    check("hitpoints.current").isNumeric(),
    check("hitpoints.bonus").isNumeric(),
    check("hitpoints.max").isNumeric(),
    check("armorRating.current").isNumeric(),
    check("armorRating.bonus").isNumeric(),
    check("armorRating.source.name").isString(),
    check("armorRating.source.type").isString(),
    check("rollBonus").isNumeric(),
    check("movement").isArray(),
    check("movement.*.type").isString(),
    check("movement.*.speed").isNumeric(),
    check("skills").isArray(),
    check("skills.*.skillName").isString(),
    check("skills.*.skilled").isBoolean(),
    check("skills.*.mastered").isBoolean(),
    check("abilities").isArray(),
    check("abilities.*.name").isString(),
    check("abilities.*.description").isString(),
    check("abilities.*.source").isString(),
    check("spells").isArray(),
    check("spells.*.name").isString(),
    check("spells.*.circle").isNumeric(),
    check("spells.*.type").isString(),
    check("spells.*.description").isString(),
    check("spells.*.source").isString(),
    check("techniques").isArray(),
    check("techniques.*.name").isString(),
    check("techniques.*.art").isString(),
    check("techniques.*.type").isString(),
    check("techniques.*.description").isString(),
    check("techniques.*.source").isString(),
    check("inventory").isArray(),
    check("inventory.*.name").isString(),
    check("inventory.*.quantity").isNumeric(),
    check("inventory.*.weight").isNumeric(),
    check("inventory.*.description").isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("error in validation");
      return res.status(400).json({ errors: errors.array() });
    }

    const newCharacter = new Character(req.body);

    newCharacter.save((err, character) => {
      if (err) {
        console.log("error in save");
        res.status(500).send(err);
      } else {
        res.status(201).json(character);
      }
    });
  }
);

server.use((req, res, next) => {
  res.contentType("text/plain").status(404).send("Not Found");
});

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

server.listen(PORT, () => console.log(`start listening on port : ${PORT}`));

const express = require('express');
const app = express();
const router = express.Router();
const data = require('./data');
const cors = require('cors');
app.use(cors());

app.use(express.json());

router.get('/workex', async (req, res) => {
    try {
        const worklist = await data.getWorkEx();
        res.json(worklist);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/project', async (req, res) => {
    try {
        const projectList = await data.getProject();
        res.json(projectList);
    } catch (e) {
        res.status(500).send(e);
    }
});
router.get('/skill', async (req, res) => {
    try {
        const skillList = await data.getSkill();
        res.json(skillList);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.use('/', router);

app.listen(4000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:4000');
});

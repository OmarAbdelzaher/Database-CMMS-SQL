const express = require('express');
const router = express.Router();
const reportController=require('../controllers/report')


router.get('/report/department/equipments/:code',reportController.departmentEquipmentsReport);
router.get('/report/department/engineers/:code',reportController.departmentEngineersReport);
router.get('/report/agent/spareParts/:Id',reportController.agentSparePartsReport);
router.get('/report/agent/equipments/:Id',reportController.agentEquipmentsReport);



module.exports=router;
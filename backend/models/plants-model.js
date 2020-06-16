const mongoose = require('mongoose');

const plantsSchema = mongoose.Schema({
     // List of Plant
     plant_Name:  { type: String, required: true },
     plant_Id:  { type: String, required: true },
     plant_Strain:  { type: String, required: true },
     plant_Source:  { type: String, required: true },
     plant_percent_Sativa:  { type: String, required: true },
     plant_percent_Indica:  { type: String, required: true },
     plant_THC_mg_g:  { type: String, required: true },
     plant_CBD_mg_g:  { type: String, required: true },
     plant_Germ_Time:  { type: String, required: true },
     plant_Seed_Time:  { type: String, required: true },
     plant_Veg_Time:  { type: String, required: true },
     plant_Flower_Time:  { type: String, required: true },
     plant_Total_Time:  { type: String, required: true },
     plant_Light_Sched:  { type: String, required: true },
      
});
module.exports = mongoose.model('Plants', plantsSchema);

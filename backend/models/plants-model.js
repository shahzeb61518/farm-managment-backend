const mongoose = require('mongoose');

const plantsSchema = mongoose.Schema({
     // List of Plant
     plant_Name:  { type: String  },
     plant_Id:  { type: String  },
     plant_Strain:  { type: String  },
     plant_Source:  { type: String  },
     plant_percent_Sativa:  { type: String  },
     plant_percent_Indica:  { type: String  },
     plant_THC_mg_g:  { type: String  },
     plant_CBD_mg_g:  { type: String  },
     plant_Germ_Time:  { type: String  },
     plant_Seed_Time:  { type: String  },
     plant_Veg_Time:  { type: String  },
     plant_Flower_Time:  { type: String },
     plant_Total_Time:  { type: String },
     plant_Light_Sched:  { type: String },
      
});
module.exports = mongoose.model('Plants', plantsSchema);

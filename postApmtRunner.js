import dotenv from 'dotenv';
dotenv.config();

import genAppointment from "./util/genAppointment.js";
import postAppointment from "./util/postAppointment.js";

postAppointment(genAppointment('1', 'Mrs. Arianne988 Muller251', '2021-09-01', 'dental', 'Dental'))
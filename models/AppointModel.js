const mongoose=require('mongoose')


const appointmentSchema =mongoose.Schema({
    doctor_id: mongoose.Schema.Types.ObjectId,
    patient_name: String,
    appointment_date: String, 
});


const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports=Appointment
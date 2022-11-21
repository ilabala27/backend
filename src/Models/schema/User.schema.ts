import mongoose from "mongoose";
import { Educational, MaritalStatus, ModeOfSalary, Ownership } from "src/dto/user.dto";

export const UserSchema = new mongoose.Schema(
    {

        DSA_CODE: {
            type: String,
            required: true
        },


        Phone_number: {
            type: Number,
            required: true
        },


        Name: {
            type: String,
            required: true
        },

        Date_of_birth: {
            type: String,
            required: true
        },


        Fathers_name: {
            type: String,
            required: true
        },


        PAN_NO: {
            type: String,
            required: true
        },


        AADHAAR_NO: {
            type: Number,
            required: true
        },


        Mother_name: {
            type: String,
            required: true
        },


        current_residence_address: {
            type: String,
            required: true
        },


        landmark: {
            type: String,
            required: true
        },


        area_pin_code: {
            type: Number,
            required: true
        },

        current_address_ownership_type: {
            type: String,
            required: true
        },

        
       

        no_of_years_at_current_address: {
            type: String,
            required: true
        },


        no_of_years_at_current_city: {
            type: Number,
            required: true
        },


        personal_email: {
            type: String,
            required: true
        },

        educational_qualification: {
            type: String,
            required: true
        },


        marital_status: {
            type: String,
            required: true
        },

        name_of_spouse: {
            type: String,
            required: true
        },


        net_in_hand_salary: {
            type: Number,
            required: true
        },


        gross_monthly_salary: {
            type: Number,
            required: true
        },


        current_company_name: {
            type: String,
            required: true
        },


        current_company_address: {
            type: String,
            required: true
        },


        company_landmark: {
            type: String,
            required: true
        },


        current_company_area_pincode: {
            type: Number,
            required: true
        },


        designation: {
            type: String,
            required: true
        },


        no_of_years_in_present_job: {
            type: String,
            required: true
        },


        date_of_joining_current_company: {
            type: String,
            required: true
        },


        office_landline_number: {
            type: Number,
            required: true
        },


        total_work_experience_in_years: {
            type: Number,
            required: true
        },


        customer_office_emailid: {
            type: String,
            required: true
        },


        bank_account_name: {
            type: String,
            required: true
        },


        desired_required_loan_amount: {
            type: Number,
            required: true
        },


        purpose_of_loan: {
            type: String,
            required: true
        },


        name_of_a_relative: {
            type: String,
            required: true
        },


        relative_phone_number: {
            type: Number,
            required: true
        },


        name_of_a_field: {
            type: String,
            required: true
        },


        friend_phone_number: {
            type: Number,
            required: true
        },


        friend_residence_address: {
            type: String,
            required: true
        },


        CIDIL_score: {
            type: Number,
            required: true
        },

        mode_of_salary_credit: {
            type: String,
            required: true
        }

      
    }
);

 
        
        


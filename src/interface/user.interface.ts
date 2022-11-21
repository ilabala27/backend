import { Educational, MaritalStatus, ModeOfSalary, Ownership } from "src/dto/user.dto";

export interface user extends Document
{
    DSA_CODE: String;


    Phone_number: Number;


    Name: String;


    Date_of_birth: String;


    Fathers_name: String;


    PAN_NO: String;


    AADHAAR_NO: Number;


    Mother_name: String;


    current_residence_address: String;


    landmark: String;


    area_pin_code: Number;

current_address_ownership_type: Ownership;

    no_of_years_at_current_address: String;


    no_of_years_at_current_city: String;


    personal_email: String;

     educational_qualification: Educational;


    marital_status: MaritalStatus;


    name_of_spouse: String;


    net_in_hand_salary: Number;


    gross_monthly_salary: Number;


    current_company_name: String;


    current_company_address: String;


    company_landmark: String;


    current_company_area_pincode: Number;


    designation: String;


    no_of_years_in_present_job: Number;


    date_of_joining_current_company: String;


    office_landline_number: Number;


    total_work_experience_in_years: Number;


    customer_office_emailid: String;


    bank_account_name: String;


    desired_required_loan_amount: Number;


    purpose_of_loan: String;


    name_of_a_relative: String;


    relative_phone_number: Number;


    name_of_a_field: String;


    friend_phone_number: Number;


    friend_residence_address: String;


    CIDIL_score: Number;

    mode_of_salary_credit: ModeOfSalary;
   
}



    

     
    

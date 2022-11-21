import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString, IsUppercase } from "class-validator";
import { Number } from "mongoose";

export enum Ownership {
  Owned = 'Owned',
  Rented = 'Rented',
  ParentalOwned = 'Parental Owned'
}

export enum Educational {
  SSLC = '10th',
  HSLC = '12th',
  Bachelors = 'Bachelors',
  Masters = 'Masters',
  DctoralPhD = 'Dctoral/PhD'
}

export enum MaritalStatus {
  Married = 'Married',
  Unmarried = 'Unmarried'
}

export enum ModeOfSalary {
  BankTransferNEFT = 'Bank Transfer/NEFT',
  CASH = 'CASH',
  CHEQUE ='CHEQUE'
}





export class userDto {

   @ApiProperty()
    @IsNotEmpty()
    @IsString()
    DSA_CODE: String;
    

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    Phone_number: Number;

  @IsNotEmpty()
    @IsString()
    @IsUppercase()
    Name: String;

    @IsNotEmpty()
    @IsString()
    Date_of_birth: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Fathers_name: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    PAN_NO: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    AADHAAR_NO: Number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    Mother_name: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    current_residence_address: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    landmark: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    area_pin_code: Number;

    @ApiProperty({ enum: ['Owned', 'Rented', 'Parental Owned']})
    @IsNotEmpty()
    @IsString()
    current_address_ownership_type: Ownership;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    no_of_years_at_current_address: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    no_of_years_at_current_city: Number;


    @ApiProperty()
    @IsNotEmpty()
  @IsEmail()
    personal_email: String;

    @ApiProperty({ enum: ['10th', '12th', 'Bachelors','Masters', 'Dctoral/PhDUnmarried']})
    @IsNotEmpty()
    @IsString()
    educational_qualification: Educational;

    @ApiProperty({ enum: ['Married', 'Unmarried']})
    @IsNotEmpty()
    @IsString()
    marital_status: MaritalStatus;

  
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name_of_spouse: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    net_in_hand_salary: Number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    gross_monthly_salary: Number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    current_company_name: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    current_company_address: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    company_landmark: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    current_company_area_pincode: Number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    designation: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    no_of_years_in_present_job: Number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    date_of_joining_current_company: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    office_landline_number: Number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    total_work_experience_in_years: Number;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    customer_office_emailid: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    bank_account_name: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    desired_required_loan_amount: Number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    purpose_of_loan: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name_of_a_relative: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    relative_phone_number: Number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name_of_a_field: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    friend_phone_number: Number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    friend_residence_address: String;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    CIDIL_score: Number;

 
    @ApiProperty({ enum: ['Bank Transfer/NEFT', 'CASH', 'CHEQUE']})
    @IsNotEmpty()
    @IsString()
    mode_of_salary_credit: ModeOfSalary;


}

  


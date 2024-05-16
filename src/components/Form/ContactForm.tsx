import React from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import Button from "../Button/Button";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const jobFunctions = [
    { label: "Accounting", value: "Accounting" },
    { label: "Sales", value: "Sales" },
    { label: "Marketing", value: "Marketing" },
    // Additional options
  ];

  const locations = [
    { label: "New York", value: "NY" },
    { label: "California", value: "CA" },
    { label: "Texas", value: "TX" },
    // Additional locations
  ];

  const onSubmit = (data: any) => {
    console.log(data);
    // Submit logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-grid p-fluid">
        <div className="col-12 d-flex justify-content-between gap-2">
          <div className="col mt-4 ">
            <FloatLabel>
              <InputText
                id="firstName"
                {...register("firstName", { required: true })}
                className={classNames({ "p-invalid": errors.firstName })}
              />
              <label htmlFor="firstName">First Name</label>
            </FloatLabel>

            {errors.firstName && (
              <small className="p-error">First Name is required.</small>
            )}
          </div>
          <div className="col mt-4">
            <FloatLabel>
              <InputText
                id="lastName"
                {...register("lastName", { required: true })}
                className={classNames({ "p-invalid": errors.lastName })}
              />
              <label htmlFor="lastName">Last Name</label>
            </FloatLabel>
            {errors.lastName && (
              <small className="p-error">Last Name is required.</small>
            )}
          </div>
        </div>

        <div className="p-col-12 p-md-6 mt-4">
          <FloatLabel>
            <InputText
              id="company"
              {...register("company", { required: true })}
            />
            <label htmlFor="company">Company Name</label>
          </FloatLabel>
        </div>
        <div className="p-col-12 p-md-6 mt-4">
          <FloatLabel>
            <InputText
              id="jobTitle"
              {...register("jobTitle", { required: true })}
            />
            <label htmlFor="jobTitle">Job Title</label>
          </FloatLabel>
        </div>
        <div className="p-col-12 p-md-6 mt-4">
          <FloatLabel>
            <InputText id="email" {...register("email", { required: true })} />

            <label htmlFor="email">Email Address</label>
          </FloatLabel>
        </div>
        {/* <div className="p-col-12 p-md-6 mt-4">
          <label htmlFor="jobFunction">Job Function*</label>
          <Dropdown
            id="jobFunction"
            options={jobFunctions}
            {...register("jobFunction", { required: true })}
          />
        </div>
        <div className="p-col-12 p-md-6 mt-4">
          <label htmlFor="location">Location*</label>
          <Dropdown
            id="location"
            options={locations}
            {...register("location", { required: true })}
          />
        </div> */}
        <div className="p-col-12 mt-4">
          <FloatLabel>
            <InputTextarea
              rows={5}
              cols={30}
              id="inquiryDetails"
              {...register("inquiryDetails", { required: true })}
            />
            <label htmlFor="inquiryDetails">Details about your inquiry</label>
          </FloatLabel>
        </div>
        <div className="p-col-12 p-md-6 mt-4">
          <FloatLabel>
            <Calendar
              id="date"
              {...register("preferredContactDate")}
              showIcon
            />

            <label htmlFor="date">Preferred Contact Date</label>
          </FloatLabel>
        </div>
        <div className="p-col-12 mt-4">
          <Button onClick={() => {}} title="Submit" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

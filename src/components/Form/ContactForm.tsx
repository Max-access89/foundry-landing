import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import Button from "../Button/Button";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import axios from "axios";
import { useToast } from "../Toast/Toast";
import { formatDate } from "../../functions/helpers";
import { variables } from "../../utils/env";

interface contactFormProps {
  onHide: () => void;
}

const ContactForm = ({ onHide }: contactFormProps) => {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData: any) => {
    setIsSubmitting(true);
    const postData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      jobTitle: formData.jobTitle,
      inquiryDetails: formData.inquiryDetails,
      demoDate: formData.preferredContactDate
        ? formatDate(formData.preferredContactDate)
        : undefined,
    };

    try {
      // await axios.post(variables.EMAILURL, postData);

      const response = await axios.post(variables.FOUNDING_LANDING_API_URL, {
        ...formData,

        company_name: formData.company,
      });

      showToast("success", "Details submitted successfully", "");
      reset();
      onHide();
    } catch (error) {
      console.error("Error creating prospect:", error);
      showToast("error", "Details were not submitted", "");
    }
    setIsSubmitting(false);
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
              className={classNames({ "p-invalid": errors.company })}
            />
            <label htmlFor="company">Company Name</label>
          </FloatLabel>
          {errors.company && (
            <small className="p-error">Company Name is required.</small>
          )}
        </div>
        <div className="p-col-12 p-md-6 mt-4">
          <FloatLabel>
            <InputText
              id="jobTitle"
              {...register("jobTitle", { required: false })}
              // className={classNames({ "p-invalid": errors.jobTitle })}
            />
            <label htmlFor="jobTitle">Job Title</label>
          </FloatLabel>
        </div>
        <div className="p-col-12 p-md-6 mt-4">
          <FloatLabel>
            <InputText
              id="email"
              {...register("email", { required: false })}
              className={classNames({ "p-invalid": errors.email })}
            />

            <label htmlFor="email">Email Address</label>
          </FloatLabel>
          {errors.email && (
            <small className="p-error">Email is required.</small>
          )}
        </div>
        <div className="p-col-12 p-md-6 mt-4">
          <FloatLabel>
            <InputText
              id="phone"
              {...register("phone", { required: true })}
              className={classNames({ "p-invalid": errors.phone })}
            />

            <label htmlFor="phone">Phone</label>
          </FloatLabel>
          {errors.phone && (
            <small className="p-error">Phone Number is required.</small>
          )}
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
              className={classNames({ "p-invalid": errors.inquiryDetails })}
            />
            <label htmlFor="inquiryDetails">Details about your inquiry</label>
          </FloatLabel>
          {errors.inquiryDetails && (
            <small className="p-error">Inquiry Details is required.</small>
          )}
        </div>
        <div className="p-col-12 p-md-6 mt-4">
          <label htmlFor="date">Preferred Contact Date</label>

          <Calendar id="date" {...register("preferredContactDate")} showIcon />
        </div>
        <div
          className="p-col-12 mt-4 d-flex"
          style={{ justifyContent: "flex-end" }}
        >
          <Button isLoading={isSubmitting} onClick={() => {}} title="Submit" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

import {Field, Form, Formik} from "formik";
import React, {FC} from "react";

export type UsersSearchFormType = {
  term: string
}

type PropsType = {}

const usersSearchFormValidate = () => {
  return {};
}

export const UsersSearchForm: FC<PropsType> = () => {

  const submitForm = (values: UsersSearchFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
    setTimeout(() => {
      alert(JSON.stringify(values));
      setSubmitting(false);
    }, 400);
  }

  return <div>
    <Formik
        initialValues={{term: '',}}
        validate={usersSearchFormValidate}
        onSubmit={submitForm}
    >
      {({isSubmitting}) => (
          <Form>
            <Field type="text" name="term"/>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
      )}
    </Formik>
  </div>
}
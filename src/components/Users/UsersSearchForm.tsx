import {Field, Form, Formik} from "formik";
import React, {FC} from "react";
import {FilterType} from "../../redux/users_reducer";

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

type FormType = {
  term: string
  friend: 'null' | 'true' | 'false'
}

const usersSearchFormValidate = () => {
  return {}
}

export const UsersSearchForm: FC<PropsType> = ({onFilterChanged}) => {

  const submitForm = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const filter = {
      term: '',
      friend: values.friend === 'null' ? null : values.friend === 'true',
    }
    debugger
    onFilterChanged(filter)
    setSubmitting(false);
  }

  return <div>
    <Formik
        initialValues={{term: '', friend: 'null'}}
        validate={usersSearchFormValidate}
        onSubmit={submitForm}
    >
      {({isSubmitting}) => (
          <Form>
            <span>Search your friends</span>
            <div>
              <Field type="text" name="term"/>
            </div>
            <div>
              <Field name='friend' as='select'>
                <option value="null">All</option>
                <option value="true">Only followed</option>
                <option value="false">Only unFollowed</option>
              </Field>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
      )}
    </Formik>
  </div>
}
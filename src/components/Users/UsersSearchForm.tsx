import {Field, Form, Formik} from "formik";
import React, {FC} from "react";
import {FilterType} from "../../redux/users_reducer";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/users_selectors";

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}
type FriendFormType = 'null' | 'true' | 'false';
type FormType = {
  term: string
  friend: FriendFormType
}

const usersSearchFormValidate = () => {
  return {}
}

export const UsersSearchForm: FC<PropsType> = React.memo(({onFilterChanged}) => {
  const filter = useSelector(getUsersFilter)
  const submitForm = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true',
    }
    onFilterChanged(filter)
    setSubmitting(false);
  }

  return <div>
    <Formik
        enableReinitialize
        initialValues={{
          term: filter.term,
          friend: String(filter.friend) as FriendFormType
        }}
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
})
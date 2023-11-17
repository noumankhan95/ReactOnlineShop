import FormCard from "../Components/FormCard"
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"
export default function Contact() {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required").min(3, "Must be atleast 3 words"),
        email: Yup.string().email().required("Email is Required"),
        message: Yup.string().min(10, "Atleast 10 words")
    })
    const initialValues = {
        name: "",
        email: "",
    }
    return <section className="pt-10">
        <FormCard customClass={"w-3/5 py-2"}>
            <h1 className="text-center text-2xl font-semibold">Contact Us</h1>
            <div className="flex flex-row justify-between p-2">
                <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(val) => { console.log(val) }}
                >
                    {(formik) => {
                        const {
                            errors,
                            touched,
                            isValid,
                            dirty
                        } = formik;
                        return <Form className="flex flex-col my-4 w-full">
                            <label htmlFor='name' className="font-medium">Enter Your name</label>
                            <Field type="text" className="border-2 border-slate-300 rounded-md p-2 focus:outline-none " name='name' id="name" />
                            <ErrorMessage
                                name="name"
                                className='text-red-700'
                                component={'h1'}
                            />
                            <label htmlFor='email' className="font-medium">Enter Your Email</label>
                            <Field type="text" className="border-2 border-slate-300 rounded-md p-2 focus:outline-none" name='email' id="email" />
                            <ErrorMessage
                                name="email"
                                className='text-red-700'
                                component={'h1'}
                            />

                            <label htmlFor='message' className="font-medium">Enter Your Message</label>
                            <Field as="textarea" className="border-2 border-slate-300 rounded-md p-2 focus:outline-none" name='message' id="message" />
                            <ErrorMessage
                                name="message"
                                className='text-red-700'
                                component={'h1'}
                            />
                            <button className={!dirty || !isValid ? "text-slate-500 border-2 border-slate-400 p-3 rounded-md self-center mt-3" : `text-center bg-green-600 text-white border-2 border-slate-400 p-3 rounded-md self-center mt-3`} type='submit' disabled={!isValid || !dirty}>Submit</button>
                        </Form>
                    }}

                </Formik>
            </div>
        </FormCard>
    </section >
}
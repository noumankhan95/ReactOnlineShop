import { useCallback, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormCard from '../Components/FormCard';
import { useDispatch } from 'react-redux';
import { Signin } from "../store/userState"
import { useSelector } from 'react-redux';
export default function AuthenticationForm() {
    const [loginState, setloginState] = useState({ val: false })
    const userState = useSelector(state => state.user)
    const [autherr, setautherr] = useState("")
    const [successmsg, setsuccessmsg] = useState("")
    console.log(userState)
    const dispatch = useDispatch()
    const initialValues = {
        name: "",
        email: "",
        password: ""
    }
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is Required"),
        password: Yup.string().required("Password is Required").min(4, "Password Too Short, Must be Atleast 4 words")
    })
    const SignupSchema = Yup.object().shape({
        name: Yup.string().required("Name is required").min(3, "Must be atleast 3 words"),
        email: Yup.string().email().required("Email is Required"),
        password: Yup.string().required("Password is Required").min(4, "Password Too Short, Must be Atleast 4 words")
    })
    const ChangeAuthState = useCallback(() => {
        setautherr(p => '')
        setsuccessmsg(p => '')
        setloginState(p => ({ val: !p.val }))
    }, [])
    const formSubmit = useCallback(async (values) => {
        try {
            console.log('changed', loginState.val)
            setautherr(p => "")
            const res = await dispatch(Signin({ values, mode: loginState.val ? "login" : 'signup' })).unwrap()
            if (res.status)
                setsuccessmsg(res.data.message)
            localStorage.setItem("token", res.data.token)
        } catch (e) {
            console.log("cb error", e)
            setautherr(p => e.data.message)
        }
    }, [loginState])
    return <Formik
        initialValues={initialValues}
        validationSchema={loginState.val ? LoginSchema : SignupSchema}
        onSubmit={formSubmit}
        enableReinitialize={true}
        key={loginState.val ? 'login' : 'signup'}
    >
        {(formik) => {
            const {
                errors,
                touched,
                isValid,
                dirty
            } = formik;
            return <FormCard>
                <h1 className="text-2xl text-center">Your Profile</h1>
                <Form className="flex flex-col my-4">
                    {!loginState.val && <>
                        <label htmlFor='name'>Enter Your name</label>
                        <Field type="text" className="border-2 border-slate-300 rounded-md p-2 focus:outline-none" name='name' id="name" />
                        <ErrorMessage
                            name="name"
                            className='text-red-400'
                            component={'h1'}

                        />
                    </>}
                    <label htmlFor='email'>Enter Your Email</label>
                    <Field type="text" className="border-2 border-slate-300 rounded-md p-2 focus:outline-none" name='email' id="email" />
                    <ErrorMessage
                        name="email"
                        className='text-red-400'
                        component={'h1'}
                    />

                    <label htmlFor='password'>Enter Your Password</label>
                    <Field type="password" className="border-2 border-slate-300 rounded-md p-2 focus:outline-none" name='password' id="password" />
                    <ErrorMessage
                        name="password"
                        className='text-red-400'
                        component={'h1'}

                    />
                    <button className={!dirty || !isValid ? "text-slate-500 border-2 border-slate-400 p-3 rounded-md self-center mt-3" : `text-center bg-green-600 text-white border-2 border-slate-400 p-3 rounded-md self-center mt-3`} type='submit' disabled={!isValid || !dirty}>{userState.isloading ? "Loading" : "Submit"}</button>
                </Form>
                <h1 className='text-pink-800 cursor-pointer' onClick={ChangeAuthState}>{loginState.val ? "Sign Up" : "Login"} Instead</h1>
                {autherr && <h1 className='text-pink-800 '>{autherr}</h1>}
                {successmsg && <h1 className='text-green-800 '>{successmsg}</h1>}

            </FormCard>
        }
        }

    </Formik>

}
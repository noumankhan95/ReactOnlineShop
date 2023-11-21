import { useCallback, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormCard from '../Components/FormCard';
import { useDispatch } from 'react-redux';
import { AddProduct as addnewprod } from "../store/userState"
import { useSelector } from 'react-redux';
export default function AddProduct() {
    const userState = useSelector(state => state.user)
    const [additionerror, setadditionerror] = useState("")
    const [successmsg, setsuccessmsg] = useState("")
    const dispatch = useDispatch()
    const initialValues = {
        name: "",
        price: 0,
        imgurl: ""
    }
    const prodschema = Yup.object().shape({
        name: Yup.string().required("Product Name is Required").min(5, "Product Name too Short"),
        imgurl: Yup.string().required("Password is Required").min(4, "Password Too Short, Must be Atleast 4 words"),
        price: Yup.number().required("Must Enter Price")
    })

    const formSubmit = useCallback(async (values) => {
        console.log(values)
        try {

            setadditionerror(p => "")
            const res = await dispatch(addnewprod(values)).unwrap()
            if (res.status)
                setsuccessmsg(res.data.message)
            localStorage.setItem("token", res.data.token)
        } catch (e) {
            console.log("cb error", e)
            setadditionerror(p => e.data.message)
        }
    }, [])
    return <Formik
        initialValues={initialValues}
        validationSchema={prodschema}
        onSubmit={formSubmit}
        enableReinitialize={true}
        key={'login'}
    >
        {(formik) => {
            const {
                errors,
                touched,
                isValid,
                dirty
            } = formik;
            return <FormCard>
                <h1 className="text-2xl text-center">Add Product</h1>
                <Form className="flex flex-col my-4">

                    <label htmlFor='name'>Product Name</label>
                    <Field type="text" className="border-2 border-slate-300 rounded-md p-2 focus:outline-none" name='name' id="name" />
                    <ErrorMessage
                        name="name"
                        className='text-red-400'
                        component={'h1'}
                    />

                    <label htmlFor='price'>Enter Product Price</label>
                    <Field type="price" className="border-2 border-slate-300 rounded-md p-2 focus:outline-none" name='price' id="price" />
                    <ErrorMessage
                        name="price"
                        className='text-red-400'
                        component={'h1'}

                    />
                    <label htmlFor='imgurl'>Enter Image URL</label>
                    <Field type="imgurl" className="border-2 border-slate-300 rounded-md p-2 focus:outline-none" name='imgurl' id="imgurl" />
                    <ErrorMessage
                        name="imgurl"
                        className='text-red-400'
                        component={'h1'}

                    />
                    <button className={!dirty || !isValid ? "text-slate-500 border-2 border-slate-400 p-3 rounded-md self-center mt-3" : `text-center bg-green-600 text-white border-2 border-slate-400 p-3 rounded-md self-center mt-3`} type='submit' disabled={!isValid || !dirty}>{userState.isloading ? "Loading" : "Submit"}</button>
                </Form>
                {setadditionerror && <h1 className='text-pink-800 '>{additionerror}</h1>}
                {successmsg && <h1 className='text-green-800 '>{successmsg}</h1>}

            </FormCard>
        }
        }

    </Formik>

}
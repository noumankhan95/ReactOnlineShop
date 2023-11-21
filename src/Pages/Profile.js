import { useCallback, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormCard from '../Components/FormCard';
import { useDispatch } from 'react-redux';
import { Signin } from "../store/userState"
import { useSelector } from 'react-redux';
import AuthenticationForm from '../Components/AuthenticationForm';
import UserProfileInfo from '../Components/UserProfileinfo';
export default function Profile() {
    const [loginState, setloginState] = useState({ val: false })
    const userState = useSelector(state => state.user)
    const [autherr, setautherr] = useState("")
    const [successmsg, setsuccessmsg] = useState("")
    console.log(userState)
    const dispatch = useDispatch()

    return <section className="p-4 w-full pt-16">
        {userState.isloggedin ? <UserProfileInfo /> : <AuthenticationForm />}
    </section>
}
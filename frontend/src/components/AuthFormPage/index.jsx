import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { signUp, logIn } from "../../../utils/backend";

export default function AuthFormPage() {
    const { formType } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
    });
    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    async function handleSubmit(event) {
        event.preventDefault()
        if (formType === 'login') {
            const { token } = await logIn(formData)
            localStorage.setItem('userToken', token)
        } else {
            const { token } = await signUp(formData)
            localStorage.setItem('userToken', token)
        }
        navigate('/')
    }

    let actionText
    formType === 'login' ? actionText = 'Log In' : actionText = 'Sign Up'

    let signupFields
    if (formType !== 'login') {
        signupFields = 
        <>
            <div>
                <label className="block text-gray-100 font-bold mb-2" htmlFor="firstName">
                    First Name
                </label>
                <input
                    className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-600"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label className="block text-gray-100 font-bold mb-2" htmlFor="lastName">
                    Last Name
                </label>
                <input
                    className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-600"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
            </div>
        </>
    }

    return (
        <div className="flex items-center justify-center h-[90vh] mx-auto md:w-[600px]">
            <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
                <h2 className="text-3xl text-center font-bold text-gray-100 mb-8">{actionText}</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {signupFields}
                    <div>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-600"
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-100 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-600"
                            id="password"
                            name="password"
                            type="password"
                            minLength="8"
                            required
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-green-700 text-gray-100 rounded-md hover:bg-green-800 transition duration-300">
                            {actionText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

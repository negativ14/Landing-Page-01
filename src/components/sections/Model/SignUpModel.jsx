import Close from "../../icons/Close";
import CheckMark from "../../icons/Checkmark";
import { useState } from "react"
import { useModelContext } from "../../../context/ModelContext";

const initiaLState = {
    email: "",
    password: ""
}

function SignUpModel(){
    const { setActiveModel } = useModelContext();
    const [check, setCheck] = useState(false);
    const [input, setInput] = useState(initiaLState);
    
    function handleInput(e) {
        setInput( previousInput => {
            return {
                ...previousInput,
                [e.target.name]: e.target.value,
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        if(check){
            console.log("submited");
            setInput(initiaLState);

            setActiveModel("")
        }
    }

    return <section className="grid max-w-3xl grid-cols-2">
        <div className="bg-primary-1300 flex flex-col justify-center gap-y-4 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 text-center">
            <h4 className="text-primary-50 text-4xl/12 font-bold tracking-tighter">Lets Get You Signed Up</h4>
            <p className="text-primary-100 text-lg/8">No charges, no fees. Get note taking in minutes!</p>
        </div>
        <div className="bg-primary-1500 flex flex-col justify-between gap-y-24 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10">
            <button onClick={() => setActiveModel("")} className="border-primary-75 hover:bg-primary-75 group transition-properties ml-auto w-fit cursor-pointer rounded-2xl border-2 p-3">
                <Close width={2} className="stroke-primary-75 group-hover:stroke-primary-1300 transition-properties" />
            </button>

            <div className="text-primary-50 flex flex-col gap-y-6 text-lg/8 font-semibold tracking-tight">
                <label>
                    Email
                    <input name="email" type="email" placeholder="negativ@gmail.com" onChange={handleInput} value={input.email} className="bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20"/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="*******" onChange={handleInput} value={input.password} className="bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20"/>
                </label>
            </div>

            <div>
                <div onClick={() => setCheck( curr => !curr)} className="m-auto mb-4 w-fit cursor-pointer gap-x-2 ">
                    <button className={`border-primary-100 transition-properties mr-2 inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm border-2 ${check && "bg-primary-100"}`}>
                        <CheckMark className="stroke-primary-1500 "/>
                    </button>
                    <p className="text-primary-100 inline cursor-pointer text-sm">I agree to all terms & conditions.</p>
                </div>
                <button onClick={handleSubmit} className="bg-primary-500 primary-glow-hover rounded-full transition-properties w-full cursor-pointer py-4 text-lg/8">Get Started</button>
            </div>

        </div>
    </section>

}

export default SignUpModel;
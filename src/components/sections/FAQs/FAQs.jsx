import { useState } from "react"
import { frequentlyAskedQuestions } from "../../../utils/content"
import FAQList from "./FAQList";

function FAQs() {
    const [category, setCategory] = useState("General");
    const [activeQuestion, setActivequestion] = useState(null);

    //filter returns the array of length 1
    const categoryObj = frequentlyAskedQuestions.filter((obj) => obj.category === category).at(0);
    // at(0) to get the object

    const questionsArr = categoryObj.questions;
    console.log("this is quetions array",questionsArr);
    
    const handleQuestionClick = (id) => id === activeQuestion ? setActivequestion(null) : setActivequestion(id);

    const handleCategoryClick = (category) => {
        setActivequestion(null);
        setCategory(category)
    }

    return <section className="bg-gradient-to-bottom justify-items-center">
        <div className="w-full max-w-[90rem] py-32">

            <h2 className="text-primary-50 mb-8 text-center text-6xl/18 font-semibold tracking-tighter">Frequently asked questions</h2>

            <div className="mb-8 text-xl/loose font-light">
                <p className="text-primary-100 text-center">
                    The most commonly asked questions about NoteFlow. <br />
                    Have any other questions{" "}
                    <a className="underline decoration-1 underline-offset-3" href="#">Chat with our team</a>
                </p>
            </div>

            <ul className="mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4">
                {frequentlyAskedQuestions.map((obj) => (
                    <li key={obj.id}>
                        <button className={`border-primary-50 text-primary-50 transition-properties cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 ${obj.category === category && "bg-primary-500 text-primary-1300 border-primary-500 primay-glow"} ${obj.category !== category && "hover:bg-primary-50 hover:text-primary-1300"}`} onClick={() => handleCategoryClick(obj.category)}>{obj.category}</button>
                    </li>
                ))}
            </ul>

            <FAQList
            category={category}
            question={questionsArr}
            activeQuestion={activeQuestion}
            handleQuestionClick={handleQuestionClick}
            />
        </div>
    </section>
}

export default FAQs;

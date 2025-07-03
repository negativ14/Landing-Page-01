import { motion } from "motion/react";
import { useState } from "react";
import FAQ from "./FAQ";

function FAQList({ category, questions, activeQuestion, handleQuestionClick }) {
  const [inView, setView] = useState(false);

  return (
    <motion.ul
    className="m-auto flex flex-col max-w-[51.625rem] gap-y-14 ">
      { questions.map((question) => (
        <FAQ 
        key={question.id}
        question={question}
        activeQuestion={activeQuestion}
        handleQuestionClick={handleQuestionClick}
        />
      ))}
    </motion.ul>
  );
}

export default FAQList;

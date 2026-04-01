import React from "react";

export const Faq = () => {
  const [questions, setQuestion] = React.useState([]);
  React.useEffect(() => {
    const jsonUrl = "./src/faq-data.json";
    fetch(jsonUrl)
      .then((res) => res.json())
      .then((data) => setQuestion(data));
  }, []);

  const questionElement = questions.map((question) => {
    return (
      <li key={question.id} className="p-4">
        <h2 className="text-xl  text-main-blue-950">{question.question}</h2>
        <p className="italic">{question.answer}</p>
      </li>
    );
  });

  return (
    <>
      <section className="flex flex-col items-center  gap-6 py-18">
        <img
          className="h-56"
          src="https://img.freepik.com/vecteurs-libre/tiny-people-sitting-and-standing-near-giant-faq_74855-7879.jpg"
          alt="faq image"
        />
        <ul>{questionElement}</ul>
      </section>
    </>
  );
};

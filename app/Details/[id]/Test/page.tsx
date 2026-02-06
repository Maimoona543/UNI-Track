"use client";
import { use, useEffect, useState } from "react";
import { Detailed_Data } from "@/app/Data/Detail";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  const uni = Detailed_Data.find(
    (u) => u.id.toLowerCase() === id.toLowerCase(),
  );

  type MCQ = {
    question: string;
    options: string[];
    answer: string;
  };

  const subjects = uni?.sub || [];

  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [sub, setSub] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestion] = useState<MCQ[]>([]);
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);
  const [time, setTime] = useState<number>(30 * 60);
  const [filled, setFilled] = useState<number>(0);
  const [isFilling, setIsFilling] = useState<boolean>(false);

  const generateQuestion = async () => {
    if (sub.length === 0) return;

    setLoading(true);
    setFinished(false);

    try {
      const res = await fetch("/api/question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subjects: sub }),
      });

      const data = await res.json();

      setQuestion(data);
      setCurrent(0);
      setCount(0);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (sub.length > 0 && selected){
      generateQuestion();
    }
  },[sub, selected])

  useEffect(() => {
    if (!selectedOption) return;
    // stops at last...
    if (current >= questions.length - 1) return; 

    const timer = setTimeout(() => {
      setCurrent((prev) => prev + 1);
      setSelectedOption("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [selectedOption, current, questions.length]);

  // resets selected part...
  useEffect(() => {
    setSelectedOption("");
  }, [current]);

  // Countdown timer
  useEffect(() => {
    if (time <= 0 || questions.length === 0) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          setFinished(true); // Auto-finish when time runs out...
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time, questions.length]);

  
  useEffect(() => {
    if (!isFilling) return;
    if (filled >= 100) return;

    const timer = setTimeout(() => {
      if (loading) {
        // While loading, fill up to 90%
        setFilled(prev => Math.min(prev + 5, 90));
      } else {
        // When done loading, jump to 100%
        setFilled(100);
        setTimeout(() => setIsFilling(false), 500);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [filled, isFilling, loading]);

  return (
    <div className="relative w-full min-h-screen bg-[#151a31] flex flex-col justify-center items-center">
      <div
        className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), 
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "35px 30px",
        }}
      />
{/* ── Selection ── */}
{!selected && (
  <div className="screen-enter bg-black/40 shadow-xl shadow-cyan-800 w-[90%] sm:w-[50%] xl:w-[40%] h-full rounded-3xl">
    <section className="flex flex-col text-center items-center py-5 w-full px-9">
      <h2 className="text-slate-100 text-xl md:text-2xl xl:text-4xl font-bold">
        Admission Test Portal {id}
      </h2>
      <div className="h-0.5 sm:w-30 max-sm:w-10 mt-2 z-10 bg-linear-to-r from-cyan-300 via-blue-600 to-cyan-200 mb-6"></div>

      <div className="w-full max-w-md flex flex-col">
        <button
          onClick={() => {
            setFilled(0);
            setIsFilling(true);
            setSelected(true);
            setSub(subjects);
          }}
          className="sm:text-md text-md py-4 mb-4 font-bold rounded-2xl border text-slate-300 border-slate-400 w-full bg-linear-to-r from-cyan-400 via-blue-500 to-blue-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:from-cyan-300 hover:via-blue-400 hover:to-blue-400 transition-colors uppercase tracking-wide"
        >
          Start with All Subjects
        </button>

        {subjects.map((name, index) => (
          <button
            key={index}
            onClick={() => {
              setFilled(0);
              setIsFilling(true);
              setSelected(true);
              setSub(name.split("/").map((s) => s.trim()));
            }}
            className="w-full text-slate-300 group transition-all"
          >
            <div className="grid grid-cols-1 w-full">
              {name.split("/").map((part, i) => (
                <div
                  key={i}
                  className="sm:text-md text-sm font-bold mb-4 rounded-2xl py-4 border border-slate-400 w-full hover:bg-slate-800 transition-colors uppercase"
                >
                  {part.trim()}
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>
    </section>
  </div>
)}

{/* ── Loading ── */}
{isFilling && (
<div className="screen-enter h-full flex flex-col justify-center items-center w-full">
  {/* Spinner with centered logo using grid */}
  <div className="mb-8">
    <div className="grid place-items-center">
      <div className="col-start-1 row-start-1 rounded-full border-4 border-gray-200 border-t-blue-500 animate-spin h-20 w-20 sm:w-30 sm:h-30"></div>
      <img
        className="col-start-1 row-start-1 sm:w-12 sm:h-12 w-10 h-10"
        src="/logo.png"
        alt="Loading"
      />
    </div>
  </div>
</div>
)}

{/* Progress bar - outside loading div, absolute to main container */}
{isFilling && (
  <>
    <div className="absolute bottom-0 left-0 w-full bg-slate-700 rounded-full h-1 overflow-hidden">
      <div
        className="h-full bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-400 transition-all duration-300 ease-out"
        style={{ width: `${filled}%` }}
      />
    </div>
    <p className="absolute bottom-2 left-0 w-full text-center text-slate-400 text-sm">
      Loading your test... {filled}%
    </p>
  </>
)}
{/* ── Questions ── */}
{questions.length > 0 && !finished && !isFilling && (
  <div className="screen-enter w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%] mx-auto relative text-center">
    <div className="flex flex-col justify-center items-center mb-7">
      <h2 className="mb-3 md:text-5xl text-3xl font-bold text-slate-300">
        {sub.length > 1 ? "You chose to start with all subjects" : sub}
      </h2>
      <div className="bg-black/40 rounded-xl flex flex-row justify-center items-center w-30">
        <p className="text-cyan-400 py-2 px-4 font-bold">
          ⏳ {String(Math.floor(time / 60)).padStart(2, "0")}:
          {String(time % 60).padStart(2, "0")}
        </p>
      </div>
    </div>
    <div className="w-full h-full bg-black/40 shadow-xl rounded-2xl shadow-cyan-800">
      <section className="relative w-full h-full px-8 py-6 text-slate-300">
        <button
          onClick={() => setFinished(true)}
          className="absolute top-2 right-4 text-2xl font-light text-gray-400 hover:text-red-500"
        >
          &times;
        </button>
        <section>
          <p className="text-sm">
            Question {current + 1} of {questions.length}
          </p>
          <p className="sm:text-xl text-lg font-semibold my-3 text-start">
            Q{current + 1}) {questions[current].question}
          </p>

          <div>
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                disabled={!!selectedOption}
                onClick={() => {
                  setSelectedOption(opt);
                  if (opt === questions[current].answer) {
                    setCount((prev) => prev + 1);
                  }
                  if (current === questions.length - 1) {
                    setFinished(true);
                  }
                }}
                className={`w-full text-left px-4 py-3 my-2 rounded-xl border transition-colors
                  ${
                    selectedOption === opt
                      ? opt === questions[current].answer
                        ? "bg-green-500"
                        : "bg-red-500"
                      : "bg-transparent hover:bg-slate-400/16"
                  }
                `}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="flex flex-row justify-between mt-2 font-semibold text-slate-300">
            <button
              className="px-8 py-2 border hover:bg-slate-400/10 rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={current === 0}
              onClick={() => {
                setSelectedOption("");
                setCurrent(current - 1);
              }}
            >
              Prev
            </button>
            <button
              className="px-8 py-2 border hover:bg-slate-400/10 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={current === questions.length - 1}
              onClick={() => {
                setSelectedOption("");
                setCurrent(current + 1);
              }}
            >
              Skip
            </button>
          </div>
        </section>
      </section>
    </div>
  </div>
)}
{/* ── Results ── */}
{finished && questions.length > 0 && (
  <div className="screen-enter bg-black/40 shadow-xl shadow-cyan-800 w-[75%] h-full sm:w-[50%] xl:max-w-[40%] rounded-3xl p-10 text-center">
    <h2 className="lg:text-5xl sm:text-3xl text-xl font-bold text-slate-300 mb-4">Test Completed!</h2>
    <p className="sm:text-2xl text-md text-cyan-400 mb-6">
      Your Score: {count} / {questions.length}
    </p>
    <p className="sm:text-lg text-sm font-semibold text-slate-300 mb-8">
      Percentage: {((count / questions.length) * 100).toFixed(1)}%
    </p>
    <button
      onClick={() => {
        setFinished(false);
        setSelected(false);
        setQuestion([]);
        setCount(0);
        setCurrent(0);
        setTime(30 * 60);
        setSub([]);
        setFilled(0);
        setIsFilling(false);
      }}
      className="sm:px-8 px-5 sm:py-4 py-3 sm:text-xl text-sm font-bold rounded-2xl border text-slate-300 border-slate-400 bg-linear-to-r from-cyan-400 via-blue-500 to-blue-500 hover:from-cyan-300 hover:via-blue-400 hover:to-blue-400 transition-colors uppercase"
    >
      Start New Test
    </button>
  </div>
)}
      
    </div>
  );
};

export default Page;
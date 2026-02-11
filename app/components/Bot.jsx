import React, { useState } from 'react';
import axios from 'axios';
    import { motion, AnimatePresence } from 'framer-motion';


const Bot = () => {
  const [question, setQuestion] = useState("");
  const [show,setShow] = useState(false)
  const [loading,setLoading] = useState(false)
  const [ messages , setMessages] = useState([])

const hanlde_submit = (e) => {
  e.preventDefault();
  generateAnswer()
}

const handle_clear = () => {
  setMessages([])
}
async function generateAnswer() {
  if (!question.trim()) return;
  const currentQuestion = question;
  setMessages((prev) => [...prev, { role: "user", text: currentQuestion }]);
  setQuestion("");
  setLoading(true);

  try {
    const response = await axios.post("/api/chat", { question: currentQuestion });
    setMessages((prev) => [...prev, { role: "bot", text: response.data.result }]);
  } catch (error) {
    console.error("Chat Error:", error);
    setMessages((prev) => [...prev, { role: "bot", text: "Error: " + (error.response?.data?.error || "Something went wrong") }]);
  } finally {
    setLoading(false);
  }
}



return (

<div className=''>
  <AnimatePresence mode="wait">
    {show ? (
      <motion.section
        key="chat-window"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className=' max-sm:w-75 sm:w-90 border adsolute right-10 border-[#17A6B0] bg-[#0c1b36]/70 rounded-2xl sm:h-134 max-sm:h-132 backdrop-blur-[1px]'
      >
        <header className='flex flex-row gap-3 border-b border-b-[#17A6B0] p-2 relative'>
          <img src="../chat (1).png" className='object-cover sm:h-10 sm:w-10 max-sm:w-8 max-sm:h-8' alt="" />
          <div className="text-slate-400">
            <h1 className='sm:text-md max-sm:text-sm font-bold'>Campus Assistant</h1>
            <h3 className='sm:text-sm max-sm:text-[10px]'>Hi there I'm your Campus Assistant</h3>
          </div>

          <button
            onClick={() => setShow(false)}
            className="absolute top-1 right-3 text-2xl font-light text-gray-400 hover:text-red-500"
          >
            &times;
          </button>
        </header>

        {/* The Scrollable Container */}
        <section className="h-[400px] text-slate-300 overflow-y-auto chat-scroll p-4 flex flex-col-reverse ">
          <div className="flex flex-col gap-4 ">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${msg.role === "user" ? "self-end bg-cyan-300/40  rounded-bl-xl text-slate-100" : "self-start bg-slate-300 text-slate-600 rounded-br-xl"} sm:max-w-[85%] max-sm:[80%] p-3 rounded-t-xl shadow-sm`}
              >
                <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
              </div>
            ))}
            {loading && <p className="animate-pulse">Typing..</p>}
          </div>
        </section>
        <footer className='relative h-18  bg-[#0b1b36]/90 rounded-b-2xl'>
            <form onSubmit={hanlde_submit}>
          <div className='flex flex-row justify-center items-center  w-full'>
            <input 
              className='w-[80%] bg-[#0b1b36]/60 border mt-2 rounded-xl border-[#17A6B0] p-2 outline-none text-slate-400 placeholder:text-slate-300 text-sm ' 
              type="text" 
              value={question} 
              onChange={(e) => setQuestion(e.target.value)} 
            />
            <img className='w-9 h-9 object-cover cursor-pointer' onClick={generateAnswer} src="send.png" alt="" />
          </div>
        </form>
        <div className='bg-[#0b1b36]/90 w-full'>
          <p onClick={handle_clear} className=" absolute right-2  sm:text-[15px] max-sm:text-[10px] text-slate-400 hover:text-red-500 hover:cursor-pointer hover:underline">clear</p>
          <p className="absolute left-3  sm:text-[15px] max-sm:text-[10px] text-slate-400 ">Streaming (typewriter) mode</p>
        </div>

        </footer>
      
      </motion.section>
    ) : (
      <motion.div
        key="chat-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img 
          className='h-9 w-10 object-cover cursor-pointer shadow-lg' 
          onClick={() => setShow(true)} 
          src="../chat (1).png" 
          alt="Open Chat" 
        />
      </motion.div>
      
    )}
    
  </AnimatePresence>
</div>
  )
}

export default Bot




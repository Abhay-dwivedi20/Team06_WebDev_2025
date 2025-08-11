import React, { useState } from "react";
import axios from "axios";

const AI = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAnswer = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setAnswer("");

    try {
      const response = await axios({
        method: "POST",
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAplKWsdmZH_3BSWXHU8Jf1hLstPTWAjIc",
        data: {
          contents: [
            {
              parts: [
                {
                  text: `$ You are an AI assistant for an Indian Independence Day website. You must assume the perspective of an Indian and answer all questions strictly in the context of India, Indian history, Indian culture, and Independence Day (15th August).
If the user asks anything that is not related to these topics, respond only with:
"I am trained to answer about Independence Day only."
When answering relevant questions, speak with pride, respect, and accuracy about India’s heritage, freedom struggle, leaders, culture, and achievements.

": ${input}`,
                },
              ],
            },
          ],
        },
      });

      const text =
        response.data.candidates[0].content.parts[0].text || "No response";
      setAnswer(text);
    } catch (error) {
      setAnswer("Error fetching answer.");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        background:
          'linear-gradient(45deg, green, orange)',
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#138808", marginBottom: "20px" }}>
        Independence Day AI Chatbot
      </h2>
      <textarea
        rows={4}
        style={{
          width: "100%",
          maxWidth: "600px",
          fontSize: "16px",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          resize: "vertical",
        }}
        placeholder="Ask me anything about Independence Day..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
      />
      <button
        onClick={generateAnswer}
        disabled={loading || !input.trim()}
        style={{
          marginTop: "12px",
          padding: "10px 30px",
          backgroundColor: "#FF9933",
          border: "none",
          color: "white",
          fontWeight: "bold",
          borderRadius: "6px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Loading..." : "Get Answer"}
      </button>

      {answer && (
        <div
          style={{
            marginTop: "25px",
            backgroundColor: "#138808",
            color: "white",
            padding: "15px 20px",
            borderRadius: "8px",
            maxWidth: "600px",
            whiteSpace: "pre-wrap",
            boxShadow: "0 0 10px rgba(19, 136, 8, 0.5)",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default AI;

import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaTerminal } from "react-icons/fa";

function EmailFeedback({ onExit, onRetry, onAlright, isSuccess }) {


  return (
    <div style={{ height: 310, width: 210, borderRadius: 10, overflow: "hidden" }}>
      <div
        style={{
          background: "rgb(40,40,40)",
          display: "flex",
          alignItems: "center",
          padding: 20,
          paddingTop: 12,
          paddingBottom: 12,
          overflow: "hidden",
        }}
      >
        <span>
          <FaTerminal size={18} color="#6cbf57" />
        </span>

        <span style={{ display: "flex", float: "right", display: "flex", justifyContent: "flex-end", width: "100%" }}>
          <AiFillCloseCircle onClick={() => onExit()} style={{ cursor: "pointer" }} size={18} color="#6cbf57" />
        </span>
      </div>
      <div
        style={{
          background: "rgb(90,90,90)",
          height: 140,
          width: 210,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5 style={{ marginTop: 20, marginBottom: 15 }}>
          {isSuccess ? "Email sent successfully! 🎉" : "Failed to send email. Please try again."}
        </h5>
        {isSuccess ? (
          <button
            onClick={() => onExit()}
            style={{ background: "#6cbf57", color: "rgb(250,250,250)", borderRadius: 10, marginTop: 10, padding: 5, paddingLeft: 7, paddingRight: 7 }}
          >
            Alright
          </button>
        ): (
          <button
            onClick={() => onRetry()}
            style={{ background: "#6cbf57", color: "rgb(250,250,250)", borderRadius: 10, marginTop: 10, padding: 5, paddingLeft: 7, paddingRight: 7 }}
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
}

export default EmailFeedback;

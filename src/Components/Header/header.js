import React from "react";
import { languages } from "../Data/data";

export default function Top() {
  return (
    <div className="w-screen flex justify-end bg-blue-900">
      <div className="p-2 bg-cyan-950">
        <select className="p-1">
          <option>Select Language</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

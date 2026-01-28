import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
      className="border rounded px-2 py-1"
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
      <option value="ta">தமிழ்</option>
      <option value="kn">ಕನ್ನಡ</option>
    </select>
  );
}

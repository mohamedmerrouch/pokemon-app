import React from "react";

interface Props {
  type: "danger" | "info" | "success" | "warning" | "dark";
  message: string;
}

const Alert: React.FC<Props> = ({ type, message }) => {
  switch (type) {
    case "danger":
      return (
        <div
          className="text-center w-96 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <span className="font-medium">Info alert!</span> {message}
        </div>
      );
    case "info":
      return (
        <div
          className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
          role="alert"
        >
          <span className="font-medium">Info alert!</span> {message}
        </div>
      );
    case "success":
      return (
        <div
          className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          <span className="font-medium">Info alert!</span> {message}
        </div>
      );

    case "warning":
      return (
        <div
          className="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
          role="alert"
        >
          <span className="font-medium">Info alert!</span> {message}
        </div>
      );

    case "dark":
      return (
        <div
          className="p-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
          role="alert"
        >
          <span className="font-medium">Info alert!</span> {message}
        </div>
      );

    default:
      return (
        <div
          className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
          role="alert"
        >
          <span className="font-medium">Info alert!</span> {message}
        </div>
      );
  }
};

export default Alert;

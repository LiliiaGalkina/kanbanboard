import React from "react";
import { Route, Routes } from "react-router-dom"; 
import { Main } from "./Main";
import Description from "../description/Description";

export default function AppRouter({ tasksAll, setTasksAll }) {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<Main tasksAll={tasksAll} setTasksAll={setTasksAll} />}
      />
      <Route
        path={`/:elemId`}
        element={<Description tasksAll={tasksAll} setTaskAll={setTasksAll} />}
      />
    </Routes>
  );
}
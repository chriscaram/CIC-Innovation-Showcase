import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import {
  Home,
  AboutUs,
  Contact,
  ProjectPage,
  DemoSite,
} from "../src/pages/index";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<AboutUs />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/project' exact element={<ProjectPage />} />
        <Route path='/demo' exact element={<DemoSite />} />
        </Routes>
        </BrowserRouter>
      {/* <div className="container">
        <NoteUICollection
          overrideItems={({ item, idx }) => {
            return {
              overrides: {
                Vector31472745: {
                  onClick: () => {
                    setShowUpdateModal(true);
                    setUpdateNote(item);
                  },
                },
              },
            };
          }}
        />
      </div>
      <div
        className="modal"
        style={{ display: showCreateModal === false && "none" }}
      >
        <CreateNote
          overrides={{
            MyIcon: { as: "button", onClick: () => setShowCreateModal(false) },
          }}
        />
      </div>
      <div
        className="modal"
        style={{ display: showUpdateModal === false && "none" }}
      >
        <UpdateNote
          note={updateNote}
          overrides={{
            MyIcon: {
              as: "button",
              onClick: () => setShowUpdateModal(false),
            },
          }}
        />
      </div> */}
    </>
  );
}

export default App;
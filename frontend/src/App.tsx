import React from 'react';
import './App.css';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './LandingPage/Footer';
import FindTalents from './Pages/FindTalents';
import TalentProfile from './Pages/TalentProfile';
import PostJob from './Pages/PostJobPage';
import JobDescriptionPage from './Pages/JobDescPage';
import ApplyJobsPage from './Pages/ApplyJobsPage';
import CompanyPage from './Pages/CompanyPage';

function App() {
  const theme = createTheme({
    colors: {
      'bright-sun': [
        '#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20',
        '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d'
      ],
      'mine-shaft': [
        '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888',
        '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d'
      ],
    },
    fontFamily :"poppins,sans-serif"
  });

  return (
    <MantineProvider defaultColorScheme='dark'  theme={theme}>
      <BrowserRouter>
        <div className='relative'>
        <Header/>
        <Divider size="xs"  />
        <Routes>
          <Route path="/find-jobs" element={<FindJobs/>} />
          <Route path="/talent-profile" element={<TalentProfile/>} />
          <Route path="/post-job" element={<PostJob/>} />
          <Route path="/jobs" element={<JobDescriptionPage/>} />
          <Route path='/find-talent' element={<FindTalents/>} />
          <Route path='/company' element={<CompanyPage/>} />
          <Route path='/apply-job' element={<ApplyJobsPage/> } />
          <Route path='*' element={<HomePage/>} />
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

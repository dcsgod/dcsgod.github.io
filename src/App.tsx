import { HashRouter, Routes, Route } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { HomePage } from './pages/HomePage'
import { WorkPage } from './pages/WorkPage'
import { NexaPage } from './pages/work/NexaPage'
import { MembranePage } from './pages/work/MembranePage'
import { DgotPage } from './pages/work/DgotPage'
import { TriChronosPage } from './pages/work/TriChronosPage'
import { DecisionIntelligencePage } from './pages/work/DecisionIntelligencePage'
import { ResearchPage } from './pages/ResearchPage'
import { WritingPage } from './pages/WritingPage'
import { AboutPage } from './pages/AboutPage'
import { NowPage } from './pages/NowPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/nexa" element={<NexaPage />} />
          <Route path="/work/membrane" element={<MembranePage />} />
          <Route path="/work/dgot" element={<DgotPage />} />
          <Route path="/work/trichronos" element={<TriChronosPage />} />
          <Route path="/work/decision-intelligence" element={<DecisionIntelligencePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/now" element={<NowPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

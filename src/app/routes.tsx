import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Services } from './pages/Services/Services';
import { Activities } from './pages/Activities/Activities';
import { Careers } from './pages/Carrier/Careers';
import { Contact } from './pages/Contact Us/Contact';
import { ConsultancyQualityControl } from './pages/Services/ConsultancyQualityControl';
import { SamplingTransportation } from './pages/Services/SamplingTransportation';
import { PetroleumAnalysis } from './pages/Services/PetroleumAnalysis';
import { WaterAnalysis, GasAnalysis, MineralsAnalysis, SoilAnalysis, EnvironmentalMonitoring, CalibrationServices, ValidationReporting, InternshipRecruitment, TrainingServices, WorkerPlacement } from './pages/Services/OtherServices';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'services/consultancy-quality-control', Component: ConsultancyQualityControl },
      { path: 'services/sampling-transportation', Component: SamplingTransportation },
      { path: 'services/petroleum-analysis', Component: PetroleumAnalysis },
      { path: 'services/water-analysis', Component: WaterAnalysis },
      { path: 'services/gas-analysis', Component: GasAnalysis },
      { path: 'services/minerals-analysis', Component: MineralsAnalysis },
      { path: 'services/soil-analysis', Component: SoilAnalysis },
      { path: 'services/environmental-monitoring', Component: EnvironmentalMonitoring },
      { path: 'services/calibration-services', Component: CalibrationServices },
      { path: 'services/validation-reporting', Component: ValidationReporting },
      { path: 'services/internship-recruitment', Component: InternshipRecruitment },
      { path: 'services/training-services', Component: TrainingServices },
      { path: 'services/worker-placement', Component: WorkerPlacement },
      { path: 'activities', Component: Activities },
      { path: 'careers', Component: Careers },
      { path: 'contact', Component: Contact },
    ],
  },
]);

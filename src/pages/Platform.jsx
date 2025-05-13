import PlatformOverview from '../components/platform/PlatformOverview';
import AgentCategories from '../components/platform/AgentCategories';
import Integration from '../components/platform/Integration';
import CoreRoles from '../components/platform/CoreRoles';
import CTA from '../components/CTA';
import '../styles/Platform.css';

const Platform = () => {
  return (
    <main className="platform-page">
      <PlatformOverview />
      <AgentCategories />
      <Integration />
      <CoreRoles />
      <CTA />
    </main>
  );
};

export default Platform;

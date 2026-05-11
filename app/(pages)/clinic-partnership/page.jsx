import { ClinicPartnershipFormComponent } from './ClinicPartnershipFormComponent';

export const metadata = {
  title: "Clinic Partnership | Parivar Saathi - Collaborate With Us",
  description: "Partner with Parivar Saathi to reach more patients. We provide ethical, pre-counseled patient referrals without sales pressure. Join our network of clinics and healthcare providers.",
  alternates: {
    canonical: "https://parivarsaathi.com/clinic-partnership",
  },
  openGraph: {
    title: "Clinic Partnership Program | Parivar Saathi",
    description: "Grow your clinic ethically. Partner with Parivar Saathi for patient referrals and community support.",
    url: "https://parivarsaathi.com/clinic-partnership",
    type: "website",
  },
};

export default function ClinicPartnershipPage() {
  return <ClinicPartnershipFormComponent />;
}

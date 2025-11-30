'use client';

import { useState } from 'react';
import { Box, Container, Stepper, Step, StepLabel, Paper, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import BasicInfoStep from '@/components/PackageBuilder/BasicInfoStep';
import ThemeSelectionStep from '@/components/PackageBuilder/ThemeSelectionStep';
import ServicesStep from '@/components/PackageBuilder/ServicesStep';
import SummaryStep from '@/components/PackageBuilder/SummaryStep';
import QuoteRequestStep from '@/components/PackageBuilder/QuoteRequestStep';
import { PackageSelection } from '@/types';

const steps = [
  'Basic Information',
  'Choose Theme',
  'Add Services',
  'Review Package',
  'Get Quote'
];

export interface BasicInfo {
  weddingDate: Date | null;
  city: string;
  guestCount: number;
  budgetRange: string;
}

export default function PackageBuilderPage() {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({
    weddingDate: null,
    city: 'Ludhiana',
    guestCount: 100,
    budgetRange: '2-5 Lakhs',
  });
  
  const [packageSelection, setPackageSelection] = useState<Partial<PackageSelection>>({
    services: {},
    totalEstimate: 0,
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <BasicInfoStep
            basicInfo={basicInfo}
            setBasicInfo={setBasicInfo}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <ThemeSelectionStep
            packageSelection={packageSelection}
            setPackageSelection={setPackageSelection}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <ServicesStep
            packageSelection={packageSelection}
            setPackageSelection={setPackageSelection}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <SummaryStep
            basicInfo={basicInfo}
            packageSelection={packageSelection}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <QuoteRequestStep
            basicInfo={basicInfo}
            packageSelection={packageSelection}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
      <Container maxWidth="lg">
        {activeStep === 0 && (
          <IconButton onClick={() => router.back()} sx={{ mb: 2 }}>
            <ArrowBack />
          </IconButton>
        )}
        <Paper elevation={0} sx={{ p: 4, borderRadius: 3 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepContent(activeStep)}
            </motion.div>
          </AnimatePresence>
        </Paper>
      </Container>
    </Box>
  );
}
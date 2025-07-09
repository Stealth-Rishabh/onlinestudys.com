"use client";

import { createContext, useContext, useState, useCallback } from 'react';

const AdmissionFormContext = createContext();

export const AdmissionFormProvider = ({ children }) => {
  const [isAdmissionFormOpen, setIsAdmissionFormOpen] = useState(false);

  const openAdmissionForm = useCallback(() => {
    setIsAdmissionFormOpen(true);
  }, []);

  const closeAdmissionForm = useCallback(() => {
    setIsAdmissionFormOpen(false);
  }, []);

  return (
    <AdmissionFormContext.Provider value={{ isAdmissionFormOpen, openAdmissionForm, closeAdmissionForm }}>
      {children}
    </AdmissionFormContext.Provider>
  );
};

export const useAdmissionForm = () => {
  const context = useContext(AdmissionFormContext);
  if (context === undefined) {
    throw new Error('useAdmissionForm must be used within an AdmissionFormProvider');
  }
  return context;
}; 
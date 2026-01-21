import React, { useState } from 'react';
import Tabs from '../Tabs';
import { Form, FormSection } from '../Form';
import { TextField } from '../TextField';
import { Button } from '../Button';
import Toast from '../Toast';
import { cn } from '../../utils/cn';

export interface FormWizardData {
  username?: string;
  email?: string;
  bio?: string;
  address?: string;
}

export interface FormWizardProps {
  onComplete?: (data: FormWizardData) => void;
  className?: string;
}

const FieldRow: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="flex flex-col gap-2 mb-3">
    <label className="text-sm text-gray-700 font-medium">{label}</label>
    {children}
  </div>
);

export const FormWizard: React.FC<FormWizardProps> = ({ onComplete, className }) => {
  const [index, setIndex] = useState<number>(0);
  const [data, setData] = useState<FormWizardData>({});
  const [toast, setToast] = useState<{ visible: boolean; content: string }>({ visible: false, content: '' });

  const steps = ['Account', 'Profile', 'Confirm'];

  const validateStep = (i: number) => {
    const errs: string[] = [];
    if (i === 0) {
      if (!data.username || !data.username.trim()) errs.push('Username is required.');
      if (!data.email || !data.email.includes('@')) errs.push('A valid email is required.');
    }
    if (i === 1) {
      if (!data.bio || !data.bio.trim()) errs.push('Bio is required.');
      if (!data.address || !data.address.trim()) errs.push('Address is required.');
    }
    return errs;
  };

  const handleNext = () => {
    const errs = validateStep(index);
    if (errs.length) {
      setToast({ visible: true, content: errs.join(' ') });
      return;
    }
    setIndex((s) => Math.min(s + 1, steps.length - 1));
  };

  const handleBack = () => setIndex((s) => Math.max(s - 1, 0));

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    // validate all steps
    const allErrs = steps.reduce<string[]>((acc, _, i) => acc.concat(validateStep(i)), [] as string[]);
    if (allErrs.length) {
      setToast({ visible: true, content: allErrs.join(' ') });
      return;
    }
    setToast({ visible: true, content: 'Form submitted successfully.' });
    onComplete?.(data);
  };

  return (
    <div className={cn('w-full max-w-2xl p-4 bg-white rounded shadow', className)}>
      <Tabs value={index} onChange={(i) => setIndex(i)}>
        <Tabs.List className="flex gap-2 mb-4">
          {steps.map((s, i) => (
            <Tabs.Tab key={s} index={i} className={cn('px-3 py-1 rounded', index === i ? 'bg-blue-600 text-white' : 'bg-gray-100')}>
              {s}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        <Tabs.Panels>
          <Tabs.Panel index={0}>
            <Form onSubmit={(e) => e.preventDefault()}>
              <FormSection title="Account">
                <FieldRow label="Username">
                  <TextField value={data.username ?? ''} onChange={(e) => setData((d) => ({ ...d, username: e.target.value }))} />
                </FieldRow>
                <FieldRow label="Email">
                  <TextField value={data.email ?? ''} onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))} />
                </FieldRow>
              </FormSection>
            </Form>
          </Tabs.Panel>

          <Tabs.Panel index={1}>
            <Form onSubmit={(e) => e.preventDefault()}>
              <FormSection title="Profile">
                <FieldRow label="Bio">
                  <textarea
                    value={data.bio ?? ''}
                    onChange={(e) => setData((d) => ({ ...d, bio: e.target.value }))}
                    className="w-full border rounded p-2 min-h-[80px]"
                  />
                </FieldRow>
                <FieldRow label="Address">
                  <TextField value={data.address ?? ''} onChange={(e) => setData((d) => ({ ...d, address: e.target.value }))} />
                </FieldRow>
              </FormSection>
            </Form>
          </Tabs.Panel>

          <Tabs.Panel index={2}>
            <div>
              <FormSection title="Confirm">
                <div className="mb-2">
                  <div className="text-sm text-gray-700">Username</div>
                  <div className="font-medium">{data.username || '—'}</div>
                </div>
                <div className="mb-2">
                  <div className="text-sm text-gray-700">Email</div>
                  <div className="font-medium">{data.email || '—'}</div>
                </div>
                <div className="mb-2">
                  <div className="text-sm text-gray-700">Bio</div>
                  <div className="font-medium">{data.bio || '—'}</div>
                </div>
                <div className="mb-2">
                  <div className="text-sm text-gray-700">Address</div>
                  <div className="font-medium">{data.address || '—'}</div>
                </div>
              </FormSection>
            </div>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>

      <div className="flex items-center justify-between mt-4">
        <div>
          <Button variant="secondary" onClick={handleBack} disabled={index === 0} className="mr-2">
            Back
          </Button>
          {index < steps.length - 1 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
          )}
        </div>
      </div>

      <Toast visible={toast.visible} onClose={() => setToast((s) => ({ ...s, visible: false }))}>
        {toast.content}
      </Toast>
    </div>
  );
};

export default FormWizard;

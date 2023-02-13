import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { defaultValues } from '@/utils';
import FormFields from '@/components/form-fields';
import Code from '@/components/code';

const Home = () => {
  const [template, setTemplate] = useState('');
  const { register, control } = useForm({ defaultValues });

  const formValues = useWatch({ control });

  useEffect(() => {
    fetch('/api/reload', { method: 'POST', body: JSON.stringify(formValues) })
      .then((res) => res.json())
      .then((res) => setTemplate(res.data));
  }, [formValues]);

  return (
    <div className="flex items-start">
      <div className="h-screen w-[460px] shrink-0 space-y-6 overflow-y-auto border border-r-[1px] border-gray-200 bg-white p-8">
        <div className="mb-6">
          <h2 className="mb-1 text-2xl font-semibold">
            Email Signature Generator
          </h2>
          <p className="text-sm text-gray-400">
            Enter your details below to generate your email signature.
          </p>
        </div>

        <FormFields register={register} />

        <button
          type="button"
          className="btn"
          onClick={() => navigator.clipboard.writeText(template)}
        >
          Copy Code
        </button>

        <footer className="flex flex-col pt-8">
          <p className="text-gray-600">
            Find this tool useful?{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.paypal.com/paypalme/byurhanbeyzat"
              className="text-indigo-600 underline"
            >
              Buy me a coffee
            </a>
          </p>
          <p className="text-gray-600">
            Built by{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twittter.com/byurhanbeyzat"
              className="text-indigo-600 underline"
            >
              @byrhanbeyzat
            </a>
          </p>
        </footer>
      </div>

      <div className="h-screen w-full bg-white">
        <div className="h-1/2 w-full overflow-y-auto">
          <Code code={template} language="html" />
        </div>

        <iframe
          className="h-full max-h-[50%] w-full p-8"
          title="Signature Preview"
          srcDoc={template}
        />
      </div>
    </div>
  );
};

export default Home;

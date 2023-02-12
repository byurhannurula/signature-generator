import { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';

const Preview = ({ control }) => {
  const [template, setTemplate] = useState();

  const formValues = useWatch({ control });

  useEffect(() => {
    fetch('/api/reload', { method: 'POST', body: JSON.stringify(formValues) })
      .then((res) => res.json())
      .then((res) => setTemplate(res.data));
  }, [formValues]);

  return (
    <>
      <iframe
        title="Signature Preview"
        className="h-[50%] w-full"
        srcDoc={template}
      />
      <br />
      <pre>{JSON.stringify(template, null, 4)}</pre>
    </>
  );
};

export default Preview;

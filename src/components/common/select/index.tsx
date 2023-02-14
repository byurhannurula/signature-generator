import { forwardRef } from 'react';
import { Label } from '../label';

const Select = forwardRef(({ name, label, options, ...props }: any, ref) => (
  <div className="sm:col-span-3">
    <Label name={name} label={label} />
    <div className="mt-1">
      <select id={name} ref={ref} name={name} className="field" {...props}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  </div>
));

export { Select };

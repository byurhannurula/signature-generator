import { cn } from '@/utils';

type LabelTypes = {
  name?: string;
  label: string;
  className?: string;
};

export const Label = ({ name, label, className = '' }: LabelTypes) => {
  if (name) {
    return (
      <label
        htmlFor={name}
        className={cn(
          'mb-1 block text-sm font-medium text-gray-700',
          className,
        )}
      >
        {label}
      </label>
    );
  }

  return (
    <p
      className={cn('mb-1 block text-sm font-medium text-gray-700', className)}
    >
      {label}
    </p>
  );
};

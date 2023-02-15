import { Controller } from 'react-hook-form';

import { Input, Label, Select } from '@/components/common';

const FormFields = ({ register, control }) => {
  return (
    <form className="flex flex-col gap-y-6">
      <h3 className="mt-2 -mb-2 font-medium">Personal Info</h3>

      <Input
        label="Full Name"
        placeholder="John Doe"
        {...register('fullName')}
      />
      <Input
        label="Pronouns"
        placeholder="He / Him"
        {...register('pronouns')}
      />
      <Input
        label="Role"
        placeholder="Marketing Expert"
        {...register('role')}
      />
      <Input
        type="text"
        label="Phone number"
        inputMode="numeric"
        placeholder="+1 234 567 890"
        {...register('phoneNumber')}
      />
      <Input
        type="email"
        label="Email Address"
        placeholder="johndoe@acme.com"
        {...register('email')}
      />
      <Input
        type="url"
        label="Personal Website"
        placeholder="https://johndoe.com"
        {...register('website')}
      />
      <Input
        label="Personal LinkedIn"
        placeholder="https://linkedin.com"
        {...register('personalLinkedin')}
      />

      <Controller
        name="gender"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            options={[
              { value: '', label: 'Select gender' },
              { value: 'man', label: 'Man' },
              { value: 'woman', label: 'Woman' },
            ]}
            label="Gender (Used for placeholder avatars)"
            {...field}
          />
        )}
      />

      <Input
        type="url"
        label="Profile Picture"
        placeholder="https://example.com/images/myphoto.png"
        {...register('profilePicture')}
      />

      <h3 className="mt-2 -mb-2 font-medium">Company Info</h3>
      <Input
        label="Company"
        placeholder="Acme, Inc."
        {...register('company')}
      />
      <Input
        type="url"
        label="Company Website"
        placeholder="https://acme.com"
        {...register('companyWebsite')}
      />
      <Input
        type="url"
        label="Company Logo"
        placeholder="https://example.com/images/myphoto.png"
        {...register('companyLogo')}
      />

      <Input
        label="Twitter"
        placeholder="https://twitter.com"
        {...register('twitter')}
      />
      <Input
        label="Facebook"
        placeholder="https://facebook.com"
        {...register('facebook')}
      />
      <Input
        label="LinkedIn"
        placeholder="https://linkedin.com"
        {...register('linkedin')}
      />
      <Input
        label="Instagram"
        placeholder="https://instagram.com"
        {...register('instagram')}
      />

      <div className="flex flex-col">
        <Label label="Main Color" />
        <input
          type="color"
          className="h-12 w-full rounded-md p-1"
          {...register('ctaColor')}
        />
      </div>
    </form>
  );
};

export default FormFields;

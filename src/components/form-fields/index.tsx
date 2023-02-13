import { Input } from '@/components/common';

const FormFields = ({ register }) => {
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
        placeholder="janesmith@acme.com"
        {...register('email')}
      />
      <Input type="url" label="Personal Website" {...register('website')} />

      <Input
        type="url"
        label="Profile Picture"
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
      <Input type="url" label="Company Logo" {...register('companyLogo')} />

      <h3 className="mt-2 -mb-2 font-medium">Social Media</h3>

      <Input
        prefix="https://twitter.com/"
        label="Twitter"
        {...register('twitter')}
      />
      <Input
        prefix="https://facebook.com/"
        label="Facebook"
        {...register('facebook')}
      />
      <Input
        prefix="https://linkedin.com/in/"
        label="LinkedIn"
        {...register('linkedin')}
      />
      <Input
        prefix="https://instagram.com/"
        label="Instagram"
        {...register('instagram')}
      />

      <h3 className="mt-2 -mb-2 font-medium">CTA Color</h3>
      <div className="flex items-center space-x-4">
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

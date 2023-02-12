import { useForm } from 'react-hook-form';

import { defaultValues } from '@/utils';
import Preview from '@/components/preview';
import { Input } from '@/components/common';

const Home = () => {
  const { register, control } = useForm({ defaultValues });

  return (
    <div className="flex h-screen items-start">
      <div className="h-full w-[520px] shrink-0 space-y-6 overflow-y-auto border border-r-[1px] border-gray-200 bg-white p-8">
        <div className="mb-6">
          <h2 className="mb-1 text-2xl font-semibold">
            Email Signature Generator
          </h2>
          <p className="text-sm text-gray-400">
            Enter your details below to generate your email signature.
          </p>
        </div>

        <form className="flex flex-col gap-y-6">
          <Input label="Full Name" {...register('fullName')} />
          <Input
            label="Pronouns"
            placeholder="He / Him"
            {...register('pronouns')}
          />
          <Input label="Role" {...register('role')} />
          <Input
            type="number"
            label="Phone number"
            inputMode="numeric"
            // placeholder="+1 234 567 890"
            {...register('phoneNumber')}
          />
          <Input
            type="email"
            label="Email Address"
            placeholder="janesmith@acme.com"
            {...register('email')}
          />
          <Input type="url" label="Website" {...register('website')} />

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

          <Input label="Twitter" {...register('twitter')} />
          <Input label="Facebook" {...register('facebook')} />
          <Input label="LinkedIn" {...register('linkedin')} />
          <Input label="Instagram" {...register('instagram')} />

          <h3 className="mt-2 -mb-2 font-medium">Colors</h3>
          <div className="flex items-center space-x-4">
            <input
              type="color"
              className="h-12 w-full rounded-md p-1"
              {...register('ctaColor')}
            />
          </div>
        </form>

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

      <div className="h-full w-full bg-white p-8">
        <Preview control={control} />
      </div>
    </div>
  );
};

export default Home;

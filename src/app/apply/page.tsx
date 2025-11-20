import MembershipForm from '../../components/forms/MembershipForm';

export default function ApplyPage(){
  return (
    <div className="pt-28 pb-12">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Apply for GCA Membership</h1>
        <p className="mt-2">Fill the form below to apply. Upload documents and we will review your application.</p>
        <div className="mt-6">
          <MembershipForm />
        </div>
      </div>
    </div>
  )
}

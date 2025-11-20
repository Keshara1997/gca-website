'use client';

import { useForm } from 'react-hook-form';
import { supabase } from '../../lib/supabaseClient';
import { useState } from 'react';

type FormData = {
  full_name: string;
  email: string;
  nationality?: string;
  membership_type: string;
  document?: FileList;
  photo?: FileList;
};

export default function MembershipForm(){
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function uploadFile(bucket: string, file: File, path: string){
    const { data, error } = await supabase.storage.from(bucket).upload(path, file, { upsert: true });
    if(error) throw error;
    return data.path;
  }

  async function onSubmit(values: FormData){
    setLoading(true);
    setMessage(null);
    try{
      const memberId = crypto.randomUUID();
      let document_path = null;
      let photo_path = null;

      if(values.document && values.document.length > 0){
        const file = values.document[0];
        const path = `member_documents/${memberId}/${Date.now()}_${file.name}`;
        document_path = await uploadFile('member_documents', file, path);
      }
      if(values.photo && values.photo.length > 0){
        const file = values.photo[0];
        const path = `member_photos/${memberId}/${Date.now()}_${file.name}`;
        photo_path = await uploadFile('member_photos', file, path);
      }

      const { error } = await supabase.from('members').insert([{
        id: memberId,
        full_name: values.full_name,
        email: values.email,
        nationality: values.nationality || null,
        membership_type: values.membership_type,
        document_path: document_path,
        photo_path: photo_path
      }]);

      if(error) throw error;
      setMessage('Application submitted — we will review and contact you.');
      reset();
    } catch(err: any){
      console.error(err);
      setMessage('Error submitting application: ' + (err.message || String(err)));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Apply for Membership</h2>
      <div className="grid grid-cols-1 gap-4">
        <input {...register('full_name', { required: true })} placeholder="Full name" className="input" />
        <input {...register('email', { required: true })} type="email" placeholder="Email" className="input" />
        <input {...register('nationality')} placeholder="Nationality" className="input" />
        <select {...register('membership_type', { required: true })} className="input">
          <option value="student">Student</option>
          <option value="associate">Associate</option>
          <option value="professional">Professional</option>
          <option value="senior">Senior Professional</option>
        </select>
        <label className="text-sm">Upload Document (certificate / qualification)</label>
        <input {...register('document')} type="file" accept=".pdf,.jpg,.png" className="input" />
        <label className="text-sm">Upload Photo (optional)</label>
        <input {...register('photo')} type="file" accept="image/*" className="input" />
        <button type="submit" disabled={loading} className="px-4 py-2 rounded-xl bg-gca-500 text-white">
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </div>
    </form>
  )
}

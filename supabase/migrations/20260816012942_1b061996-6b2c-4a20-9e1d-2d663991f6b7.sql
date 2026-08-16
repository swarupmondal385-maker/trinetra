CREATE TABLE public.sponsor_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  designation text,
  company text NOT NULL,
  email text NOT NULL,
  phone text,
  website text,
  industry text,
  budget text,
  package text,
  category text,
  objective text,
  meeting text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.sponsor_enquiries TO anon, authenticated;
GRANT ALL ON public.sponsor_enquiries TO service_role;

ALTER TABLE public.sponsor_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a sponsor enquiry"
ON public.sponsor_enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
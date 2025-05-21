
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for the entire app
export const supabase = createClient(
  'https://mezlaxdblnwotmsapuen.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lemxheGRibG53b3Rtc2FwdWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3OTAyODUsImV4cCI6MjA2MzM2NjI4NX0.19YIoLbQj2yOw_-VsaizOhiPcqyWBPxLToapw9wkUuk'
);

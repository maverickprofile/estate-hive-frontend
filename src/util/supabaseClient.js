import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mtjxfyzcuuvtplemliwe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10anhmeXpjdXV2dHBsZW1saXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNzU3NTYsImV4cCI6MjA2ODg1MTc1Nn0.KxsHhDcmJIDcPncNXgL05QvDvOm20l0t0vTQdSF0qPg';

export const supabase = createClient(supabaseUrl, supabaseKey);
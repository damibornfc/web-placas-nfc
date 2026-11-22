import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qidaccjbwndfjlomtzrl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpZGFjY2pid25kZmpsb210enJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ2OTU2MjYsImV4cCI6MjExMDI3MTYyNn0.bEOr7TgPIKPJJcspWm21FtuXmWrjG6wvAwv8uQIy-Qg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

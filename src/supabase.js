import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ixcnrtxvisygwdhtfeps.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Y25ydHh2aXN5Z3dkaHRmZXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1MDc3ODUsImV4cCI6MjA0MzA4Mzc4NX0.nO8h429ZPDDX9H0nT7Nm1vNA_-kYjE1MYa_0Wb2VLSM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

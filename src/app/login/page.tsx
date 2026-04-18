import LoginContent from "./_components/LoginContent";
// ===================================================
async function Login({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
  const { error } = await searchParams;
  return (
    <main className="w-full flex justify-center pt-6">
      <LoginContent e={error} />
    </main>
  );
}

export default Login;

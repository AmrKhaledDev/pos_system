function AuthButtonSubmit({
  buttonTxt,
  buttonTxtLoading,
  disabled,
  loading,
}: {
  buttonTxt: string;
  buttonTxtLoading: string;
  disabled: boolean;
  loading: boolean;
}) {
  return (
    <button
      disabled={loading}
      type="submit"
      className="bg-yellow-600 disabled:cursor-default disabled:text-gray-500 disabled:bg-gray-200 hover:bg-yellow-500 hover:scale-102 transition-css shadow mt-5 text-white font-bold rounded-lg cursor-pointer py-3 px-6"
    >
      {loading ? buttonTxtLoading : buttonTxt}
    </button>
  );
}

export default AuthButtonSubmit;

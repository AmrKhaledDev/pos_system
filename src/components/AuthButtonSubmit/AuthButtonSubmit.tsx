function AuthButtonSubmit({ buttonTxt }: { buttonTxt: string }) {
  return (
    <button
      type="submit"
      className="bg-yellow-600 hover:bg-yellow-500 hover:scale-102 transition-css shadow mt-5 text-white font-bold rounded-lg cursor-pointer py-3 px-6"
    >
      {buttonTxt}
    </button>
  );
}

export default AuthButtonSubmit;

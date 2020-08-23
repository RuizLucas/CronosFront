import Router from "next/router";
import { useState } from "react";
import validarInicarSesion from "../validaciones/validarInicarSesion";
import useValidacion from "../hooks/useValidacion";
import Error from "../components/Error";

export default function Home() {
  const [error, setError] = useState(false);

  const SATATE_INICIAL = {
    email: "",
    password: "",
  };

  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(SATATE_INICIAL, validarInicarSesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    console.log("iniciar session....");
    try {
      //logeo a la api
      Router.push("/dashboard");
    } catch (error) {
      console.error("Hubo un error al iniciar el usuario :", error.message);
      setError(error.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-grey-lighter h-screen font-sans">
          <div className="container mx-auto h-full flex justify-center items-center">
            <div className="w-1/3">
              <h1 className="font-normal mb-6 text-center">Login Cronos</h1>
              <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label className="font-bold text-grey-darker block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="lock appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                    type="text"
                    placeholder="Tu Email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errores.email && <Error mensaje={errores.email} />}
                <div className="mb-4">
                  <label className="font-bold text-grey-darker block mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    className="lock appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                    type="password"
                    placeholder="Tu Password"
                    value={password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onBlur={handleBlur}
                  />
                </div>
                {errores.password && <Error mensaje={errores.password} />}
                <div className="flex items-center justify-between">
                  <input
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    value="Login"
                  />
                  <a
                    className="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

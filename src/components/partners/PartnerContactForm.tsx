import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";
import { type ChangeEvent, type FormEvent, useMemo, useState } from "react";

type FormValues = {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  alianza: string;
  mensaje: string;
  aceptaDatos: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const allianceOptions = [
  "Complementacion tecnica",
  "Proyecto conjunto",
  "Union temporal",
  "Marca blanca",
  "Escalamiento de equipos",
  "Oportunidad comercial",
  "Otra",
] as const;

const initialValues: FormValues = {
  nombre: "",
  empresa: "",
  correo: "",
  telefono: "",
  alianza: "",
  mensaje: "",
  aceptaDatos: false,
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.nombre.trim()) errors.nombre = "Ingresa tu nombre.";
  if (!values.empresa.trim()) errors.empresa = "Ingresa el nombre de tu empresa.";

  if (!values.correo.trim()) {
    errors.correo = "Ingresa un correo corporativo.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.correo)) {
    errors.correo = "El formato del correo no es valido.";
  }

  if (!values.telefono.trim()) errors.telefono = "Ingresa un telefono de contacto.";
  if (!values.alianza) errors.alianza = "Selecciona el tipo de alianza.";
  if (!values.mensaje.trim()) errors.mensaje = "Comparte un mensaje breve.";
  if (!values.aceptaDatos) errors.aceptaDatos = "Debes aceptar el tratamiento de datos.";

  return errors;
}

export function PartnerContactForm() {
  const reduceMotion = useReducedMotion();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [result, setResult] = useState<"idle" | "sending" | "success" | "error">("idle");

  const inputClass = useMemo(
    () =>
      "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#1e1e1e] placeholder:text-slate-400 focus:outline-none focus:border-[#00ADEE] focus:ring-2 focus:ring-[#00ADEE]/20 transition",
    [],
  );

  const onChange =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value =
        field === "aceptaDatos"
          ? (event.target as HTMLInputElement).checked
          : event.target.value;

      setValues((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setResult("error");
      return;
    }

    setErrors({});
    setResult("sending");

    const formData = new FormData();
    formData.append("access_key", "7c41b04a-29a5-4857-b971-5f1097835a50");
    formData.append("subject", "Nueva solicitud de alianza - Partners Intelecto");
    formData.append("from_name", "Partners Intelecto");
    formData.append("name", values.nombre);
    formData.append("company", values.empresa);
    formData.append("email", values.correo);
    formData.append("phone", values.telefono);
    formData.append("alliance_type", values.alianza);
    formData.append("message", values.mensaje);
    formData.append("accepted_data_policy", values.aceptaDatos ? "Si" : "No");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { success?: boolean };

      if (!response.ok || !data.success) {
        throw new Error("submit-error");
      }

      setResult("success");
      setValues(initialValues);
    } catch {
      setResult("error");
    }
  };

  return (
    <section id="contacto-partners" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#1e1e1e] sm:text-4xl lg:text-5xl">
            Conversemos sobre tu proxima alianza
          </h2>
          <p className="mt-4 text-slate-600">
            Queremos entender tu oportunidad para sumar capacidades tecnicas, comerciales y
            contractuales.
          </p>
        </motion.div>

        <motion.form
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          onSubmit={onSubmit}
          noValidate
          className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-28px_rgba(2,12,102,0.4)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="partner-name" className="mb-1.5 block text-sm font-medium text-[#1e1e1e]">
                Nombre
              </label>
              <input
                id="partner-name"
                name="nombre"
                value={values.nombre}
                onChange={onChange("nombre")}
                className={inputClass}
                aria-invalid={Boolean(errors.nombre)}
                aria-describedby={errors.nombre ? "partner-name-error" : undefined}
              />
              {errors.nombre && (
                <p id="partner-name-error" className="mt-1 text-xs text-red-600">
                  {errors.nombre}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="partner-company" className="mb-1.5 block text-sm font-medium text-[#1e1e1e]">
                Empresa
              </label>
              <input
                id="partner-company"
                name="empresa"
                value={values.empresa}
                onChange={onChange("empresa")}
                className={inputClass}
                aria-invalid={Boolean(errors.empresa)}
                aria-describedby={errors.empresa ? "partner-company-error" : undefined}
              />
              {errors.empresa && (
                <p id="partner-company-error" className="mt-1 text-xs text-red-600">
                  {errors.empresa}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="partner-email" className="mb-1.5 block text-sm font-medium text-[#1e1e1e]">
                Correo corporativo
              </label>
              <input
                id="partner-email"
                type="email"
                name="correo"
                value={values.correo}
                onChange={onChange("correo")}
                className={inputClass}
                aria-invalid={Boolean(errors.correo)}
                aria-describedby={errors.correo ? "partner-email-error" : undefined}
              />
              {errors.correo && (
                <p id="partner-email-error" className="mt-1 text-xs text-red-600">
                  {errors.correo}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="partner-phone" className="mb-1.5 block text-sm font-medium text-[#1e1e1e]">
                Telefono
              </label>
              <input
                id="partner-phone"
                name="telefono"
                value={values.telefono}
                onChange={onChange("telefono")}
                className={inputClass}
                aria-invalid={Boolean(errors.telefono)}
                aria-describedby={errors.telefono ? "partner-phone-error" : undefined}
              />
              {errors.telefono && (
                <p id="partner-phone-error" className="mt-1 text-xs text-red-600">
                  {errors.telefono}
                </p>
              )}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="partner-alliance" className="mb-1.5 block text-sm font-medium text-[#1e1e1e]">
              Tipo de alianza
            </label>
            <select
              id="partner-alliance"
              name="alianza"
              value={values.alianza}
              onChange={onChange("alianza")}
              className={inputClass}
              aria-invalid={Boolean(errors.alianza)}
              aria-describedby={errors.alianza ? "partner-alliance-error" : undefined}
            >
              <option value="">Selecciona una opcion</option>
              {allianceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.alianza && (
              <p id="partner-alliance-error" className="mt-1 text-xs text-red-600">
                {errors.alianza}
              </p>
            )}
          </div>

          <div className="mt-5">
            <label htmlFor="partner-message" className="mb-1.5 block text-sm font-medium text-[#1e1e1e]">
              Mensaje
            </label>
            <textarea
              id="partner-message"
              name="mensaje"
              rows={4}
              value={values.mensaje}
              onChange={onChange("mensaje")}
              className={inputClass}
              aria-invalid={Boolean(errors.mensaje)}
              aria-describedby={errors.mensaje ? "partner-message-error" : undefined}
            />
            {errors.mensaje && (
              <p id="partner-message-error" className="mt-1 text-xs text-red-600">
                {errors.mensaje}
              </p>
            )}
          </div>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-700" htmlFor="partner-policy">
              <input
                id="partner-policy"
                type="checkbox"
                checked={values.aceptaDatos}
                onChange={onChange("aceptaDatos")}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[#00ADEE]"
                aria-invalid={Boolean(errors.aceptaDatos)}
                aria-describedby={errors.aceptaDatos ? "partner-policy-error" : undefined}
              />
              Acepto el tratamiento de mis datos personales.
            </label>
            {errors.aceptaDatos && (
              <p id="partner-policy-error" className="mt-2 text-xs text-red-600">
                {errors.aceptaDatos}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={result === "sending"}
            className="mt-6 h-11 w-full rounded-xl bg-[#020c66] text-white hover:bg-[#03158a]"
          >
            {result === "sending" ? "Enviando..." : "Enviar solicitud de alianza"}
            <Send size={18} />
          </Button>

          {result === "success" && (
            <p className="mt-3 text-center text-sm text-emerald-700">
              Solicitud enviada. Te contactaremos pronto para evaluar la oportunidad.
            </p>
          )}
          {result === "error" && Object.keys(errors).length === 0 && (
            <p className="mt-3 text-center text-sm text-red-700">
              Ocurrio un problema al enviar la solicitud. Intenta nuevamente.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
